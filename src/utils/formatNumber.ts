export const formatCurrency = (amount: number | string, decimalPlaces = 6) => {
  const formattedAmount = new Intl.NumberFormat("ko-KR", {
    style: "decimal",
    minimumFractionDigits: decimalPlaces ?? 0,
    maximumFractionDigits: decimalPlaces ?? 0,
  }).format(Number(amount));

  return formattedAmount;
};
