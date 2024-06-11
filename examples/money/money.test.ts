import { Money } from "./money";
describe("money", () => {
  test("should create money with a particular currency", () => {
    const money = new Money({ amount: 1, currency: "USD" });
    expect(money.getCurrency()).toEqual("USD");
  });

  test("should add amounts in the same currency", () => {
    const amount1 = new Money({ amount: 1, currency: "USD" });
    const amount2 = new Money({ amount: 1, currency: "USD" });

    expect(amount1.add(amount2)).toEqual(2);
  });

  test("should multiply amounts in the same currency", () => {
    const amount1 = new Money({ amount: 1, currency: "USD" });
    const amount2 = new Money({ amount: 1, currency: "USD" });

    expect(amount1.multiply(amount2)).toEqual(1);
  });

  test("two amounts should be equal when they contain the same data", () => {
    const amount1 = new Money({ amount: 1, currency: "USD" });
    const amount2 = new Money({ amount: 1, currency: "USD" });

    expect(amount1).toEqual(amount2);
  });

  test("should throw an error if currency is not the same", () => {
    const amount1 = new Money({ amount: 1, currency: "USD" });
    const amount2 = new Money({ amount: 1, currency: "YEN" });

    expect(() => amount1.add(amount2)).toThrow(
      Error("Must have the same currency")
    );
  });

  test("should get list of exhchange rates for a particular currency", () => {
    const money = new Money({ amount: 1, currency: "USD" });
    expect(money.getExchangeRates()).toEqual({ GBP: 0.78, YEN: 157.12 });
  });

  test("should convert from one currency to another", () => {
    const money = new Money({ amount: 1, currency: "USD" }).convert("YEN");
    expect(money.getAmount()).toEqual(157.12);
    expect(money.getCurrency()).toEqual("YEN");
  });
});
