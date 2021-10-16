/**
 * 01
 * Create an array with objects
 *
 * Each object should contain all necessary data for a blog post
 * such as title, text, comments, author, description, id and others.
 * The array should have at least 3 blog posts
 *
 * Create a function that will search a text in all text properties and
 * return the results in an array or the text 'No matching posts found' if there
 * are no matching posts
 *
 * Create a function that edits a given post. The user should be able to edit
 * any object property he would like and should return the updated object
 * If the post is not found then the function should return 'Post not found'
 *
 * create a function that deletes a post with a given id from the array
 * and returns the updated array
 *
 * create a function that displays the comments of a given post one per row
 */
// Sample Data
const blogPosts = [
  {
    id: 1,
    title: "The AI in military",
    text: `And when the time he was in front of the army were cut short.
        The horse would have been trampled to pieces,
        
        And the men who would have been killed, and the whole town would have been burned.
        
        But I have been there, and we are done, for the king has gone forward,
        
        And if he is still in front of us, it says that it is time for him to see it again.
        
        Now let us come back to the place,
        
        For our own sake I will take an oath.
        
        Then shall we come back and lay hands on their bodies,
        
        And all that has no other will be eaten
        
        And there will be a thousand thousand more people to be massacred.
        
        Now let us go and lay hands on theirs.`,
    author: "deepai.org",
    description: "text generated from a machine in deepai.org",
    comments: ["Awesome posts, thanks!", "Cannot agree more"],
  },
  {
    id: 2,
    title: "A garden in Babylon",
    text: `As a result, the first of the ten disciples of Samaria, 
        called the "Tray-Bearer of Wisdom," was known by her as the 
        "Empire of the Tungis." 
        The Tungis are the divine spirits of the Dead and of the Prophets. 
        She taught these beings that in every person who does not know any of them,
         all they can do is to look for a spirit that has been placed at the root 
         of any man's estate. She even stated this to the Prophet Joseph.`,
    author: "kevin",
    description: "text generated from a machine in deepai.org",
    comments: ["Amazed wow!", "I dislike that"],
  },
];

function searchText(blogPosts, searchText) {
  const result = blogPosts.filter((item) => {
    if (item.text.includes(searchText)) return true;
    else return false;
  });
  if (result.length === 0) return "No matching posts found";
  return result;
}
console.log(searchText(blogPosts, "massacred"));

function editPost(blogPosts, ids, property, value) {
  const post = blogPosts.find((item) => item.id === ids);
  if (post === undefined) return "Post not found";
  post[property] = value;
  return post;
}

//console.log(editPost(blogPosts, 2, "title", "Somthing else"));

const authorIsKevin = (item, index, array) => {
  if (item["author"] === "kevin") return true;
  else return false;
};

//console.log(blogPosts.find(authorIsKevin))

/**
 * Create the wishlist functionality of an eshop that is selling vitamins.
 * (only the JS part)
 * Create the wishlist as an array of objects where each object contains
 * the product id and the user name.
 *
 * Create another array of objects to contain the products' information.
 * Each object should contain an  id, product name, product desciption, price and image url
 *
 * The user should be able to press a button on the product card
 * and the specific product should be added to a list of his favorite products.
 *
 * a) implement a function that adds the product id along with the user name to the wishlist array
 *
 * The color of the button should change color.
 *
 * When the button with the new color is pressed again,
 * then this product should be removed from his whishlist.
 * b) implement a function that removes the specific product from the wishlist array
 *
 * When the user visits his favorites page,
 * then he should able to see a list of his whishlisted products.
 * (The list should contain all product details such as description,
 * price, images etc)
 * c) implement a function that lists all the products that their ids are contained in the wishlist for the specific user
 * Output should be like:
 *
 * For user george here is the wishlist:
 * - D3 5000 iu
 *   Takes care of your immune system
 *   Price: 10€
 *   <img src='http://example.com/1/>
 *
 * Optional:
 * Provide another implemention:
 * user's wishlist is stored as an array in the user object
 */
// Sample Data
const products = [
  {
    // 1
    id: 1,
    name: "D3 5000 iu",
    description: "Takes care of your immune system",
    price: 10,
    image: "http://example.com/1",
  },
  {
    // 2
    id: 2,
    name: "C 1000mg",
    description: "180 tabs of vitamin C with Bioflanoids",
    price: 3,
    image: "http://example.com/23",
  },
  {
    // 3
    id: 3,
    name: "B - Complex 50 mg",
    description: "Balanced mix of all basic B vitamins",
    price: 12,
    image: "http://example.com/44",
  },
  {
    // 4
    id: 4,
    name: "Cal-Mag",
    description: "Calcium and Magnesium in the proper analogy",
    price: 15,
    image: "http://example.com/123",
  },
  {
    // 5
    id: 5,
    name: "E 400iu",
    description: "Best for skin issues",
    price: 10,
    image: "http://example.com/456",
  },
];

const wishlist = [
  {
    user: "alkis",
    productId: 1,
  },
  {
    user: "alkis",
    productId: 2,
  },
  {
    user: "george",
    productId: 1,
  },
];

const array = ["kevin", "george", "kareempojnuoijg", "kareem", "tanya"];

function isKareem(item) {
  if (item === "kareem") return true;
  return false;
}

console.log(isKareem("kareem"));
console.log(isKareem("kareempojnuoijg"));
console.log(isKareem);

const elementKareem = array.find(isKareem);

console.log(elementKareem);

function containsE(string) {
  if (string.includes("e")) return true;
  return false;
}

console.log(containsE("string"));
console.log(containsE("e"));

const namesWithE = array.filter((string) => string.includes("e"));

console.log(namesWithE);

console.log("abce".includes("e"));

///console.log(person.age(2050));

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

const carts = [
  {
    user: "alkis",
    products: [
      { name: "Underware", quantity: 3 },
      { name: "Hat", quantity: 2 },
      { name: "Bag", quantity: 3 },
    ],
  },
  { user: "jim", products: [{ name: "Bag", quantity: 3 }] },
];

const addProduct = (cart, product) => {
    let item = cart.products.find(item => item.name === product.name)
    if(item){
        item.quantity += product.quantity
    } else {
        cart.products.push(product)
    }
    return cart;
}

function getCart(carts, userString) {
    return carts.find(item => {
        if(item.user === userString) return true
        return false    
    })
}

const alkisCart = getCart(carts, "alkis")



console.log(addProduct(alkisCart, {name: "Shoes", quantity: 2}));

console.log(addProduct(alkisCart, {name: "Bag", quantity: 2}));


