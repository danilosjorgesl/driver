import { formatCurrency } from '../formatters.js';
import { getGoalRemaining } from '../calculations.js';

export function GoalCard({ title, current, target, description = '', variant = '' }) {
  const remaining = getGoalRemaining(target, current);

  return `
    <article class="card ${variant}">
      <div class="card__kicker">meta</div>
      <h2 class="card__title">${title}</h2>
      <div class="card__value">${formatCurrency(remaining)}</div>
      <p class="card__description">${description || 'faltam para completar esta meta.'}</p>

      <div class="info-row">
        <span class="info-row__label">Feito</span>
        <span class="info-row__value">${formatCurrency(current)}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">Meta</span>
        <span class="info-row__value">${formatCurrency(target)}</span>
      </div>
    </article>
  `;
}
