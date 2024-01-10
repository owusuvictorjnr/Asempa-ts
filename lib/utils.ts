// Add to cart functionality
// converting numbers(prices) to 2 decimal places
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100
