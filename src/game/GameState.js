export class GameState {
  constructor() {
    this.phase = 'menu';
    this.paused = false;
    this.settings = {
      sensitivity: 1.0,
      volume: 0.7,
      shadows: true,
      skin: 'knight',
      bots: 7
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
