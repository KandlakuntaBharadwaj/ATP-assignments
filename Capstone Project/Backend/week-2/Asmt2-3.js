/*
Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books
      */

     class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // Marks book as borrowed
  borrow() {
    this.isAvailable = false;
  }

  // Marks book as returned
  returnBook() {
    this.isAvailable = true;
  }

  // Returns book details
  getInfo() {
    return `${this.title} by ${this.author} in ${this.pages} pages`;
  }

  // Checks if book is long
  isLongBook() {
    if(this.pages >300)
    return true;
    else{
    return false;
    }
  }
}

let b1 = new Book("The Hobbit","Harry Potter",250)
let b2 =  new Book("physics","HC verma",320)
let b3 = new Book("Maths","AR Aggarwal",870)
let b4 = new Book("chemistry","MS sharma",260)
let b5 = new Book("Maths Cengage","Cengage",1870)

let library = [b1,b2,b3,b4,b5]
//      i. Display info of all books
console.log("All Books:");

for (let book of library) {
  console.log(book.getInfo());
}

//2)Borrow 2 books and show their availability status
b1.borrow();
b3.borrow();

console.log("\nAfter Borrowing 2 Books:");
console.log(b1.title, "Available:", b1.isAvailable);
console.log(b3.title, "Available:", b3.isAvailable);

//3) Return 1 book and show updated status

b2.returnBook
console.log("\nAfter Returning 1 Book:");
console.log(b2.title,"Available",b2.isAvailable)

//4) Count how many books are "long books" (more than 300 pages)


let count = 0;

for (let i = 0; i < library.length; i++) {
    if (library[i].pages > 300) {
        count++;
    }
}

// console.log("Number of Long Books:", count);

// const longBooksCount = library.filter(book => book.isLongBook()).length;

// console.log("\nNumber of Long Books:", longBooksCount);