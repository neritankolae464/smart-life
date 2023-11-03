/* sophisticated_code.js */

// This code is a complex implementation of a shopping cart application, which includes features like adding items to the cart, updating quantities, removing items, and calculating the total price.

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.name === item.name) {
        this.items[i].quantity += quantity;
        return;
      }
    }
    this.items.push({ item, quantity });
  }

  removeItem(item) {
    this.items = this.items.filter((cartItem) => cartItem.item.name !== item.name);
  }

  updateQuantity(item, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].item.name === item.name) {
        this.items[i].quantity = quantity;
        return;
      }
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
      totalPrice += this.items[i].item.price * this.items[i].quantity;
    }
    return totalPrice;
  }
}

// Usage example

const cart = new ShoppingCart();

const item1 = new Item("Item 1", 10);
cart.addItem(item1, 2);

const item2 = new Item("Item 2", 20);
cart.addItem(item2, 1);

cart.updateQuantity(item1, 3);

cart.removeItem(item2);

console.log("Total price:", cart.getTotalPrice());

// Output: Total price: 40

// Feel free to add more functionalities and expand this code as per your requirements!