import { SKINS } from '../game/Skins.js';

export class Menu {
  constructor({ onPlay, onResume, onQuitToMenu, onSettings }) {
    this.onSettings = onSettings;
    this.currentPanel = 'home';

    this.root = document.createElement('div');
    this.root.id = 'menu';
    const skinCards = Object.entries(SKINS)
      .map(([id, s]) => {
        const p = `#${s.primary.toString(16).padStart(6, '0')}`;
        const a = `#${s.accent.toString(16).padStart(6, '0')}`;
        return `
          <button class="skin-card" data-skin="${id}">
            <span class="skin-chip" style="background:linear-gradient(135deg,${p} 55%,${a})"></span>
            <span class="skin-name">${s.name}</span>
            <span class="skin-desc">${s.desc}</span>
          </button>`;
      })
      .join('');

    this.root.innerHTML = `
      <div class="menu-inner">
        <h1 class="game-title">BLADE ARENA</h1>
        <div class="game-subtitle">Fight &middot; Fall &middot; Rise Again</div>

        <div class="menu-panel" id="panel-home">
          <button class="menu-btn" id="btn-play">PLAY</button>
          <button class="menu-btn" id="btn-skins">SKINS</button>
          <button class="menu-btn" id="btn-settings">SETTINGS</button>
          <button class="menu-btn" id="btn-controls">CONTROLS</button>
        </div>

        <div class="menu-panel" id="panel-skins" style="display:none">
          <div class="panel-title">CHOOSE YOUR KNIGHT</div>
          <div class="skin-hint">Your knight stands on the arena floor behind this panel &mdash; pick a skin and watch it change live.</div>
          <div class="skin-grid" id="skin-grid">${skinCards}</div>
          <button class="menu-btn small" id="btn-back-3">BACK</button>
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

        <div class="menu-footer">Created by <b>Fouie404</b> &mdash; v1.2 &mdash; local arena with AI knights, multiplayer-ready.</div>
      </div>
    `;
    document.body.appendChild(this.root);

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
    $('btn-settings').addEventListener('click', () => this.showPanel('settings'));
    $('btn-controls').addEventListener('click', () => this.showPanel('controls'));
    $('btn-back-1').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-2').addEventListener('click', () => this.showPanel('home'));
    $('btn-back-3').addEventListener('click', () => this.showPanel('home'));

    this.skinGrid = $('skin-grid');
    this.skinGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.skin-card');
      if (!card) return;
      this.selectSkin(card.dataset.skin);
      this.onSettings({ skin: card.dataset.skin });
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

    this.pauseOverlay.addEventListener('click', () => onResume());
    $p('btn-quit').addEventListener('click', (e) => {
      e.stopPropagation();
      onQuitToMenu();
    });
  }

  selectSkin(id) {
    for (const card of this.skinGrid.querySelectorAll('.skin-card')) {
      card.classList.toggle('sel', card.dataset.skin === id);
    }
  }

  showPanel(which) {
    this.currentPanel = which;
    this.root.classList.toggle('skins-mode', which === 'skins');
    const $ = (id) => this.root.querySelector(`#${id}`);
    $('panel-home').style.display = which === 'home' ? 'flex' : 'none';
    $('panel-skins').style.display = which === 'skins' ? 'block' : 'none';
    $('panel-settings').style.display = which === 'settings' ? 'block' : 'none';
    $('panel-controls').style.display = which === 'controls' ? 'block' : 'none';
  }

  applySettings(s) {
    const $ = (id) => this.root.querySelector(`#${id}`);
    $('set-sens').value = s.sensitivity;
    $('val-sens').textContent = Number(s.sensitivity).toFixed(1);
    $('set-vol').value = s.volume;
    $('val-vol').textContent = `${Math.round(s.volume * 100)}%`;
    $('set-shadows').checked = s.shadows;
    this.selectSkin(s.skin || 'knight');
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
