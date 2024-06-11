export type Currency = "YEN" | "USD" | "GBP";

export const exchangeRate: Record<Currency, Record<string, number>> = {
  YEN: { GBP: 0.005, USD: 0.0064 },
  USD: { GBP: 0.78, YEN: 157.12 },
  GBP: { USD: 1.27, YEN: 200.2 },
};
