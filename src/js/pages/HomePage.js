import { formatCurrency } from '../formatters.js';
import { getCashTotal, getTodayProductionTotal, getGoalRemaining } from '../calculations.js';

export function HomePage(store) {
  return {
    render() {
      const state = store.getState();
      const cashTotal = getCashTotal(state.cash);
      const productionTotal = getTodayProductionTotal(state.productionToday);
      const remaining = getGoalRemaining(state.productionToday.target, productionTotal);
      const nextRisk =
        state.bills.find((bill) => bill.status !== 'paid' && bill.category === 'kovi') ||
        state.bills.find((bill) => bill.status !== 'paid');

      return `
        <section class="page">
          <h2 class="page-title">Hoje</h2>
          <p class="page-subtitle">Resumo direto para abrir na rua e decidir rápido.</p>

          <div class="home-cards">
            <article class="card card--hero">
              <div class="card__kicker">dinheiro disponível</div>
              <h2 class="card__title">💰 Caixa atual</h2>
              <div class="card__value">${formatCurrency(cashTotal)}</div>
              <div class="info-row"><span class="info-row__label">Uber</span><span class="info-row__value">${formatCurrency(state.cash.uber)}</span></div>
              <div class="info-row"><span class="info-row__label">99</span><span class="info-row__value">${formatCurrency(state.cash.ninetyNine)}</span></div>
              <div class="info-row"><span class="info-row__label">Nubank</span><span class="info-row__value">${formatCurrency(state.cash.nubank)}</span></div>
              <div class="info-row"><span class="info-row__label">Dinheiro</span><span class="info-row__value">${formatCurrency(state.cash.cash)}</span></div>
            </article>

            <article class="card">
              <div class="card__kicker">produção</div>
              <h2 class="card__title">🚕 Feito hoje</h2>
              <div class="card__value">${formatCurrency(productionTotal)}</div>
              <div class="info-row"><span class="info-row__label">Uber</span><span class="info-row__value">${formatCurrency(state.productionToday.uber)}</span></div>
              <div class="info-row"><span class="info-row__label">99</span><span class="info-row__value">${formatCurrency(state.productionToday.ninetyNine)}</span></div>
            </article>

            <article class="card">
              <div class="card__kicker">meta operacional</div>
              <h2 class="card__title">🎯 Falta hoje</h2>
              <div class="card__value">${formatCurrency(remaining)}</div>
              <p class="card__description">Meta em bruto Uber + 99. Não é o mesmo que caixa livre.</p>
              <div class="info-row"><span class="info-row__label">Meta</span><span class="info-row__value">${formatCurrency(state.productionToday.target)}</span></div>
            </article>

            <article class="card card--warning">
              <div class="card__kicker">próximo risco</div>
              <h2 class="card__title">🚨 Próxima obrigação</h2>
              ${
                nextRisk
                  ? `
                    <div class="card__value">${formatCurrency(nextRisk.amount)}</div>
                    <p class="card__description">${nextRisk.name} • ${nextRisk.dueLabel}</p>
                  `
                  : `<p class="empty-state">Nenhuma obrigação pendente.</p>`
              }
            </article>
          </div>
        </section>
      `;
    },

    bind() {},
  };
}
