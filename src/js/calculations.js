export function sumValues(items, selector = (item) => item.value) {
  return items.reduce((total, item) => total + Number(selector(item) || 0), 0);
}

export function getCashTotal(cash) {
  return sumValues([
    { value: cash.uber },
    { value: cash.ninetyNine },
    { value: cash.nubank },
    { value: cash.cash },
  ]);
}

export function getTodayProductionTotal(production) {
  return Number(production.uber || 0) + Number(production.ninetyNine || 0);
}

export function getPendingBillsTotal(bills) {
  return sumValues(bills.filter((bill) => bill.status !== 'paid'), (bill) => bill.amount);
}

export function getFreeCash(cash, bills) {
  return getCashTotal(cash) - getPendingBillsTotal(bills);
}

export function getProgress(current, target) {
  if (!target || target <= 0) return 0;
  return Math.min((current / target) * 100, 100);
}

export function getGoalRemaining(target, current) {
  return Math.max(Number(target || 0) - Number(current || 0), 0);
}

export function getStatusByFreeCash(freeCash) {
  if (freeCash < 0) return 'danger';
  if (freeCash < 500) return 'warning';
  return 'good';
}

export function getUsefulCashFromGross(gross, rate = 0.75) {
  return Number(gross || 0) * rate;
}
