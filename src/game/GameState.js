export class GameState {
  constructor() {
    this.phase = 'menu';
    this.paused = false;
    try {
      this.coins = parseInt(localStorage.getItem('fba-coins') || '0', 10) || 0;
    } catch (e) {
      this.coins = 0;
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
