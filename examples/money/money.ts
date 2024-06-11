import { Currency, exchangeRate } from "./currency";

export class Money {
  constructor(private readonly money: { amount: number; currency: Currency }) {}

  getExchangeRates(): any {
    return exchangeRate[this.getCurrency()];
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
      amount: exchangeRate[this.getCurrency()][currency],
    });
  }
}
