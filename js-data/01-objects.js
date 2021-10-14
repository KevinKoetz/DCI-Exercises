/**
 * 01
 * Write a function to create an object named student as the following:
 *
 * const student = {
 * name : "David Rayy",
 * sclass : "VI",
 * rollno : 12 };
 *
 * then delete the rollno property from the following object.
 * Also print the object before or after deleting the property.
 */

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

delete student.rollno;

console.log(student);

/**
 * 02
 * Create a function that
 * adds users to an array of users.
 * Each user is an object with the following properties:
 * name
 * address
 * email
 * age
 * Then create another function that returns the properties of a given object
 * Then create another function that returns the values of a given object
 * Then create another function that updates the value of a specific property of a specific object
 * or creates the given property if this doesn't exist already and returns the given object
 * Finally create a function that deletes a given property of a given object and returns the given object
 */

const users = [];

//adds users to an array of users.
const addUser = function (name, address, email, age) {
    users.push({
      name,
      address,
      email,
      age,
    });
  };


console.log(users);
addUser("Kevin", "Schillerstraße", "example@example.org", 31)

console.log(users);
  

//Then create another function that returns the properties of a given object
const getProperties = (obj) => Object.keys(obj);

//Then create another function that updates the value of a specific property of a specific object
const getValues = (obj) => Object.values(obj);

//Then create another function that updates the value of a specific property of a specific object
const setProperty = (obj, prop, value) => {
  obj[prop] = value;
  return obj;
};

//Finally create a function that deletes a given property of a given object and returns the given object
const deleteProperty = (obj, prop) => {
  delete obj[prop];
  return obj;
};

/**
 * 03 medium
 * Create an object to store the following information about your favorite movie:
 * title (a string), duration (a number), and stars (an array of strings).
 * Create a function to print out the movie information like so:
 * "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
 */

const favoriteMovie = {
  title: "Star Wars",
  duration: 180,
  stars: ["Some", "one"],
};

favoriteMovie.getInformation = function () {
  return `${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars[0]} and ${this.stars[1]}`;
};

console.log(favoriteMovie.getInformation());

/**
 * 04 medium
 * Write a function called cashRegister that takes a shopping cart object.
 * The object contains item names and prices (itemName: itemPrice).
 * The function should return the total price of the shopping cart
 */

function cashRegister(cart) {
  let sum = 0;
  for (const key in cart) {
    sum += cart[key];
  }
  return sum;
}

const cart = {
  apple: 1.2,
  banana: 0.89,
  playstation5: 600,
};
console.log(cashRegister(cart));

/**
 * 05 medium
 * 
 * Build your eshop product catalogue like that:
 * 1. Build and array with 10 objects. Each object should have a name property and 
 * a value and a price property and a value.
 * Example of product: 
 *     { 
            name: "Blue Shirt",
            price: 10
        }
 * 2. Build a list of carts of an online eshop like that:
 * Build an array with 10 objects. 
 * example of cart:
 *     {
            user: "alkis",
            product: "Hat",
            quantity: 3
        }
 * Each object should have:
 *  a name property and a value  (the value should be a product name from the first array)
 *  a quantity property and a value (the value should be a number)
 *  a user property and a value (the value should be the username)
 * 
 * Write functions to:
 * a) add a given product to the cart
 * b) list the products of the cart for a given user
 * c) list the total items in the cart for a given user
 * d) change the quantity of a given product in that cart
 * e) delete a product from the cart
 * f) find the total value of the cart of a given user
 */

const userNames = ["Kevin", "John", "Jim", "Jane", "George"]

const products = [
  {
    // 1
    name: "Blue Shirt",
    price: 10,
  },
  {
    // 2
    name: "Hat",
    price: 15,
  },
  {
    // 3
    name: "Coat",
    price: 100,
  },
  {
    // 4
    name: "Ring",
    price: 72,
  },
  {
    // 5
    name: "Bag",
    price: 19,
  },
  {
    // 6
    name: "Scarf",
    price: 9,
  },
  {
    // 7
    name: "Shoes",
    price: 57,
  },
  {
    // 8
    name: "Underware",
    price: 7,
  },
  {
    // 9
    name: "shocks",
    price: 3,
  },
  {
    // 10
    name: "T-shirt",
    price: 50,
  },
];

const carts = [
];

(function populateCarts() {
    for (const user of userNames) {
        const cart = createCart(user);
        for (let index = 0; index < Math.floor(Math.random()*11)+1; index++) {
            cart.updateProduct(products[Math.floor(Math.random()*products.length)].name, Math.floor(Math.random()*20)  )   
        }
        carts.push(cart);
    }
    
})()

function createCart(user) {
    return {
        user,
        _products: [],
        get getProducts() {
            return this._products;
        },
        updateProduct: function (name, quantity) {
            const product = this.getProduct(name);
            if(product) product.quantity = quantity;
            else this._products.push({name,quantity})
        },
        deleteProduct: function (name){
            for (let index = 0; index < this._products.length; index++) {
                if(this._products[index].name === name) return this._products.splice(index,1)
            }
            return null
        },
        getProduct(name){
            for (let index = 0; index < this._products.length; index++) {
                if(this._products[index].name === name) return this._products[index];
            }
            return null
        },
        getTotal(){
            let total = 0;
            for (let index = 0; index < this._products.length; index++) {
                for (let j = 0; j < products.length; j++) {
                    const product = products[j];
                    if(product.name === this._products[index].name) total += product.price * this._products[index].quantity
                }
            }
            return total;
        }
    }
}




carts.getCart = function(user){
    for(let i=0; i < this.length; i++){
        if(this[i].user === user) return this[i]
    }
    return null
}


console.log(carts.getCart("Kevin").getTotal())
