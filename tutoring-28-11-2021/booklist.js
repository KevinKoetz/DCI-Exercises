const books = [
    {
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        alreadyRead: false,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
        title: "Thinking with Type",
        author: "Ellen Lupton",
        alreadyRead: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        alreadyRead: false,
        img: "https://eloquentjavascript.net/img/cover.jpg"
    }
];
books.forEach(book => {
    book.author = book.author.split(" ").reverse().join(", ");
});
books.sort((bookA, bookB) => {
    const authorSurnameA = bookA.author.split(",")[0];
    const authorSurnameB = bookB.author.split(",")[0];
    if (authorSurnameA < authorSurnameB)
        return -1;
    if (authorSurnameA > authorSurnameB)
        return 1;
    return 0;
});
const bookList = document.querySelector(".book-list");
const template = document.querySelector("#bookTemplate");
const bookFragments = books.map(bookData => {
    const bookFragment = template.content.cloneNode(true);
    if (bookFragment instanceof DocumentFragment) {
        const img = bookFragment.querySelector("img");
        const title = bookFragment.querySelector("h3");
        const author = bookFragment.querySelector("p");
        const badge = bookFragment.querySelector(".badge");
        const section = bookFragment.querySelector("section");
        section.onclick = logThis;
        section.addEventListener("click", (event) => event.stopPropagation(), true);
        img.src = bookData.img;
        img.onclick = logThis;
        title.innerText = bookData.title;
        title.onclick = logThis;
        author.innerText = bookData.author;
        author.onclick = logThis;
        badge.innerText = bookData.alreadyRead ? "Read" : "To read";
        badge.onclick = logThis;
        badge.addEventListener("click", logThis);
        return bookFragment;
    }
});
function logThis() {
    console.log(this);
}
bookList.append(...bookFragments);
