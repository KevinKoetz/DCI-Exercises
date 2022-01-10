"use strict";
const books = [
    {
        title: "The Design of EveryDay Things",
        author: "Don Norman",
        alreadyRead: false,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
    },
    {
        title: "The Most Human Human",
        author: "Brian Christian",
        alreadyRead: true,
        img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
    },
    {
        title: "Thinking with Type",
        author: "Ellen Lupton",
        alreadyRead: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
    },
    {
        title: "Eloquent JavaScript",
        author: "Marijn Haverbeke",
        alreadyRead: false,
        img: "https://eloquentjavascript.net/img/cover.jpg",
    },
].sort((a, b) => {
    const lastNameA = a.author.split(" ")[1];
    const lastNameB = b.author.split(" ")[1];
    if (lastNameA < lastNameB) {
        return -1;
    }
    if (lastNameA > lastNameB) {
        return 1;
    }
    // a must be equal to b
    return 0;
});
const bookNodes = books.map((book) => {
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = book.img;
    cardImg.style.height = "20rem";
    cardImg.style.objectFit = "cover";
    cardImg.style.border = "4px solid black";
    const imgLink = document.createElement("a");
    imgLink.href = book.img;
    imgLink.append(cardImg);
    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = book.title;
    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = book.author.split(" ").reverse().join(", ");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.append(cardTitle, cardText);
    const readingStatus = document.createElement("button");
    readingStatus.innerText = book.alreadyRead ? "Read" : "To read";
    readingStatus.classList.add("btn");
    book.alreadyRead
        ? readingStatus.classList.add("btn-success")
        : readingStatus.classList.add("btn-secondary");
    readingStatus.style.borderRadius = "3em";
    readingStatus.style.paddingTop = "0";
    readingStatus.style.paddingBottom = "0";
    readingStatus.style.fontStyle = "italic";
    readingStatus.onclick = () => {
        if (readingStatus.classList.contains("btn-secondary")) {
            readingStatus.classList.replace("btn-secondary", "btn-success");
            readingStatus.innerText = "Read";
        }
        else {
            readingStatus.classList.replace("btn-success", "btn-secondary");
            readingStatus.innerText = "To read";
        }
    };
    const cardFooter = document.createElement("footer");
    cardFooter.classList.add("card-footer");
    cardFooter.append(readingStatus);
    cardFooter.style.display = "flex";
    cardFooter.style.justifyContent = "flex-end";
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.style.width = "15rem";
    bookCard.append(imgLink, cardBody, cardFooter);
    return bookCard;
});
const bookList = document.querySelector(".book-list");
if (bookList) {
    bookList.append(...bookNodes);
}
