export const cutOffWord = (phrase, number) => {
  const cutOff = phrase.slice(0, number) + "" + ".......";
  return phrase.length >= number ? cutOff : phrase;
};

export function formatCurrency(value) {
  return new Intl.NumberFormat("th", {
    style: "currency",
    currency: "THB",
    maximumFractionDigits:2,
    minimumFractionDigits:0
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}
export function formatDateOnlyDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}
