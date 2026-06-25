import { BillCard } from '../components/BillCard.js';
import { formatCurrency } from '../formatters.js';
import { getPendingBillsTotal } from '../calculations.js';

export function BillsPage(store) {
  function toggleBill(id) {
    store.update((state) => {
      const bill = state.bills.find((item) => item.id === id);
      if (!bill) return state;

      bill.status = bill.status === 'paid' ? 'pending' : 'paid';

      if (bill.status === 'paid') {
        state.cash.nubank -= bill.amount;
      } else {
        state.cash.nubank += bill.amount;
      }

      return state;
    });
  }

  return {
    render() {
      const state = store.getState();
      const pendingTotal = getPendingBillsTotal(state.bills);

      return `
        <section class="page">
          <h2 class="page-title">Contas</h2>
          <p class="page-subtitle">Vencimentos, pendências e Kovi por data real.</p>

          <article class="card card--hero">
            <div class="card__kicker">pendente</div>
            <h2 class="card__title">Total em aberto</h2>
            <div class="card__value">${formatCurrency(pendingTotal)}</div>
            <p class="card__description">Inclui contas recorrentes, Kovi, pendências e parcelamentos cadastrados.</p>
          </article>

          <article class="card">
            <h2 class="card__title">Próximas obrigações</h2>
            ${state.bills.map((bill) => BillCard({ bill })).join('')}
          </article>
        </section>
      `;
    },

    bind() {
      document.querySelectorAll('[data-bill-toggle]').forEach((input) => {
        input.addEventListener('change', () => toggleBill(input.dataset.billToggle));
      });
    },
  };
}
