import { SKINS } from '../game/Skins.js';
import { THEMES } from '../world/Themes.js';

export class Menu {
  constructor({ onPlay, onStartRandom, onSettings, onGetCoins, onSpendCoins, onGetDiamonds, onSpendDiamonds, onSetName, onRandomName, onRedeem, onUnlockSkin, onListServers, onCreateServer, onJoinServer, onGetStats }) {
    this.onSettings = onSettings;
    this.onGetCoins = onGetCoins || (() => 0);
    this.onSpendCoins = onSpendCoins || (() => false);
    this.onGetDiamonds = onGetDiamonds || (() => 0);
    this.onSpendDiamonds = onSpendDiamonds || (() => false);
    this.onRedeem = onRedeem || (() => ({ ok: false, msg: '' }));
    this.onSetName = onSetName || (() => {});
    this.onRandomName = onRandomName || (() => 'player');
    this.onUnlockSkin = onUnlockSkin || (() => {});
    this.onListServers = onListServers || (async () => []);
    this.onCreateServer = onCreateServer || (async () => ({ ok: false, err: 'backend disabled' }));
    this.onJoinServer = onJoinServer || (async () => ({ ok: false, err: 'backend disabled' }));
    this.onGetStats = onGetStats || (() => ({ g: 0, s: 0, b: 0 }));
    this.currentPanel = 'home';
    this.adModal = null;
    this.buyModal = null;
    this.resultsEl = null;
    this.createModal = null;
    this.joinModal = null;

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
        <div class="stats-chip" id="home-stats"></div>

        <div class="menu-panel" id="panel-home">
          <div class="name-row">
            <input type="text" id="player-name" maxlength="16" spellcheck="false" autocomplete="off" placeholder="PLAYER NAME" />
            <button class="menu-btn tiny" id="btn-random-name">RANDOM</button>
          </div>
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-random">RANDOM SERVER</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-maps">MAPS</button>
          <button class="menu-btn" id="btn-online">ONLINE SERVER</button>
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

        <div class="menu-panel" id="panel-online" style="display:none">
          <div class="panel-title small">ONLINE ARENA</div>
          <div class="skin-hint" id="online-status">Create a server or join one. Public servers get up to 5 secret PRO fighters sneaking in over time.</div>
          <div class="setting-row">
            <label>Room name</label>
            <input type="text" id="srv-name" maxlength="24" placeholder="My Arena" autocomplete="off" />
          </div>
          <div class="srv-actions">
            <button class="menu-btn small" id="btn-create-server">CREATE SERVER</button>
            <button class="menu-btn small" id="btn-refresh-servers">REFRESH</button>
          </div>
          <div class="skin-scroll" style="max-height:52vh">
            <div class="server-list" id="server-list"><div class="srv-status">Loading servers…</div></div>
          </div>
          <button class="menu-btn small" id="btn-back-5">BACK</button>
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
    $('btn-online').addEventListener('click', () => {
      // No account needed — online play works for everyone.
      this.showPanel('online');
      this.refreshServerList();
    });
    $('btn-back-5').addEventListener('click', () => this.showPanel('home'));
    $('btn-create-server').addEventListener('click', () => this.createServerFlow());
    $('btn-refresh-servers').addEventListener('click', () => this.refreshServerList());
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
    this.onUnlockSkin(id);
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
    this.refreshOnlineButton();
    const $ = (id) => this.root.querySelector(`#${id}`);
    $('panel-home').style.display = which === 'home' ? 'grid' : 'none';
    $('panel-skins').style.display = which === 'skins' ? 'block' : 'none';
    $('panel-maps').style.display = which === 'maps' ? 'block' : 'none';
    $('panel-settings').style.display = which === 'settings' ? 'block' : 'none';
    $('panel-controls').style.display = which === 'controls' ? 'block' : 'none';
    $('panel-online').style.display = which === 'online' ? 'block' : 'none';
    if (which === 'skins') {
      this.refreshCoins();
      this.renderSkinGrid();
      for (const btn of this.shopCats.querySelectorAll('.shop-cat')) {
        btn.classList.toggle('sel', btn.dataset.cat === this.shopFilter);
      }
    }
  }

  refreshOnlineButton() {
    // Online play needs no account — the button is always available.
    const btn = this.root.querySelector('#btn-online');
    if (btn) btn.style.display = '';
  }

  async refreshServerList() {
    const list = this.root.querySelector('#server-list');
    if (!list) return;
    list.innerHTML = '<div class="srv-status">Loading servers…</div>';
    let servers = [];
    try { servers = await this.onListServers(); } catch { servers = []; }
    if (!servers || !servers.length) {
      list.innerHTML = '<div class="srv-status">No open servers. Create one to start playing online.</div>';
      return;
    }
    list.innerHTML = servers.map((s) => `
      <button class="server-row" data-id="${s.id}" data-locked="${s.hasPassword ? 1 : 0}">
        <span class="server-name">${s.name || 'Arena'}${s.hasPassword ? ' <span class="lock-chip">&#128274;</span>' : ''}</span>
        <span class="server-host">by ${s.hostName || s.hostId}</span>
        <span class="server-meta">${s.map || 'citadel'} &middot; ${s.playerCount || 0}/${s.capacity} players &middot; ${s.bots || 0} bot${(s.bots || 0) === 1 ? '' : 's'}${s.hasPassword ? ' &middot; <b>PRIVATE</b>' : ''}</span>
      </button>`).join('');
    for (const row of list.querySelectorAll('.server-row')) {
      row.addEventListener('click', () => this.joinServerFlow(row.dataset.id, row.dataset.locked === '1'));
    }
  }

  createServerFlow() {
    this.showCreateModal();
  }

  // Create-server modal: map, public/private (+ passcode), player/bot limit
  // and how many bots fill those slots at start.
  showCreateModal() {
    if (this.createModal) return;
    const ov = document.createElement('div');
    ov.id = 'create-modal';
    const mapOptions = Object.entries(THEMES)
      .map(([id, t]) => `<option value="${id}">${t.name || id}</option>`)
      .join('');
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">CREATE SERVER</div>
        <div class="setting-row"><label>Map</label><select id="cm-map" class="menu-select">${mapOptions}</select></div>
        <div class="setting-row"><label>Access</label>
          <div class="cm-access">
            <button class="menu-btn small cm-acc sel" id="cm-public">PUBLIC</button>
            <button class="menu-btn small cm-acc" id="cm-private">PRIVATE</button>
          </div>
        </div>
        <div class="setting-row" id="cm-pass-row" style="display:none">
          <label>Passcode</label>
          <input type="text" id="cm-pass" maxlength="16" placeholder="Passcode" autocomplete="off" />
        </div>
        <div class="setting-row"><label>Player / bot limit</label><select id="cm-limit" class="menu-select"></select></div>
        <div class="setting-row"><label>Bots at start</label><select id="cm-bots" class="menu-select"></select></div>
        <div class="ad-status" id="cm-status">Bots fill the player slots — a joining player replaces one.</div>
        <div class="srv-actions">
          <button class="menu-btn" id="cm-create">CREATE</button>
          <button class="menu-btn small" id="cm-cancel">CANCEL</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
    this.createModal = ov;

    const limitSel = ov.querySelector('#cm-limit');
    for (let n = 2; n <= 15; n++) {
      const o = document.createElement('option');
      o.value = String(n);
      o.textContent = `${n} fighters`;
      if (n === 8) o.selected = true;
      limitSel.appendChild(o);
    }
    const botsSel = ov.querySelector('#cm-bots');
    const fillBots = () => {
      const limit = Number(limitSel.value) || 8;
      const prev = Number(botsSel.value) || 0;
      botsSel.innerHTML = '';
      for (let n = 0; n <= limit; n++) {
        const o = document.createElement('option');
        o.value = String(n);
        o.textContent = n === 0 ? 'No bots' : `${n} bot${n > 1 ? 's' : ''}`;
        if (n === Math.min(prev, limit)) o.selected = true;
        botsSel.appendChild(o);
      }
    };
    fillBots();
    limitSel.addEventListener('change', fillBots);

    const pubBtn = ov.querySelector('#cm-public');
    const privBtn = ov.querySelector('#cm-private');
    const passRow = ov.querySelector('#cm-pass-row');
    const setAccess = (priv) => {
      pubBtn.classList.toggle('sel', !priv);
      privBtn.classList.toggle('sel', priv);
      passRow.style.display = priv ? 'flex' : 'none';
    };
    pubBtn.addEventListener('click', () => setAccess(false));
    privBtn.addEventListener('click', () => setAccess(true));

    ov.querySelector('#cm-cancel').addEventListener('click', () => { ov.remove(); this.createModal = null; });
    ov.querySelector('#cm-create').addEventListener('click', async () => {
      const status = ov.querySelector('#cm-status');
      const isPrivate = privBtn.classList.contains('sel');
      const pass = (ov.querySelector('#cm-pass').value || '').trim();
      if (isPrivate && !pass) {
        status.style.color = '#ff8a7a';
        status.textContent = 'Enter a passcode for the private server.';
        return;
      }
      const input = this.root.querySelector('#srv-name');
      const name = (input && input.value.trim()) || 'My Arena';
      status.style.color = '#9dff7a';
      status.textContent = 'Creating server…';
      const opts = {
        map: ov.querySelector('#cm-map').value,
        capacity: Number(limitSel.value) || 8,
        bots: Number(botsSel.value) || 0,
        password: isPrivate ? pass : null
      };
      const res = await this.onCreateServer(name, opts);
      if (!res.ok) {
        status.style.color = '#ff8a7a';
        status.textContent = res.err || 'Failed to create server.';
      }
      // On success the game starts (menu hides itself).
      ov.remove();
      this.createModal = null;
    });
  }

  async joinServerFlow(id, hasPassword) {
    if (hasPassword) { this.showJoinModal(id); return; }
    await this.doJoin(id, '');
  }

  // Private servers stay listed but ask for the passcode before joining.
  showJoinModal(id) {
    if (this.joinModal) return;
    const ov = document.createElement('div');
    ov.id = 'join-modal';
    ov.innerHTML = `
      <div class="ad-card">
        <div class="ad-title">PRIVATE SERVER</div>
        <div class="ad-sub">This server is locked. Enter its passcode to join.</div>
        <div class="setting-row"><label>Passcode</label><input type="text" id="jm-pass" maxlength="16" placeholder="Passcode" autocomplete="off" /></div>
        <div class="ad-status" id="jm-status"></div>
        <div class="srv-actions">
          <button class="menu-btn" id="jm-join">JOIN</button>
          <button class="menu-btn small" id="jm-cancel">CANCEL</button>
        </div>
      </div>`;
    document.body.appendChild(ov);
    this.joinModal = ov;
    const pass = ov.querySelector('#jm-pass');
    try { pass.focus(); } catch { /* ignore */ }
    const tryJoin = () => this.doJoin(id, pass.value.trim(), ov.querySelector('#jm-status'));
    ov.querySelector('#jm-join').addEventListener('click', tryJoin);
    pass.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryJoin(); });
    ov.querySelector('#jm-cancel').addEventListener('click', () => { ov.remove(); this.joinModal = null; });
  }

  async doJoin(id, password, statusEl) {
    const status = statusEl || this.root.querySelector('#online-status');
    if (status) { status.textContent = 'Joining…'; status.style.color = '#9dff7a'; }
    const res = await this.onJoinServer(id, password || '');
    if (!res.ok) {
      if (status) { status.textContent = res.err || 'Could not join.'; status.style.color = '#ff8a7a'; }
      return;
    }
    if (this.joinModal) { this.joinModal.remove(); this.joinModal = null; }
  }

  refreshStats() {
    const el = this.root.querySelector('#home-stats');
    if (!el) return;
    const st = this.onGetStats();
    const total = (st.g || 0) + (st.s || 0) + (st.b || 0);
    el.innerHTML =
      `<b>WINS:</b> ${total}` +
      ` <span class="m-g">GOLD ${st.g || 0}</span>` +
      ` <span class="m-s">SILVER ${st.s || 0}</span>` +
      ` <span class="m-b">BRONZE ${st.b || 0}</span>` +
      ` &nbsp;&bull;&nbsp; <b>COINS:</b> ${Number(this.onGetCoins() || 0).toLocaleString()}` +
      ` &nbsp;&bull;&nbsp; <b>DIAMONDS:</b> ${Number(this.onGetDiamonds() || 0).toLocaleString()}`;
  }

  refreshCoins() {
    const chip = this.root.querySelector('#coins-chip');
    if (chip) {
      const coins = Number(this.onGetCoins() || 0).toLocaleString();
      const dias = Number(this.onGetDiamonds() || 0).toLocaleString();
      chip.textContent = `COINS: ${coins}  \u25c6 ${dias}`;
    }
    this.refreshStats();
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
    this.refreshOnlineButton();
  }

  showResults(rows, opts = {}) {
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
        <div class="vote-box" id="vote-box" style="display:none">
          <div class="vote-title">PLAY AGAIN?</div>
          <div class="vote-tally" id="vote-tally">0 / 0 agree</div>
          <div class="vote-timer" id="vote-timer"></div>
          <div class="srv-actions">
            <button class="menu-btn" id="btn-vote-yes">PLAY AGAIN</button>
            <button class="menu-btn small" id="btn-vote-leave">LEAVE</button>
          </div>
        </div>
        <div class="res-note" id="res-note"></div>
      </div>`;
    document.body.appendChild(ov);
    this.resultsEl = ov;
    ov.querySelector('#btn-vote-yes').addEventListener('click', () => { if (opts.onVoteYes) opts.onVoteYes(); });
    ov.querySelector('#btn-vote-leave').addEventListener('click', () => { if (opts.onLeave) opts.onLeave(); });
    this._lastVoteRender = '';
  }

  showVotePanel() {
    if (!this.resultsEl) return;
    const box = this.resultsEl.querySelector('#vote-box');
    if (box) box.style.display = 'block';
  }

  updateVotePanel({ yes, total, left, voted }) {
    if (!this.resultsEl) return;
    const key = `${yes}|${total}|${left}|${voted ? 1 : 0}`;
    if (key === this._lastVoteRender) return;
    this._lastVoteRender = key;
    const tally = this.resultsEl.querySelector('#vote-tally');
    const timer = this.resultsEl.querySelector('#vote-timer');
    const btn = this.resultsEl.querySelector('#btn-vote-yes');
    const note = this.resultsEl.querySelector('#res-note');
    if (tally) tally.textContent = `${yes} / ${total} agree`;
    if (timer) timer.textContent = left > 0 ? `next round starts in ${left}s` : 'starting…';
    if (btn) {
      btn.textContent = voted ? 'VOTED \u2713' : 'PLAY AGAIN';
      btn.disabled = !!voted;
      btn.style.opacity = voted ? '0.55' : '1';
    }
    if (note) note.textContent = voted
      ? 'You agreed — you will stay for the rematch.'
      : 'Agree to stay. When time runs out, everyone who did not agree is kicked.';
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
