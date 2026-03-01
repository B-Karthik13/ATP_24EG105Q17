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

//class for book
class Book
{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable=true)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }

    borrow()
    {
     this.isAvailable=false;
     console.log("\n",this.title,"is Unavailable")
    }

    returnBook()
    {
        this.isAvailable=true;
        console.log("\n",this.title,"is Available")
    }

    getInfo()
    {
        console.log(this.title," by ",this.author,"(",this.pages,")")
    }

    isLongBook()
    {
     return this.pages>300
    }
}

//array to store book objects
const books=[
    new Book("Harry Potter","J.K. Rowling",400),
    new Book("Vinland Saga","Astrid Lindgren",350),
    new Book("The Hobbit","J.R.R. Tolkien",310),
    new Book("Attack on Titan","Hajime Isayama",280),
    new Book("Your Name","Makoto Shinkai",250)
]

//Display info of all books
console.log("All Books in the Library:")
books.forEach(book => book.getInfo())

//Borrow 2 books and show availability
books[1].borrow()  
books[2].borrow()  

//Return 1 book and show updated status
books[2].returnBook()

//Count how many books are long books (>300 pages)
let countLongBooks = books.filter(book => book.isLongBook()).length
console.log("\nThere are ",countLongBooks," Long Books")

// v. List all available books
console.log("\nAvailable Books:")
books.filter(book => book.isAvailable).forEach(book => book.getInfo())
