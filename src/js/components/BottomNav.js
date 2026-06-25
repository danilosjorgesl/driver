const navItems = [
  { route: 'home', label: 'Hoje', icon: '🏠' },
  { route: 'bills', label: 'Contas', icon: '💳' },
  { route: 'goals', label: 'Metas', icon: '🎯' },
  { route: 'projects', label: 'Projetos', icon: '📈' },
  { route: 'more', label: 'Mais', icon: '☰' },
];

export function BottomNav({ currentRoute }) {
  return `
    <nav class="bottom-nav">
      ${navItems.map((item) => `
        <button class="bottom-nav__button ${currentRoute === item.route ? 'is-active' : ''}" data-route="${item.route}">
          <span class="bottom-nav__icon">${item.icon}</span>
          ${item.label}
        </button>
      `).join('')}
    </nav>
  `;
}
