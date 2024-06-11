interface Item {
  id: number;
  price: number;
}

export class ShoppingCart {
  private _items: Item[] = [];

  applyDiscount(discount: number) {
    this._items.forEach((item) => {
      item.price *= 1 - discount;
    });
  }

  getTotalPrice(): number {
    return this._items.reduce((acc, item) => acc + item.price, 0);
  }

  getItemCount(): number {
    return this._items.length;
  }

  addItem(item: Item) {
    this._items.push(item);
  }

  getItems(): Item[] {
    return this._items;
  }

  removeItem(item: Item): void {
    if (this._items.length === 0) {
      throw new Error("Cannot remove item from empty cart");
    }
    this._items = this._items.filter((i) => i.id !== item.id);
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }
}
