export class GameState {
  constructor() {
    this.phase = 'menu';
    this.paused = false;

    let savedName = '';
    let savedSkin = 'knight';
    let savedCoins;
    let savedDiamonds = 0;
    try {
      savedName = localStorage.getItem('fba-player-name') || '';
      savedSkin = localStorage.getItem('fba-skin') || 'knight';
      const raw = localStorage.getItem('fba-coins');
      savedCoins = raw === null ? 500 : parseInt(raw, 10) || 0;
      const rawD = localStorage.getItem('fba-diamonds');
      savedDiamonds = rawD === null ? 0 : parseInt(rawD, 10) || 0;
    } catch (e) {
      savedCoins = 500;
      savedDiamonds = 0;
    }
    if (savedCoins < 0) savedCoins = 0;
    this.coins = savedCoins;
    this.diamonds = savedDiamonds;

    this.settings = {
      sensitivity: 1.0,
      volume: 0.7,
      shadows: true,
      skin: savedSkin,
      map: 'citadel',
      bots: 10,
      roundMinutes: 5,
      playerName: savedName
    };

    this.roundLeft = this.settings.roundMinutes * 60;
    this.roundRunning = false;
    this.roundPhase = 'playing';

    this.roster = new Map();
  }

  register(stats) {
    this.roster.set(stats.name, stats);
  }

  unregister(name) {
    this.roster.delete(name);
  }

  rows() {
    return [...this.roster.values()].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
  }
}
