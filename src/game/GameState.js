export class GameState {
  constructor() {
    this.phase = 'menu';
    this.paused = false;
    try {
      const raw = localStorage.getItem('fba-coins');
      this.coins = raw === null ? 500 : parseInt(raw, 10) || 0;
      if (this.coins < 0) this.coins = 0;
    } catch (e) {
      this.coins = 500;
    }
    this.settings = {
      sensitivity: 1.0,
      volume: 0.7,
      shadows: true,
      skin: 'knight',
      map: 'citadel',
      bots: 10
    };
    this.roster = new Map();
  }

  register(stats) {
    this.roster.set(stats.name, stats);
  }

  rows() {
    return [...this.roster.values()].sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
  }
}
