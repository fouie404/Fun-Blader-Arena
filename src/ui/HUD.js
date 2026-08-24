export class HUD {
  constructor() {
    this.root = document.createElement('div');
    this.root.id = 'hud';
    this.root.innerHTML = `
      <div class="hp-panel">
        <div class="hp-label"><span>HP</span><span id="hp-text">100/100</span></div>
        <div class="hp-bar"><div id="hp-fill"></div></div>
      </div>

      <div id="match-panel">
        <div id="round-timer">8:00</div>
        <div id="top3-list"></div>
      </div>

      <div id="announce-feed"></div>

      <div class="score-panel">
        <div><span class="k">KILLS:</span> <span id="kills-val">0</span></div>
        <div><span class="d">DEATHS:</span> <span id="deaths-val">0</span></div>
        <div class="coins-line">COINS: <span id="coins-val">0</span></div>
        <div class="diamonds-line">DIAMONDS: <span id="dia-val">0</span></div>
      </div>

      <div class="controls-hint">
        <div><kbd>LMB</kbd> Attack</div>
        <div><kbd>RMB</kbd> Block</div>
        <div><kbd>WASD</kbd> Move</div>
        <div><kbd>2&times;WASD</kbd> Dash</div>
        <div><kbd>SPACE</kbd> Jump</div>
        <div><kbd>SHIFT</kbd> Sprint</div>
        <div><kbd>TAB</kbd> Scoreboard</div>
        <div><kbd>M</kbd> Menu</div>
      </div>

      <div id="crosshair">
        <span class="ch-tick t"></span>
        <span class="ch-tick b"></span>
        <span class="ch-tick l"></span>
        <span class="ch-tick r"></span>
      </div>

      <div id="dmg-vignette"></div>

      <div id="elimination">
        <div class="elim-title">ELIMINATION!</div>
        <div class="elim-sub">+1 Kill</div>
      </div>
    `;
    this.root.style.display = 'none';
    document.body.appendChild(this.root);

    this.deathScreen = document.createElement('div');
    this.deathScreen.id = 'death-screen';
    this.deathScreen.style.display = 'none';
    this.deathScreen.innerHTML = `
      <div class="death-title">YOU DIED</div>
      <div class="death-sub">Respawning...</div>
      <div class="death-count" id="death-count">3</div>
    `;
    document.body.appendChild(this.deathScreen);

    this.respawnFlashEl = document.createElement('div');
    this.respawnFlashEl.id = 'respawn-flash';
    this.respawnFlashEl.textContent = 'RESPAWN!';
    this.respawnFlashEl.style.display = 'none';
    document.body.appendChild(this.respawnFlashEl);

    const q = (sel) => this.root.querySelector(sel);
    this.hpFill = q('#hp-fill');
    this.hpText = q('#hp-text');
    this.killsVal = q('#kills-val');
    this.deathsVal = q('#deaths-val');
    this.coinsVal = q('#coins-val');
    this.diaVal = q('#dia-val');
    this.roundTimer = q('#round-timer');
    this.top3List = q('#top3-list');
    this.announceFeed = q('#announce-feed');
    this._lastTimer = '';
    this._lastTop = '';
    this.crosshair = q('#crosshair');
    this.vignette = q('#dmg-vignette');
    this.elimination = q('#elimination');
    this.deathCount = this.deathScreen.querySelector('#death-count');

    this._lastCountdown = -1;
  }

  setPlaying(v) {
    this.root.style.display = v ? 'block' : 'none';
  }

  setHP(cur, max) {
    const frac = Math.max(0, cur / max);
    this.hpFill.style.width = `${frac * 100}%`;
    this.hpFill.classList.toggle('low', frac <= 0.3);
    this.hpFill.classList.toggle('mid', frac > 0.3 && frac <= 0.55);
    this.hpText.textContent = `${Math.ceil(cur)}/${max}`;
    if (frac > 0 && frac <= 0.3) this.vignette.classList.add('low-hp');
    else this.vignette.classList.remove('low-hp');
  }

  setScore(kills, deaths) {
    this.killsVal.textContent = kills;
    this.deathsVal.textContent = deaths;
  }

  setCoins(n) {
    this.coinsVal.textContent = Number(n || 0).toLocaleString();
  }

  setDiamonds(n) {
    this.diaVal.textContent = Number(n || 0).toLocaleString();
  }

  setRoundTimer(sec) {
    const s = Math.max(0, Math.ceil(sec));
    const txt = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
    if (txt !== this._lastTimer) {
      this._lastTimer = txt;
      this.roundTimer.textContent = txt;
      if (s <= 30 && s > 0) {
        this.roundTimer.animate(
          [{ transform: 'scale(1.25)', color: '#ff8a7a' }, { transform: 'scale(1)', color: '#ffd76a' }],
          { duration: 400, easing: 'ease-out' }
        );
      }
    }
  }

  setTop3(entries) {
    const key = entries.map((r) => `${r.name}:${r.kills}`).join('|');
    if (key === this._lastTop) return;
    this._lastTop = key;
    const colors = ['#ffd700', '#c8ccd4', '#cd8f4a'];
    let html = '';
    for (let i = 0; i < 3; i++) {
      const r = entries[i];
      if (!r) continue;
      const icon = r.icon ? `<img class="t3-icon" src="${r.icon}" alt=""/>` : '<span class="t3-icon"></span>';
      html += `
        <div class="t3-card">
          <div class="t3-medal" style="background:${colors[i]}">${i + 1}</div>
          ${icon}
          <div class="t3-info">
            <div class="t3-name">${r.name}</div>
            <div class="t3-kills">${r.kills} KILLS</div>
          </div>
        </div>`;
    }
    this.top3List.innerHTML = html;
  }

  announce(text, type) {
    const row = document.createElement('div');
    row.className = 'announce-row' + (type === 'left' ? ' bad' : '');
    row.textContent = text;
    this.announceFeed.appendChild(row);
    while (this.announceFeed.children.length > 4) {
      this.announceFeed.firstChild.remove();
    }
    row.animate(
      [
        { opacity: 0, transform: 'translateX(-14px)' },
        { opacity: 1, transform: 'translateX(0)', offset: 0.15 },
        { opacity: 1, offset: 0.8 },
        { opacity: 0 }
      ],
      { duration: 4500, easing: 'ease-out' }
    ).onfinish = () => row.remove();
  }

  hitMarker(blocked) {
    this.crosshair.animate(
      [
        { transform: 'translate(-50%,-50%) scale(1)', filter: 'brightness(1)' },
        { transform: `translate(-50%,-50%) scale(${blocked ? 1.5 : 1.9})`, filter: blocked ? 'brightness(2.4) hue-rotate(180deg)' : 'brightness(2.6) sepia(1) saturate(6) hue-rotate(-15deg)' },
        { transform: 'translate(-50%,-50%) scale(1)', filter: 'brightness(1)' }
      ],
      { duration: 200, easing: 'ease-out' }
    );
  }

  damageFlash() {
    this.vignette.animate(
      [{ opacity: 0.85 }, { opacity: 0 }],
      { duration: 480, easing: 'ease-out' }
    );
  }

  showElimination() {
    const sub = this.elimination.querySelector('.elim-sub');
    if (sub) sub.textContent = '+1 Kill  \u2022  +20 Coins';
    this.elimination.animate(
      [
        { opacity: 0, transform: 'translate(-50%,-14px) scale(0.8)' },
        { opacity: 1, transform: 'translate(-50%,0) scale(1.08)', offset: 0.18 },
        { opacity: 1, transform: 'translate(-50%,0) scale(1)', offset: 0.35 },
        { opacity: 1, transform: 'translate(-50%,0) scale(1)', offset: 0.75 },
        { opacity: 0, transform: 'translate(-50%,-10px) scale(0.95)' }
      ],
      { duration: 1500, easing: 'ease-out' }
    );
  }

  showDeath() {
    this._lastCountdown = -1;
    this.deathScreen.style.display = 'flex';
    this.deathScreen.animate(
      [{ opacity: 0 }, { opacity: 1 }],
      { duration: 350, easing: 'ease-out' }
    );
  }

  setDeathCount(n) {
    if (n === this._lastCountdown) return;
    this._lastCountdown = n;
    this.deathCount.textContent = String(Math.max(n, 0));
    if (n > 0) {
      this.deathCount.animate(
        [
          { transform: 'scale(1.45)', opacity: 0.4 },
          { transform: 'scale(1)', opacity: 1 }
        ],
        { duration: 320, easing: 'ease-out' }
      );
    }
  }

  hideDeath() {
    this.deathScreen.style.display = 'none';
  }

  respawnFlash() {
    this.respawnFlashEl.style.display = 'block';
    this.respawnFlashEl.animate(
      [
        { opacity: 0, transform: 'translate(-50%,-50%) scale(0.7)' },
        { opacity: 1, transform: 'translate(-50%,-50%) scale(1.12)', offset: 0.25 },
        { opacity: 1, transform: 'translate(-50%,-50%) scale(1)', offset: 0.55 },
        { opacity: 0, transform: 'translate(-50%,-50%) scale(1.05)' }
      ],
      { duration: 1100, easing: 'ease-out' }
    ).onfinish = () => {
      this.respawnFlashEl.style.display = 'none';
    };
  }
}
