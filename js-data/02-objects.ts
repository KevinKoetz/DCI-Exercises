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

interface IBlogPost {
  id: number;
  title: string;
  text: string;
  author: string;
  description: string;
  comments: Array<string>;
  update(
    property: Extract<
      keyof IBlogPost,
      "title" | "text" | "author" | "description"
    >,
    value: string
  ): BlogPost;
  printComments(): void;
}

const getId = (() => {
  let id = 0;
  return () => id++;
})();

class BlogPost implements IBlogPost {
  constructor(
    title: string,
    text: string,
    author: string,
    description: string,
    comments: Array<string>
  ) {
    this.id = getId();
    this.title = title;
    this.text = text;
    this.author = author;
    this.description = description;
    this.comments = comments;
  }
  readonly id: number;
  title: string;
  text: string;
  author: string;
  description: string;
  comments: Array<string>;

  update(
    property: Extract<
      keyof IBlogPost,
      "title" | "text" | "author" | "description"
    >,
    value: string
  ): BlogPost {
    this[property] = value;
    return this;
  }

  printComments(): void {
    for (const comment of this.comments) {
      console.log(comment);
    }
  }
}

class Blog {
  constructor() {
    this.posts = [];
  }
  getPost(id: number): BlogPost | undefined {
    for (const item of this.posts) {
      if (item.id === id) return item;
    }
  }

  posts: BlogPost[];

  [Symbol.iterator]() {
    return (function (blog: Blog) {
      let index = 0;
      return {
        next() {
          return {
            done: !(index < blog.posts.length),
            value: index < blog.posts.length && blog.posts[index++],
          };
        },
      };
    })(this);
  }

  searchText(searchStr: string): BlogPost[] | "No matching posts found" {
    let result: BlogPost[] = this.posts.filter((post) => {
      const keys = Object.freeze<"title" | "text" | "author" | "description">([
        "title",
        "text",
        "author",
        "description",
      ]);
      for (const key of keys) {
        const value = post[key];
        if (value.includes(searchStr)) return true;
      }
      return false;
    });

    if (result.length === 0) return "No matching posts found";
    return result;
  }

  addPost(blogPost: BlogPost): Blog {
    this.posts.push(blogPost);
    return this;
  }

  deletePost(id: number): true | false {
    for (let i = 0; i < this.posts.length; i++) {
      const post = this.posts[i];
      if (post.id === id) {
        this.posts.splice(id, 1);
        return true;
      }
    }
    return false;
  }
}

const blog: Blog = new Blog();


[
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
    author: "deepai.org",
    description: "text generated from a machine in deepai.org",
    comments: ["Amazed wow!", "I dislike that"],
  },
  {
    id: 3,
    title: "A garden in Babylon",
    text: `As a result, the first of the ten disciples of Samaria, 
          called the "Tray-Bearer of Wisdom," was known by her as the 
          "Empire of the Tungis." 
          The Tungis are the divine spirits of the Dead and of the Prophets. 
          She taught these beings that in every person who does not know any of them,
           all they can do is to look for a spirit that has been placed at the root 
           of any man's estate. She even stated this to the Prophet Joseph.`,
    author: "deepai.org",
    description: "text generated from a machine in deepai.org",
    comments: ["Amazed wow!", "I dislike that"],
  },
].forEach((item) => {
  blog.addPost(
    new BlogPost(
      item.title,
      item.text,
      item.author,
      item.description,
      item.comments
    )
  );
});

/*Create a function that will search a text in all text properties and
 * return the results in an array or the text 'No matching posts found' if there
 * are no matching posts*/
console.log("search Text_______________________");

console.log(blog.searchText("Wisdom"));

/*
Create a function that edits a given post. The user should be able to edit 
 * any object property he would like and should return the updated object
 * If the post is not found then the function should return 'Post not found'
*/
console.log("update_______________________");
console.log(blog.getPost(2)?.update("title", "A garden in Simona"));

console.log("delete_______________________");
console.log(blog.deletePost(1));
console.log(blog);

console.log("comments________");
blog.getPost(0)?.printComments();

console.log("for...of________");
for (const post of blog) {
  console.log(post);
}
console.log("for...of________ END");

console.log("for...of________");
for (const post of blog) {
  console.log(post);
}
console.log("for...of________ END");

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

class Product {
  constructor(name: string, description: string, price: number, image: string) {
    this.id = getId();
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
  }
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

class WishList {
  constructor(user: string) {
    this.user = user;
    this.products = [];
  }
  user: string;
  products: number[];

  [Symbol.iterator]() {
    return (function (wishlist: WishList) {
      let index = 0;
      return {
        next() {
          return {
            done: !(index < wishlist.products.length),
            value:
              index < wishlist.products.length
                ? wishlist.products[index++]
                : undefined,
          };
        },
      };
    })(this);
  }

  addProduct(id: number): WishList {
    if (!this.products.includes(id)) this.products.push(id);
    return this;
  }
  removeProduct(id: number): true | false {
    if (this.products.includes(id)) {
      this.products.splice(this.products.indexOf(id), 1);
      return true;
    }
    return false;
  }
  printWhislist(products: Product[]) {
    console.log(`For user ${this.user} here is the whislist:`);
    for (const productId of this.products) {
      const product = products.find((item) => item.id === productId);
      if (product) {
        console.log(
          `
          ${product.name}
          ${product.description}
          Price: ${product.price}€
          ${product.image}    
                `
        );
      }
    }
  }
}

class WishLists {
  wishlists: WishList[] = [];
  getWishList(user: string): WishList | undefined {
    return this.wishlists.find((item) => item.user === user);
  }
  addWishlist(wishList: WishList) {
    this.wishlists.push(wishList);
  }

  [Symbol.iterator]() {
    return (function (wishlist: WishLists) {
      let index = 0;
      return {
        next() {
          return {
            done: !(index < wishlist.wishlists.length),
            value:
              index < wishlist.wishlists.length
                ? wishlist.wishlists[index++]
                : undefined,
          };
        },
      };
    })(this);
  }
}

const products: Product[] = [
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

const wishlists = new WishLists();
wishlists.addWishlist(new WishList("alkis"));
wishlists.addWishlist(new WishList("george"));

wishlists.getWishList("alkis")?.addProduct(1);
wishlists.getWishList("alkis")?.addProduct(2);

wishlists.getWishList("george")?.addProduct(1);
wishlists.getWishList("george")?.addProduct(4);

console.log(wishlists);
console.log(wishlists.getWishList("alkis")?.addProduct(5));

wishlists.getWishList("alkis")?.printWhislist(products);

console.log("________________________");
for (const wishlist of wishlists) {
  console.log(wishlist);
}
