export function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("es-AR");
  return formatter.format(amount);
}

export function getName(name: string) {
  const nameArray = name.split(' ')
  return nameArray[0]
}