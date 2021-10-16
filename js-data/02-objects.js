"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b, e_3, _c;
var _d, _e, _f, _g, _h, _j, _k, _l;
var getId = (function () {
    var id = 0;
    return function () { return id++; };
})();
var BlogPost = /** @class */ (function () {
    function BlogPost(title, text, author, description, comments) {
        this.id = getId();
        this.title = title;
        this.text = text;
        this.author = author;
        this.description = description;
        this.comments = comments;
    }
    BlogPost.prototype.update = function (property, value) {
        this[property] = value;
        return this;
    };
    BlogPost.prototype.printComments = function () {
        var e_4, _a;
        try {
            for (var _b = __values(this.comments), _c = _b.next(); !_c.done; _c = _b.next()) {
                var comment = _c.value;
                console.log(comment);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    return BlogPost;
}());
var Blog = /** @class */ (function () {
    function Blog() {
        this.posts = [];
    }
    Blog.prototype.getPost = function (id) {
        var e_5, _a;
        try {
            for (var _b = __values(this.posts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.id === id)
                    return item;
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    Blog.prototype[Symbol.iterator] = function () {
        return (function (blog) {
            var index = 0;
            return {
                next: function () {
                    return {
                        done: !(index < blog.posts.length),
                        value: index < blog.posts.length && blog.posts[index++],
                    };
                },
            };
        })(this);
    };
    Blog.prototype.searchText = function (searchStr) {
        var result = this.posts.filter(function (post) {
            var e_6, _a;
            var keys = Object.freeze([
                "title",
                "text",
                "author",
                "description",
            ]);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    var value = post[key];
                    if (value.includes(searchStr))
                        return true;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_6) throw e_6.error; }
            }
            return false;
        });
        if (result.length === 0)
            return "No matching posts found";
        return result;
    };
    Blog.prototype.addPost = function (blogPost) {
        this.posts.push(blogPost);
        return this;
    };
    Blog.prototype.deletePost = function (id) {
        for (var i = 0; i < this.posts.length; i++) {
            var post = this.posts[i];
            if (post.id === id) {
                this.posts.splice(id, 1);
                return true;
            }
        }
        return false;
    };
    return Blog;
}());
var blog = new Blog();
[
    {
        id: 1,
        title: "The AI in military",
        text: "And when the time he was in front of the army were cut short.\n          The horse would have been trampled to pieces,\n          \n          And the men who would have been killed, and the whole town would have been burned.\n          \n          But I have been there, and we are done, for the king has gone forward,\n          \n          And if he is still in front of us, it says that it is time for him to see it again.\n          \n          Now let us come back to the place,\n          \n          For our own sake I will take an oath.\n          \n          Then shall we come back and lay hands on their bodies,\n          \n          And all that has no other will be eaten\n          \n          And there will be a thousand thousand more people to be massacred.\n          \n          Now let us go and lay hands on theirs.",
        author: "deepai.org",
        description: "text generated from a machine in deepai.org",
        comments: ["Awesome posts, thanks!", "Cannot agree more"],
    },
    {
        id: 2,
        title: "A garden in Babylon",
        text: "As a result, the first of the ten disciples of Samaria, \n          called the \"Tray-Bearer of Wisdom,\" was known by her as the \n          \"Empire of the Tungis.\" \n          The Tungis are the divine spirits of the Dead and of the Prophets. \n          She taught these beings that in every person who does not know any of them,\n           all they can do is to look for a spirit that has been placed at the root \n           of any man's estate. She even stated this to the Prophet Joseph.",
        author: "deepai.org",
        description: "text generated from a machine in deepai.org",
        comments: ["Amazed wow!", "I dislike that"],
    },
    {
        id: 3,
        title: "A garden in Babylon",
        text: "As a result, the first of the ten disciples of Samaria, \n          called the \"Tray-Bearer of Wisdom,\" was known by her as the \n          \"Empire of the Tungis.\" \n          The Tungis are the divine spirits of the Dead and of the Prophets. \n          She taught these beings that in every person who does not know any of them,\n           all they can do is to look for a spirit that has been placed at the root \n           of any man's estate. She even stated this to the Prophet Joseph.",
        author: "deepai.org",
        description: "text generated from a machine in deepai.org",
        comments: ["Amazed wow!", "I dislike that"],
    },
].forEach(function (item) {
    blog.addPost(new BlogPost(item.title, item.text, item.author, item.description, item.comments));
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
console.log((_d = blog.getPost(2)) === null || _d === void 0 ? void 0 : _d.update("title", "A garden in Simona"));
console.log("delete_______________________");
console.log(blog.deletePost(1));
console.log(blog);
console.log("comments________");
(_e = blog.getPost(0)) === null || _e === void 0 ? void 0 : _e.printComments();
console.log("for...of________");
try {
    for (var blog_1 = __values(blog), blog_1_1 = blog_1.next(); !blog_1_1.done; blog_1_1 = blog_1.next()) {
        var post = blog_1_1.value;
        console.log(post);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (blog_1_1 && !blog_1_1.done && (_a = blog_1.return)) _a.call(blog_1);
    }
    finally { if (e_1) throw e_1.error; }
}
console.log("for...of________ END");
console.log("for...of________");
try {
    for (var blog_2 = __values(blog), blog_2_1 = blog_2.next(); !blog_2_1.done; blog_2_1 = blog_2.next()) {
        var post = blog_2_1.value;
        console.log(post);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (blog_2_1 && !blog_2_1.done && (_b = blog_2.return)) _b.call(blog_2);
    }
    finally { if (e_2) throw e_2.error; }
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
var Product = /** @class */ (function () {
    function Product(name, description, price, image) {
        this.id = getId();
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }
    return Product;
}());
var WishList = /** @class */ (function () {
    function WishList(user) {
        this.user = user;
        this.products = [];
    }
    WishList.prototype[Symbol.iterator] = function () {
        return (function (wishlist) {
            var index = 0;
            return {
                next: function () {
                    return {
                        done: !(index < wishlist.products.length),
                        value: index < wishlist.products.length
                            ? wishlist.products[index++]
                            : undefined,
                    };
                },
            };
        })(this);
    };
    WishList.prototype.addProduct = function (id) {
        if (!this.products.includes(id))
            this.products.push(id);
        return this;
    };
    WishList.prototype.removeProduct = function (id) {
        if (this.products.includes(id)) {
            this.products.splice(this.products.indexOf(id), 1);
            return true;
        }
        return false;
    };
    WishList.prototype.printWhislist = function (products) {
        var e_7, _a;
        console.log("For user " + this.user + " here is the whislist:");
        var _loop_1 = function (productId) {
            var product = products.find(function (item) { return item.id === productId; });
            if (product) {
                console.log("\n          " + product.name + "\n          " + product.description + "\n          Price: " + product.price + "\u20AC\n          " + product.image + "    \n                ");
            }
        };
        try {
            for (var _b = __values(this.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                var productId = _c.value;
                _loop_1(productId);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    return WishList;
}());
var WishLists = /** @class */ (function () {
    function WishLists() {
        this.wishlists = [];
    }
    WishLists.prototype.getWishList = function (user) {
        return this.wishlists.find(function (item) { return item.user === user; });
    };
    WishLists.prototype.addWishlist = function (wishList) {
        this.wishlists.push(wishList);
    };
    WishLists.prototype[Symbol.iterator] = function () {
        return (function (wishlist) {
            var index = 0;
            return {
                next: function () {
                    return {
                        done: !(index < wishlist.wishlists.length),
                        value: index < wishlist.wishlists.length
                            ? wishlist.wishlists[index++]
                            : undefined,
                    };
                },
            };
        })(this);
    };
    return WishLists;
}());
var products = [
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
var wishlists = new WishLists();
wishlists.addWishlist(new WishList("alkis"));
wishlists.addWishlist(new WishList("george"));
(_f = wishlists.getWishList("alkis")) === null || _f === void 0 ? void 0 : _f.addProduct(1);
(_g = wishlists.getWishList("alkis")) === null || _g === void 0 ? void 0 : _g.addProduct(2);
(_h = wishlists.getWishList("george")) === null || _h === void 0 ? void 0 : _h.addProduct(1);
(_j = wishlists.getWishList("george")) === null || _j === void 0 ? void 0 : _j.addProduct(4);
console.log(wishlists);
console.log((_k = wishlists.getWishList("alkis")) === null || _k === void 0 ? void 0 : _k.addProduct(5));
(_l = wishlists.getWishList("alkis")) === null || _l === void 0 ? void 0 : _l.printWhislist(products);
console.log("________________________");
try {
    for (var wishlists_1 = __values(wishlists), wishlists_1_1 = wishlists_1.next(); !wishlists_1_1.done; wishlists_1_1 = wishlists_1.next()) {
        var wishlist = wishlists_1_1.value;
        console.log(wishlist);
    }
}
catch (e_3_1) { e_3 = { error: e_3_1 }; }
finally {
    try {
        if (wishlists_1_1 && !wishlists_1_1.done && (_c = wishlists_1.return)) _c.call(wishlists_1);
    }
    finally { if (e_3) throw e_3.error; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDItb2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIjAyLW9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILGNBQWM7Ozs7Ozs7Ozs7Ozs7O0FBbUJkLElBQU0sS0FBSyxHQUFHLENBQUM7SUFDYixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDWCxPQUFPLGNBQU0sT0FBQSxFQUFFLEVBQUUsRUFBSixDQUFJLENBQUM7QUFDcEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVMO0lBQ0Usa0JBQ0UsS0FBYSxFQUNiLElBQVksRUFDWixNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsUUFBdUI7UUFFdkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBUUQseUJBQU0sR0FBTixVQUNFLFFBR0MsRUFDRCxLQUFhO1FBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxnQ0FBYSxHQUFiOzs7WUFDRSxLQUFzQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsUUFBUSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFoQyxJQUFNLE9BQU8sV0FBQTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0Qjs7Ozs7Ozs7O0lBQ0gsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBdENELElBc0NDO0FBRUQ7SUFDRTtRQUNFLElB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