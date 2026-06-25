import { formatCurrency, formatPercent } from '../formatters.js';
import { getProgress } from '../calculations.js';

export function ProgressCard({ title, current, target, description = '', variant = '' }) {
  const progress = getProgress(current, target);

  return `
    <article class="card ${variant}">
      <div class="card__kicker">progresso</div>
      <h2 class="card__title">${title}</h2>
      <div class="card__value">${formatCurrency(current)}</div>
      <p class="card__description">${description}</p>

      <div class="info-row">
        <span class="info-row__label">Alvo</span>
        <span class="info-row__value">${formatCurrency(target)}</span>
      </div>
      <div class="info-row">
        <span class="info-row__label">Progresso</span>
        <span class="info-row__value">${formatPercent(progress)}</span>
      </div>

      <div class="progress">
        <div class="progress__bar" style="width: ${progress}%"></div>
      </div>
    </article>
  `;
}
