export class Scoreboard {
  constructor() {
    this.visible = false;
    this.root = document.createElement('div');
    this.root.id = 'scoreboard';
    this.root.style.display = 'none';
    this.root.innerHTML = `
      <div class="sb-card">
        <div class="sb-title">SCOREBOARD</div>
        <table>
          <thead>
            <tr><th class="name">PLAYER</th><th>KILLS</th><th>DEATHS</th></tr>
          </thead>
          <tbody id="sb-body"></tbody>
        </table>
      </div>
    `;
    document.body.appendChild(this.root);
    this.body = this.root.querySelector('#sb-body');
  }

  setVisible(v, rows = null) {
    this.visible = v;
    this.root.style.display = v ? 'flex' : 'none';
    if (v && rows) this.refresh(rows);
  }

  refresh(rows) {
    let html = '';
    for (const r of rows) {
      const me = r.name === 'You' ? ' class="me"' : '';
      html += `<tr${me}><td class="name">${r.name}</td><td>${r.kills}</td><td>${r.deaths}</td></tr>`;
    }
    this.body.innerHTML = html;
  }
}
