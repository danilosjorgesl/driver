import { clearState } from '../storage.js';
import { formatCurrency } from '../formatters.js';

export function MorePage(store) {
  function copyBackup() {
    navigator.clipboard.writeText(JSON.stringify(store.getState(), null, 2));
    alert('Backup copiado.');
  }

  function resetApp() {
    if (!confirm('Limpar dados salvos e voltar para os dados iniciais?')) return;
    clearState();
    location.reload();
  }

  return {
    render() {
      const state = store.getState();
      const lastDay = state.history[0];

      return `
        <section class="page">
          <h2 class="page-title">Mais</h2>
          <p class="page-subtitle">Histórico, backup e manutenção.</p>

          <article class="card">
            <h2 class="card__title">📋 Último dia real</h2>
            <div class="card__value">${formatCurrency(lastDay.gross)}</div>
            <p class="card__description">${lastDay.date} • líquido sem gastos pessoais: ${formatCurrency(lastDay.usefulNetWithoutPersonalExpenses)}</p>
            <div class="info-row"><span class="info-row__label">Uber</span><span class="info-row__value">${formatCurrency(lastDay.uber)}</span></div>
            <div class="info-row"><span class="info-row__label">99</span><span class="info-row__value">${formatCurrency(lastDay.ninetyNine)}</span></div>
            <div class="info-row"><span class="info-row__label">Km</span><span class="info-row__value">${lastDay.kilometers} km</span></div>
          </article>

          <article class="card">
            <h2 class="card__title">🏦 Empréstimo Uber</h2>
            <div class="card__value">${formatCurrency(state.uberLoan.currentBalance)}</div>
            <p class="card__description">${state.uberLoan.description}</p>
            <div class="info-row"><span class="info-row__label">Possível refinanciamento</span><span class="info-row__value">${formatCurrency(state.uberLoan.possibleRefinance)}</span></div>
          </article>

          <article class="card">
            <h2 class="card__title">🧰 Backup</h2>
            <div class="more-actions">
              <button class="btn btn--secondary" id="copyBackupButton">Copiar backup</button>
              <button class="btn" id="resetAppButton">Resetar dados salvos</button>
            </div>
          </article>
        </section>
      `;
    },

    bind() {
      document.querySelector('#copyBackupButton')?.addEventListener('click', copyBackup);
      document.querySelector('#resetAppButton')?.addEventListener('click', resetApp);
    },
  };
}
