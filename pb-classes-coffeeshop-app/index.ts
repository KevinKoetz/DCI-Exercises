/* Write a class called CoffeeShop, which has three instance variables:

name : a string (basically, of the shop)
menu : an array of items (of object type), with each item containing the item (name of the item), type (whether food or a drink) and price.
orders : an empty array */

type MenuItem = {
  name: string;
  type: "food" | "drink";
  price: number;
};

class CoffeeShop {
  constructor(name: string, menu: MenuItem[]) {
    this.name = name;
    this.menu = menu;
  }
  name;
  menu;
  orders: string[] = [];

  addOrder(name: string) {
    if (this.menu.find((item) => item.name === name)) this.orders.push(name);
    else console.log("This item is currently unabailable!");
    
  }

  fullfillOrder() {
    if (this.orders.length > 0) {
      const lastOrder = this.orders.shift();
      return `The ${lastOrder} is ready!`;
    } else {
      return "All orders have been fulfilled!";
    }
  }
  listOrders() {
    return this.orders
     
  }
  dueAmount() {
    return this.orders
      .reduce((acc, cur) => {
        const menuItem = this.menu.find((item) => item.name === cur);
        if (menuItem) {
          acc += menuItem.price;
        }
        return acc;
      }, 0)
      .toFixed(2);
  }
  cheapestItems(){
    return this.menu.reduce((prev, cur)=>cur.price < prev.price ? cur : prev).name
  }
  drinksOnly(){
    return this.menu.filter(item => item.type === "drink").map(item => item.name)
  }
  foodsOnly(){
    return this.menu.filter(item => item.type === "food").map(item => item.name)
  }
}


const menuItems: MenuItem[] = [
  {
    name: "Peach",
    type: "food" ,
    price: 1.20,
  },
  {
    name: "Apple",
    type: "food" ,
    price: 0.20,
  },
  {
    name: "Banana",
    type: "food" ,
    price: 1.70,
  },
  {
    name: "Pumpkin",
    type: "food" ,
    price: 1.90,
  },
  {
    name: "Wine",
    type: "drink" ,
    price: 1.50,
  },
  {
    name: "Orange Juice",
    type: "drink" ,
    price: 0.80,
  },
  {
    name: "cranberry juice",
    type: "drink" ,
    price: 1.40,
  },
  {
    name: "cola",
    type: "drink" ,
    price: 1.50,
  }
]

const tcs = new CoffeeShop("Starbucks", menuItems)

tcs.addOrder("unavail")

tcs.addOrder("Peach")
tcs.addOrder("Apple")
tcs.addOrder("Orange Juice")
tcs.addOrder("cola")
tcs.addOrder("Orange Juice")
tcs.addOrder("cola")

console.log(tcs.listOrders());



console.log(tcs.fullfillOrder())
console.log(tcs.fullfillOrder())
console.log(tcs.fullfillOrder())

console.log(tcs.dueAmount());

console.log(tcs.fullfillOrder())
console.log(tcs.fullfillOrder())
console.log(tcs.fullfillOrder())
console.log(tcs.fullfillOrder())

console.log(tcs.dueAmount());

console.log(tcs.cheapestItems());
console.log(tcs.drinksOnly());
console.log(tcs.foodsOnly());
