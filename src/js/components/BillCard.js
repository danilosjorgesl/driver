import { formatCurrency } from '../formatters.js';

export function BillCard({ bill }) {
  const isPaid = bill.status === 'paid';

  return `
    <div class="bill ${isPaid ? 'bill--paid' : ''}">
      <input type="checkbox" data-bill-toggle="${bill.id}" ${isPaid ? 'checked' : ''} />
      <div class="bill__body">
        <div class="bill__name">${bill.dueLabel} • ${bill.name}</div>
        <div class="bill__meta">${bill.category || 'conta'}${bill.endsAt ? ` • até ${bill.endsAt}` : ''}${bill.priority ? ` • prioridade ${bill.priority}` : ''}</div>
      </div>
      <div class="bill__amount">${formatCurrency(bill.amount)}</div>
    </div>
  `;
}
