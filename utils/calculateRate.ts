export const calculateRate = (amount: number, estimate: number, decimals: number): number =>
  Math.floor((estimate / amount) * decimals) / decimals;
