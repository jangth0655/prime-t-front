export const formatCurrency = (amount: number) => {
  const formattedAmount = new Intl.NumberFormat("ko-KR", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return formattedAmount;
};
