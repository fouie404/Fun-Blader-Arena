import { SKINS } from '../game/Skins.js';
import { THEMES } from '../world/Themes.js';

export class Menu {
  constructor({ onPlay, onStartRandom, onSettings, onGetCoins, onSpendCoins, onGetDiamonds, onSpendDiamonds, onSetName, onRandomName, onRedeem }) {
    this.onSettings = onSettings;
    this.onGetCoins = onGetCoins || (() => 0);
    this.onSpendCoins = onSpendCoins || (() => false);
    this.onGetDiamonds = onGetDiamonds || (() => 0);
    this.onSpendDiamonds = onSpendDiamonds || (() => false);
    this.onRedeem = onRedeem || (() => ({ ok: false, msg: '' }));
    this.onSetName = onSetName || (() => {});
    this.onRandomName = onRandomName || (() => 'player');
    this.currentPanel = 'home';
    this.adModal = null;
    this.buyModal = null;
    this.resultsEl = null;

    this.root = document.createElement('div');
    this.root.id = 'menu';
    this.shopFilter = 'all';
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
          <div class="name-row">
            <input type="text" id="player-name" maxlength="14" spellcheck="false" autocomplete="off" placeholder="PLAYER NAME" />
            <button class="menu-btn tiny" id="btn-random-name">RANDOM</button>
          </div>
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-random">RANDOM SERVER</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-maps">MAPS</button>
          <button class="menu-btn" id="btn-settings">SETTINGS</button>
          <button class="menu-btn" id="btn-controls">CONTROLS</button>
        </div>

        <div class="menu-panel" id="panel-skins" style="display:none">
          <div class="panel-title small">CHOOSE YOUR KNIGHT</div>
          <div class="coins-chip" id="coins-chip"></div>
          <div class="shop-cats" id="shop-cats"></div>
          <div class="skin-hint">Your knight stands in the center &mdash; pick a skin and watch it change live. Earn coins with kills!</div>
          <div id="skin-action"></div>
          <div class="skin-scroll">
            <div class="skin-arrows">
              <button class="skin-arrow" id="skin-prev">&uarr;</button>
              <button class="skin-arrow" id="skin-next">&darr;</button>
            </div>
            <div class="skin-grid" id="skin-grid"></div>
          </div>
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
            <label>Shadows</label>
            <input type="checkbox" id="set-shadows" checked />
          </div>
          <div class="setting-row">
            <label>Promocode</label>
            <input type="text" id="promo-input" placeholder="Enter code" autocomplete="off" />
            <button class="menu-btn tiny" id="btn-redeem">REDEEM</button>
          </div>
          <div class="ad-status" id="promo-status"></div>
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

    this.pauseOverlay = null;

    const $ = (id) => this.root.querySelector(`#${id}`);

    $('btn-play').addEventListener('click', () => {
      this.showServerLoading(
        onPlay,
        3000,
        'PREPARING SERVER',
        'Finding queue players...'
      );
    });
    $('btn-random').addEventListener('click', () => {
      this.showServerLoading(onStartRandom, 2000 + Math.random() * 1000);
    });
    $('btn-skins').addEventListener('click', () => this.showPanel('skins'));
    $('btn-maps').addEventListener('click', () => this.showPanel('maps'));
    $('btn-settings').addEventListener('click', () => this.showPanel('settings'));
    $('btn-controls').addEventListener('click', () => this.showPanel('controls'));
    $('btn-back-1').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-2').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-3').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-4').addEventListener('click', () => this.showPanel('home'));

    const nameInput = $('player-name');
    nameInput.addEventListener('change', () => this.onSetName(nameInput.value));
    $('btn-random-name').addEventListener('click', () => {
      nameInput.value = this.onRandomName();
      this.onSetName(nameInput.value);
    });

    this.skinGrid = $('skin-grid');
    this.skinGrid.addEventListener('click', (e) => {
      const btn = e.target.closest('.skin-card');
      if (!btn || !btn.dataset.skin) return;
      if (btn.classList.contains('locked')) {
        this.previewLockedSkin(btn.dataset.skin);
        return;
      }
      this.hideSkinAction();
      this.selectSkin(btn.dataset.skin);
      this.onSettings({ skin: btn.dataset.skin });
    });

    const cats = [
      ['all', 'ALL'],
      ['owned', 'OWNED'],
      ['free', 'FREE'],
      ['ads', 'ADS SKIN'],
      ['purchasable', 'PURCHASABLE']
    ];
    this.shopCats = $('shop-cats');
    this.shopCats.innerHTML = cats
      .map(([id, label]) => `<button class="shop-cat" data-cat="${id}">${label}</button>`)
      .join('');
    this.shopCats.addEventListener('click', (e) => {
      const btn = e.target.closest('.shop-cat');
      if (!btn) return;
      this.shopFilter = btn.dataset.cat;
      this.renderSkinGrid();
    });
    this.renderSkinGrid();

    $('skin-prev').addEventListener('click', () => {
      this.skinGrid.scrollBy({ top: -320, behavior: 'smooth' });
    });
    $('skin-next').addEventListener('click', () => {
      this.skinGrid.scrollBy({ top: 320, behavior: 'smooth' });
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
    $('set-shadows').addEventListener('change', (e) => {
      this.onSettings({ shadows: e.target.checked });
    });

    const promoInput = $('promo-input');
    const promoStatus = $('promo-status');
    const doRedeem = () => {
      const res = this.onRedeem(promoInput.value);
      promoStatus.textContent = res.msg || '';
      promoStatus.style.color = res.ok ? '#9dff7a' : '#ff8a7a';
      if (res.ok) promoInput.value = '';
    };
    $('btn-redeem').addEventListener('click', doRedeem);
    promoInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') doRedeem();
    });
  }

  showServerLoading(onDone, ms = 2500, title = 'FINDING SERVER', status = 'Searching nearby matches...') {
    if (this.serverLoading) return;
    const ov = document.createElement('div');
    ov.id = 'server-loading';
    const dots = [0, 1, 2].map(() => '<span class="load-dot"></span>').join('');
    ov.innerHTML = `
      <div class="load-card">
        <div class="load-title">${title}</div>
        <div class="load-dots">${dots}</div>
        <div class="load-status">${status}</div>
      </div>`;
    document.body.appendChild(ov);
    this.serverLoading = ov;
    setTimeout(() => {
      ov.remove();
      this.serverLoading = null;
      onDone();
    }, ms);
  }

  getUnlocked() {
    try {
      const raw = localStorage.getItem('fba-unlocked-skins');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  renderSkinGrid() {
    if (!this.skinGrid) return;
    const unlocked = this.getUnlocked();
    const filter = this.shopFilter;
    const cards = Object.entries(SKINS)
      .filter(([id, s]) => {
        const owned = unlocked.includes(id);
        switch (filter) {
          case 'owned': return owned;
          case 'free': return s.rarity === 'free';
          case 'ads': return !!s.premium;
          case 'purchasable': return !!s.price || !!s.priceD;
          default: return true;
        }
      })
      .map(([id, s]) => {
        const p = `#${s.primary.toString(16).padStart(6, '0')}`;
        const a = `#${s.accent.toString(16).padStart(6, '0')}`;
        const locked = (s.premium || s.price || s.priceD) && !unlocked.includes(id);
        const rarity = (s.rarity || 'free').toUpperCase();
        const priceTxt = s.premium
          ? null
          : s.priceD
            ? `${Number(s.priceD).toLocaleString()} ◆`
            : `${Number(s.price).toLocaleString()} coins`;
        const tag = s.premium
          ? '<span class="ad-tag">AD</span>'
          : priceTxt
            ? `<span class="ad-tag buy">${priceTxt}</span>`
            : '';
        const desc = locked
          ? s.premium
            ? 'LOCKED — watch ad to unlock'
            : `BUY — ${priceTxt}`
          : s.desc;
        return `
          <button class="skin-card r-${s.rarity || 'free'}${locked ? ' locked' : ''}" data-skin="${id}">
            <span class="rarity-tag">${rarity}</span>
            <span class="skin-chip" style="background:linear-gradient(135deg,${p} 55%,${a})"></span>
            <span class="skin-name">${s.name}</span>
            <span class="skin-desc">${desc}</span>
            ${locked ? tag : ''}
          </button>`;
      })
      .join('');
    this.skinGrid.innerHTML = cards || '<div class="srv-status">Nothing here yet.</div>';
    const current = this.lastAppliedSkin || 'knight';
    for (const card of this.skinGrid.querySelectorAll('.skin-card')) {
      const isLocked = card.classList.contains('locked');
      card.classList.toggle('sel', !isLocked && card.dataset.skin === current);
    }
  }

  unlockSkin(id) {
    const u = this.getUnlocked();
    if (!u.includes(id)) {
      u.push(id);
      try { localStorage.setItem('fba-unlocked-skins', JSON.stringify(u)); } catch (e) { /* ignore */ }
    }
    this.renderSkinGrid();
    this.refreshCoins();
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
    this.showSkinAction(id);
  }

  showSkinAction(id) {
    const s = SKINS[id];
    if (!s) return;
    const row = this.root.querySelector('#skin-action');
    if (!row) return;
    row.style.display = 'flex';
    const label = s.premium ? 'WATCH AD TO UNLOCK' : `BUY NOW — ${Number(s.price).toLocaleString()} COINS`;
    row.innerHTML = `
      <span class="sa-info">Previewing <b>${s.name}</b> — ${s.premium ? 'unlock by watching an ad' : 'buy it to keep it forever'}</span>
      <button class="menu-btn small" id="sa-action">${label}</button>
    `;
    row.querySelector('#sa-action').addEventListener('click', () => {
      if (s.premium) this.showAdModal(id);
      else this.showBuyModal(id);
    });
  }

  hideSkinAction() {
    const row = this.root.querySelector('#skin-action');
    if (row) {
      row.style.display = 'none';
      row.innerHTML = '';
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
    if (which !== 'skins') this.hideSkinAction();
    const $ = (id) => this.root.querySelector(`#${id}`);
    $('panel-home').style.display = which === 'home' ? 'grid' : 'none';
    $('panel-skins').style.display = which === 'skins' ? 'block' : 'none';
    $('panel-maps').style.display = which === 'maps' ? 'block' : 'none';
    $('panel-settings').style.display = which === 'settings' ? 'block' : 'none';
    $('panel-controls').style.display = which === 'controls' ? 'block' : 'none';
    if (which === 'skins') {
      this.refreshCoins();
      this.renderSkinGrid();
      for (const btn of this.shopCats.querySelectorAll('.shop-cat')) {
        btn.classList.toggle('sel', btn.dataset.cat === this.shopFilter);
      }
    }
  }

  refreshCoins() {
    const chip = this.root.querySelector('#coins-chip');
    if (chip) {
      const coins = Number(this.onGetCoins() || 0).toLocaleString();
      const dias = Number(this.onGetDiamonds() || 0).toLocaleString();
      chip.textContent = `COINS: ${coins}  \u25c6 ${dias}`;
    }
  }

  showBuyModal(skinId) {
    if (this.buyModal) return;
    const s = SKINS[skinId];
    if (!s) return;
    const useDia = !!s.priceD;
    const price = useDia ? s.priceD : s.price;
    const curName = useDia ? 'DIAMONDS' : 'COINS';
    const bal = Number((useDia ? this.onGetDiamonds() : this.onGetCoins()) || 0);
    const ov = document.createElement('div');
    ov.id = 'buy-modal';
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">${s.name.toUpperCase()}</div>
        <div class="ad-sub">${s.desc}</div>
        <div class="buy-price ${useDia ? 'dia' : ''}">${Number(price).toLocaleString()} ${curName}</div>
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
      const need = Math.max(0, price - bal);
      st.style.color = bad ? '#ff8a7a' : '#e8e2d5';
      st.textContent = msg || `Balance: ${bal.toLocaleString()} / ${price.toLocaleString()} ${curName}` + (need > 0 ? ` — need ${need.toLocaleString()} more` : ' — you can afford this!');
    };
    updateStatus();

    ov.querySelector('#buy-cancel').addEventListener('click', () => {
      ov.remove();
      this.buyModal = null;
    });
    ov.querySelector('#buy-confirm').addEventListener('click', () => {
      const ok = useDia ? this.onSpendDiamonds(s.priceD) : this.onSpendCoins(s.price);
      if (ok) {
        this.unlockSkin(skinId);
        ov.remove();
        this.buyModal = null;
        this.refreshCoins();
        this.hideSkinAction();
        this.selectSkin(skinId);
        this.onSettings({ skin: skinId });
      } else {
        updateStatus(useDia ? 'Not enough diamonds! Collect glowing diamonds in the arena.' : 'Not enough coins! Kill knights — 20 coins each.', true);
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
    $('set-shadows').checked = s.shadows;
    const nameInput = $('player-name');
    if (document.activeElement !== nameInput) nameInput.value = s.playerName || '';
    this.selectSkin(s.skin || 'knight');
    this.selectMap(s.map || 'citadel');
  }

  showResults(rows) {
    if (this.resultsEl) return;
    const medals = ['#ffd700', '#c8ccd4', '#cd8f4a'];
    const places = [
      { r: rows[1], p: 2, cls: 'second' },
      { r: rows[0], p: 1, cls: 'first' },
      { r: rows[2], p: 3, cls: 'third' }
    ];
    const ov = document.createElement('div');
    ov.id = 'results';
    ov.innerHTML = `
      <div class="res-card">
        <div class="res-title">MATCH OVER</div>
        <div class="res-sub">Top fighters of the round</div>
        <div class="res-podium">
          ${places
            .map(({ r, p, cls }) => {
              if (!r) return '<div class="res-col empty"></div>';
              return `
                <div class="res-col ${cls}">
                  <div class="res-crown" style="background:linear-gradient(180deg,${medals[p - 1]},#6a5a20)"></div>
                  <div class="res-place" style="color:${medals[p - 1]}">#${p}</div>
                  <div class="res-name">${r.name}</div>
                  <div class="res-kills">${r.kills} KILLS</div>
                </div>`;
            })
            .join('')}
        </div>
        <button class="menu-btn" id="btn-start-over">BACK TO MENU</button>
      </div>`;
    document.body.appendChild(ov);
    this.resultsEl = ov;
    ov.querySelector('#btn-start-over').addEventListener('click', () => {
      location.reload();
    });
  }

  hideResults() {
    if (this.resultsEl) {
      this.resultsEl.remove();
      this.resultsEl = null;
    }
  }

  hideAll() {
    this.root.style.display = 'none';
  }

  showMain() {
    this.root.style.display = 'flex';
    this.showPanel('home');
  }
}
