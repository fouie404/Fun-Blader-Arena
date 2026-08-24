import { SKINS } from '../game/Skins.js';
import { THEMES } from '../world/Themes.js';

export class Menu {
  constructor({ onPlay, onResume, onQuitToMenu, onSettings, onGetCoins, onSpendCoins }) {
    this.onSettings = onSettings;
    this.onGetCoins = onGetCoins || (() => 0);
    this.onSpendCoins = onSpendCoins || (() => false);
    this.currentPanel = 'home';
    this.adModal = null;
    this.buyModal = null;

    this.root = document.createElement('div');
    this.root.id = 'menu';
    const unlocked = this.getUnlocked();
    const skinCards = Object.entries(SKINS)
      .map(([id, s]) => {
        const p = `#${s.primary.toString(16).padStart(6, '0')}`;
        const a = `#${s.accent.toString(16).padStart(6, '0')}`;
        const locked = (s.premium || s.price) && !unlocked.includes(id);
        const tag = s.premium ? '<span class="ad-tag">AD</span>' : s.price ? `<span class="ad-tag buy">${Number(s.price).toLocaleString()}</span>` : '';
        return `
          <button class="skin-card${locked ? ' locked' : ''}" data-skin="${id}">
            <span class="skin-chip" style="background:linear-gradient(135deg,${p} 55%,${a})"></span>
            <span class="skin-name">${s.name}</span>
            <span class="skin-desc">${locked ? (s.premium ? 'LOCKED &mdash; watch ad to unlock' : `BUY &mdash; ${Number(s.price).toLocaleString()} coins`) : s.desc}</span>
            ${locked ? tag : ''}
          </button>`;
      })
      .join('');
    const mapCards = Object.entries(THEMES)
      .map(([id, t]) => {
        const s1 = `#${t.sky.toString(16).padStart(6, '0')}`;
        const s2 = `#${t.sunColor.toString(16).padStart(6, '0')}`;
        return `
          <button class="skin-card" data-map="${id}">
            <span class="skin-chip" style="background:linear-gradient(160deg,${s1} 40%,${s2})"></span>
            <span class="skin-name">${t.name}</span>
            <span class="skin-desc">${t.desc}</span>
          </button>`;
      })
      .join('');

    this.root.innerHTML = `
      <div class="menu-inner">
        <h1 class="game-title">FUN BLADER ARENA</h1>
        <div class="game-subtitle">Fight &middot; Fall &middot; Rise Again</div>

        <div class="menu-panel" id="panel-home">
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-maps">MAPS</button>
          <button class="menu-btn" id="btn-settings">SETTINGS</button>
          <button class="menu-btn" id="btn-controls">CONTROLS</button>
        </div>

        <div class="menu-panel" id="panel-skins" style="display:none">
          <div class="panel-title small">CHOOSE YOUR KNIGHT</div>
          <div class="coins-chip" id="coins-chip"></div>
          <div class="skin-hint">Your knight stands in the center &mdash; pick a skin and watch it change live. Earn coins with kills!</div>
          <div class="skin-grid" id="skin-grid">${skinCards}</div>
          <button class="menu-btn small" id="btn-back-3">BACK</button>
        </div>

        <div class="menu-panel" id="panel-maps" style="display:none">
          <div class="panel-title small">CHOOSE YOUR BATTLEFIELD</div>
          <div class="skin-hint">The arena behind this panel is the live preview &mdash; pick a map to rebuild it instantly.</div>
          <div class="skin-grid" id="map-grid">${mapCards}</div>
          <button class="menu-btn small" id="btn-back-4">BACK</button>
        </div>

        <div class="menu-panel" id="panel-settings" style="display:none">
          <div class="panel-title">SETTINGS</div>
          <div class="setting-row">
            <label>Mouse Sensitivity</label>
            <input type="range" id="set-sens" min="0.3" max="3" step="0.1" value="1" />
            <span class="set-val" id="val-sens">1.0</span>
          </div>
          <div class="setting-row">
            <label>Volume</label>
            <input type="range" id="set-vol" min="0" max="1" step="0.05" value="0.7" />
            <span class="set-val" id="val-vol">70%</span>
          </div>
          <div class="setting-row">
            <label>Enemy Bots</label>
            <input type="range" id="set-bots" min="1" max="15" step="1" value="10" />
            <span class="set-val" id="val-bots">10</span>
          </div>
          <div class="setting-row">
            <label>Shadows</label>
            <input type="checkbox" id="set-shadows" checked />
          </div>
          <button class="menu-btn small" id="btn-back-1">BACK</button>
        </div>

        <div class="menu-panel" id="panel-controls" style="display:none">
          <div class="panel-title">CONTROLS</div>
          <div class="ctrl-list">
            <div><kbd>W A S D</kbd> Move</div>
            <div><kbd>MOUSE</kbd> Look / Camera</div>
            <div><kbd>LMB</kbd> Attack (3-hit combo)</div>
            <div><kbd>RMB</kbd> Block</div>
            <div><kbd>SPACE</kbd> Jump</div>
            <div><kbd>SHIFT</kbd> Sprint</div>
            <div><kbd>2&times;WASD</kbd> Dash</div>
            <div><kbd>TAB</kbd> Scoreboard</div>
            <div><kbd>M / ESC</kbd> Menu / Pause</div>
          </div>
          <button class="menu-btn small" id="btn-back-2">BACK</button>
        </div>

        <div class="ad-banner">
          <span class="ad-label">ADVERTISEMENT</span>
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5757231614668469" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>

        <div class="menu-footer">Created by <b>Fouie404</b> &mdash; v1.4 &mdash; local arena with AI knights, multiplayer-ready.</div>
      </div>
    `;
    document.body.appendChild(this.root);
    this.pushAd(this.root.querySelector('.adsbygoogle'));

    this.pauseOverlay = document.createElement('div');
    this.pauseOverlay.id = 'pause-overlay';
    this.pauseOverlay.innerHTML = `
      <div class="pause-card">
        <div class="pause-title">PAUSED</div>
        <div class="pause-sub">Click anywhere to resume</div>
        <button class="menu-btn small" id="btn-quit">QUIT TO MENU</button>
      </div>
    `;
    this.pauseOverlay.style.display = 'none';
    document.body.appendChild(this.pauseOverlay);

    const $ = (id) => this.root.querySelector(`#${id}`);
    const $p = (id) => this.pauseOverlay.querySelector(`#${id}`);

    $('btn-play').addEventListener('click', () => onPlay());
    $('btn-skins').addEventListener('click', () => this.showPanel('skins'));
    $('btn-maps').addEventListener('click', () => this.showPanel('maps'));
    $('btn-settings').addEventListener('click', () => this.showPanel('settings'));
    $('btn-controls').addEventListener('click', () => this.showPanel('controls'));
    $('btn-back-1').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-2').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-3').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-4').addEventListener('click', () => this.showPanel('home'));

    this.skinGrid = $('skin-grid');
    this.skinGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.skin-card');
      if (!btn || !btn.dataset.skin) return;
      if (btn.classList.contains('locked')) {
        this.previewLockedSkin(btn.dataset.skin);
        return;
      }
      this.hidePreviewBar();
      this.selectSkin(btn.dataset.skin);
      this.onSettings({ skin: btn.dataset.skin });
    });

    this.mapGrid = $('map-grid');
    this.mapGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.skin-card');
      if (!btn || !btn.dataset.map) return;
      this.selectMap(btn.dataset.map);
      this.onSettings({ map: btn.dataset.map });
    });

    const sens = $('set-sens');
    sens.addEventListener('input', () => {
      $('val-sens').textContent = Number(sens.value).toFixed(1);
      this.onSettings({ sensitivity: Number(sens.value) });
    });
    const vol = $('set-vol');
    vol.addEventListener('input', () => {
      $('val-vol').textContent = `${Math.round(vol.value * 100)}%`;
      this.onSettings({ volume: Number(vol.value) });
    });
    const bots = $('set-bots');
    bots.min = 1;
    bots.max = 15;
    bots.value = 10;
    bots.addEventListener('input', () => {
      $('val-bots').textContent = bots.value;
      this.onSettings({ bots: Number(bots.value) });
    });
    $('set-shadows').addEventListener('change', (e) => {
      this.onSettings({ shadows: e.target.checked });
    });

    this.pauseOverlay.addEventListener('click', () => onResume());
    $p('btn-quit').addEventListener('click', (e) => {
      e.stopPropagation();
      onQuitToMenu();
    });
  }

  getUnlocked() {
    try {
      const raw = localStorage.getItem('fba-unlocked-skins');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  unlockSkin(id) {
    const u = this.getUnlocked();
    if (!u.includes(id)) {
      u.push(id);
      try { localStorage.setItem('fba-unlocked-skins', JSON.stringify(u)); } catch (e) { /* ignore */ }
    }
    const card = this.skinGrid.querySelector(`[data-skin="${id}"]`);
    if (card) {
      card.classList.remove('locked');
      const d = card.querySelector('.skin-desc');
      if (d) d.textContent = SKINS[id].desc;
      const tag = card.querySelector('.ad-tag');
      if (tag) tag.remove();
    }
  }

  pushAd(ins) {
    if (!ins) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) { /* ads blocked or offline */ }
  }

  showAdModal(skinId) {
    if (this.adModal) return;
    const s = SKINS[skinId];
    if (!s) return;
    const ov = document.createElement('div');
    ov.id = 'ad-modal';
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">UNLOCK ${s.name.toUpperCase()}</div>
        <div class="ad-sub">Watch an ad to unlock this skin forever</div>
        <div class="ad-box">
          <span class="ad-label">ADVERTISEMENT</span>
          <ins class="adsbygoogle" style="display:block;width:300px;height:250px" data-ad-client="ca-pub-5757231614668469" data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>
        <div class="ad-progress"><div class="ad-bar" id="ad-bar"></div></div>
        <div class="ad-status" id="ad-status">Keep this open... 10</div>
        <button class="menu-btn small" id="ad-cancel">CANCEL</button>
      </div>`;
    document.body.appendChild(ov);
    this.adModal = ov;
    this.pushAd(ov.querySelector('.adsbygoogle'));

    let t = 10;
    const bar = ov.querySelector('#ad-bar');
    const st = ov.querySelector('#ad-status');
    const iv = setInterval(() => {
      t -= 1;
      bar.style.width = `${((10 - t) / 10) * 100}%`;
      st.textContent = t > 0 ? `Keep this open... ${t}` : 'UNLOCKED!';
      if (t <= 0) {
        clearInterval(iv);
        setTimeout(() => {
          this.unlockSkin(skinId);
          ov.remove();
          this.adModal = null;
          this.hidePreviewBar();
          this.selectSkin(skinId);
          this.onSettings({ skin: skinId });
        }, 700);
      }
    }, 1000);
    ov.querySelector('#ad-cancel').addEventListener('click', () => {
      clearInterval(iv);
      ov.remove();
      this.adModal = null;
    });
  }

  selectSkin(id, force = false) {
    for (const card of this.skinGrid.querySelectorAll('.skin-card')) {
      const isLocked = card.classList.contains('locked');
      if (isLocked && !force) {
        card.classList.remove('sel');
        continue;
      }
      card.classList.toggle('sel', card.dataset.skin === id);
    }
  }

  previewLockedSkin(id) {
    const s = SKINS[id];
    if (!s) return;
    this.selectSkin(id, true);
    this.onSettings({ skin: id });
    this.showPreviewBar(id);
  }

  showPreviewBar(id) {
    const s = SKINS[id];
    if (!s) return;
    this.hidePreviewBar();
    const bar = document.createElement('div');
    bar.id = 'preview-bar';
    const actionLabel = s.premium ? 'WATCH AD TO UNLOCK' : `BUY - ${Number(s.price).toLocaleString()} COINS`;
    bar.innerHTML = `
      <span class="pb-name">${s.name}</span>
      <span class="pb-sub">${s.premium ? 'Ad-locked skin - try it on!' : 'Previewing - buy to keep it'}</span>
      <button class="menu-btn small" id="pb-action">${actionLabel}</button>
      <button class="menu-btn small" id="pb-close">X</button>
    `;
    this.root.appendChild(bar);
    this.previewBar = bar;
    bar.querySelector('#pb-action').addEventListener('click', () => {
      if (s.premium) this.showAdModal(id);
      else this.showBuyModal(id);
    });
    bar.querySelector('#pb-close').addEventListener('click', () => {
      this.hidePreviewBar();
      const owned = this.lastAppliedSkin || 'knight';
      this.selectSkin(owned);
      this.onSettings({ skin: owned });
    });
  }

  hidePreviewBar() {
    if (this.previewBar) {
      this.previewBar.remove();
      this.previewBar = null;
    }
  }

  selectMap(id) {
    for (const card of this.mapGrid.querySelectorAll('.skin-card')) {
      card.classList.toggle('sel', card.dataset.map === id);
    }
  }

  showPanel(which) {
    this.currentPanel = which;
    this.root.classList.toggle('skins-mode', which === 'skins');
    this.root.classList.toggle('maps-mode', which === 'maps');
    if (which !== 'skins') this.hidePreviewBar();
    const $ = (id) => this.root.querySelector(`#${id}`);
    $('panel-home').style.display = which === 'home' ? 'grid' : 'none';
    $('panel-skins').style.display = which === 'skins' ? 'block' : 'none';
    $('panel-maps').style.display = which === 'maps' ? 'block' : 'none';
    $('panel-settings').style.display = which === 'settings' ? 'block' : 'none';
    $('panel-controls').style.display = which === 'controls' ? 'block' : 'none';
    if (which === 'skins') this.refreshCoins();
  }

  refreshCoins() {
    const chip = this.root.querySelector('#coins-chip');
    if (chip) chip.textContent = `YOUR COINS: ${Number(this.onGetCoins() || 0).toLocaleString()}`;
  }

  showBuyModal(skinId) {
    if (this.buyModal) return;
    const s = SKINS[skinId];
    if (!s) return;
    const ov = document.createElement('div');
    ov.id = 'buy-modal';
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">${s.name.toUpperCase()}</div>
        <div class="ad-sub">${s.desc}</div>
        <div class="buy-price">${Number(s.price).toLocaleString()} COINS</div>
        <div class="ad-status" id="buy-status"></div>
        <div class="srv-actions">
          <button class="menu-btn small" id="buy-confirm">BUY</button>
          <button class="menu-btn small" id="buy-cancel">CANCEL</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
    this.buyModal = ov;

    const st = ov.querySelector('#buy-status');
    const updateStatus = (msg, bad) => {
      const bal = Number(this.onGetCoins() || 0);
      const need = Math.max(0, s.price - bal);
      st.style.color = bad ? '#ff8a7a' : '#e8e2d5';
      st.textContent = msg || `Balance: ${bal.toLocaleString()} / ${s.price.toLocaleString()}` + (need > 0 ? ` — need ${need.toLocaleString()} more (50 per kill)` : ' — you can afford this!');
    };
    updateStatus();

    ov.querySelector('#buy-cancel').addEventListener('click', () => {
      ov.remove();
      this.buyModal = null;
    });
    ov.querySelector('#buy-confirm').addEventListener('click', () => {
      if (this.onSpendCoins(s.price)) {
        this.unlockSkin(skinId);
        ov.remove();
        this.buyModal = null;
        this.refreshCoins();
        this.hidePreviewBar();
        this.selectSkin(skinId);
        this.onSettings({ skin: skinId });
      } else {
        updateStatus('Not enough coins! Kill knights — 50 coins each.', true);
      }
    });
  }

  applySettings(s) {
    const $ = (id) => this.root.querySelector(`#${id}`);
    this.lastAppliedSkin = s.skin || 'knight';
    $('set-sens').value = s.sensitivity;
    $('val-sens').textContent = Number(s.sensitivity).toFixed(1);
    $('set-vol').value = s.volume;
    $('val-vol').textContent = `${Math.round(s.volume * 100)}%`;
    $('set-bots').value = s.bots;
    $('val-bots').textContent = String(s.bots);
    $('set-shadows').checked = s.shadows;
    this.selectSkin(s.skin || 'knight');
    this.selectMap(s.map || 'citadel');
  }

  hideAll() {
    this.root.style.display = 'none';
    this.pauseOverlay.style.display = 'none';
  }

  showMain() {
    this.root.style.display = 'flex';
    this.showPanel('home');
  }

  showPause() {
    this.pauseOverlay.style.display = 'flex';
  }

  hidePause() {
    this.pauseOverlay.style.display = 'none';
  }
}
