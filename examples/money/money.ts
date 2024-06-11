import { Currency, currencyExchangeRateMap } from "./exchangeRate";

export class Money {
  constructor(private readonly money: { amount: number; currency: Currency }) {}

  getExchangeRates(): any {
    return currencyExchangeRateMap[this.getCurrency()];
  }

  multiply(amount2: Money): any {
    if (amount2.getCurrency() !== this.getCurrency())
      throw Error("Must have the same currency");
    return amount2.getAmount() * this.getAmount();
  }

  add(amount2: Money): Number {
    if (amount2.getCurrency() !== this.getCurrency())
      throw Error("Must have the same currency");
    return amount2.getAmount() + this.getAmount();
  }

  getCurrency(): Currency {
    return this.money.currency;
  }

  getAmount(): number {
    return this.money.amount;
  }

  convert(currency: Currency): Money {
    return new Money({
      currency,
      amount: currencyExchangeRateMap[this.getCurrency()][currency],
    });
  }
}
