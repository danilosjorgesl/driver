import { formatCurrency } from '../formatters.js';

export function TransactionItem({ label, value, detail = '' }) {
  return `
    <div class="info-row">
      <span class="info-row__label">${label}${detail ? `<br><small>${detail}</small>` : ''}</span>
      <span class="info-row__value">${formatCurrency(value)}</span>
    </div>
  `;
}
