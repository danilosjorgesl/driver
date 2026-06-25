import { GoalCard } from '../components/GoalCard.js';
import { ProgressCard } from '../components/ProgressCard.js';
import { getTodayProductionTotal, getUsefulCashFromGross } from '../calculations.js';

export function GoalsPage(store) {
  return {
    render() {
      const state = store.getState();
      const productionTotal = getTodayProductionTotal(state.productionToday);
      const usefulCash = getUsefulCashFromGross(productionTotal, state.settings.usefulCashRate);

      return `
        <section class="page">
          <h2 class="page-title">Metas</h2>
          <p class="page-subtitle">Meta operacional separada da missão financeira.</p>

          ${GoalCard({
            title: 'Meta operacional de hoje',
            current: productionTotal,
            target: state.productionToday.target,
            description: 'Meta em bruto Uber + 99. Serve para acompanhar a rua.',
            variant: 'card--hero',
          })}

          ${ProgressCard({
            title: 'Caixa útil estimado',
            current: usefulCash,
            target: getUsefulCashFromGross(state.productionToday.target, state.settings.usefulCashRate),
            description: 'Regra prática: 75% do bruto pode virar caixa útil se não houver gastos pessoais extras.',
          })}

          <article class="card">
            <h2 class="card__title">Régua realista</h2>
            <div class="info-row"><span class="info-row__label">Dia fraco</span><span class="info-row__value">R$ 500</span></div>
            <div class="info-row"><span class="info-row__label">Dia normal</span><span class="info-row__value">R$ 600</span></div>
            <div class="info-row"><span class="info-row__label">Dia bom</span><span class="info-row__value">R$ 650 a R$ 700</span></div>
            <div class="info-row"><span class="info-row__label">Dia excepcional</span><span class="info-row__value">R$ 800+</span></div>
          </article>
        </section>
      `;
    },

    bind() {},
  };
}
