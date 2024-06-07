export function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("es-AR");
  return formatter.format(amount);
}