import { ShoppingCart } from "./shoppingCart";

describe("ShoppingCart", () => {
  let cart: ShoppingCart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  test("new shopping cart should be empty", () => {
    cart = new ShoppingCart();
    expect(cart.isEmpty()).toBe(true);
  });

  test("shopping cart should not be empty after adding a product", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    expect(cart.isEmpty()).toBe(false);
  });

  test("shopping cart should be empty after removing all products", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.removeItem({ id: 1, price: 10 });
    expect(cart.isEmpty()).toBe(true);
  });

  test("shopping cart should not be empty after removing one of two products", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    cart.removeItem({ id: 1, price: 10 });
    expect(cart.isEmpty()).toBe(false);
  });

  test("shopping cart should throw an error when removing a product that is not in the cart", () => {
    cart = new ShoppingCart();
    expect(() => cart.removeItem({ id: 1, price: 10 })).toThrow();
  });

  test("shopping cart should return the correct number of items", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    expect(cart.getItemCount()).toBe(2);
  });

  test("shopping cart should return a list of items when requested", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    expect(cart.getItems()).toEqual([
      { id: 1, price: 10 },
      { id: 2, price: 20 },
    ]);
  });

  test("should calculate the total price of the items in the cart", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    expect(cart.getTotalPrice()).toBe(30);
  });

  test("should apply a discount to the total price of the items in the cart", () => {
    cart = new ShoppingCart();
    cart.addItem({ id: 1, price: 10 });
    cart.addItem({ id: 2, price: 20 });
    cart.applyDiscount(0.1);
    expect(cart.getTotalPrice()).toBe(27);
  });
});
