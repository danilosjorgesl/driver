import { formatCurrency } from '../formatters.js';
import { getCashTotal, getFreeCash, getStatusByFreeCash } from '../calculations.js';

export function Header({ state }) {
  const cashTotal = getCashTotal(state.cash);
  const freeCash = getFreeCash(state.cash, state.bills);
  const status = getStatusByFreeCash(freeCash);

  const label = {
    good: 'Seguro',
    warning: 'Atenção',
    danger: 'Crítico',
  }[status];

  return `
    <header class="app-header">
      <div class="app-header__inner">
        <div class="app-header__top">
          <div class="app-logo">D</div>
          <div>
            <h1 class="app-title">Operação Danilo</h1>
            <p class="app-subtitle">Centro de comando claro, rápido e mobile-first</p>
          </div>
        </div>

        <div class="badge-row">
          <span class="badge">Caixa <strong>${formatCurrency(cashTotal)}</strong></span>
          <span class="badge">Caixa livre <strong class="status-${status}">${formatCurrency(freeCash)}</strong></span>
          <span class="badge">Status <strong class="status-${status}">${label}</strong></span>
        </div>
      </div>
    </header>
  `;
}
