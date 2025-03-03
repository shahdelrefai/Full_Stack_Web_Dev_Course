let book = {
    title: "A Brief History of Time",
    year: 1988,
    author: "Stephen Hawking",
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

//------------------ Accessing Object Properties ------------------
console.log(book.title); // A Brief History of Time
console.log(book["author"]); // Stephen Hawking
book.getSummary(); // A Brief History of Time was written by Stephen Hawking in 1988

//------------------ Adding Properties ------------------
book.price = 15;
console.log(book.price); // 15

//------------------ Deleting Properties ------------------
delete book.price;
//console.log(book.price); // undefined

//------------------ Object Constructor ------------------
function Book(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    };
}

let book1 = new Book("A Tale of Two Cities", 1859, "Charles Dickens");
let book2 = new Book("The Lord of the Rings", 1954, "J.R.R. Tolkien");

console.log(book1.getSummary()); // A Tale of Two Cities was written by Charles Dickens in 1859
console.log(book2.getSummary()); // The Lord of the Rings was written by J.R.R. Tolkien in 1954

//------------------ Object Prototype ------------------
Book.prototype.getAge = function() {
    let years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};

console.log(book1.getAge());