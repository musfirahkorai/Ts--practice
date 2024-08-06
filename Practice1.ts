// // Enums

// enum Genre {
//     Fiction,
//     NonFiction,
//     Fantasy,
//     Biagraphy,
//     ScienceFiction,
//     Mystery,
//     Romance
// }

// //Interfaces

// interface Author {
//     id: number;
//     name:string;
//     birthYear: number;
//     nationality: string;
// }

// interface Book {
//     id: number;
//     title: string;
//     genre: Genre;
//     authorId: number;
//     publishedYear: number;
// }

// interface Library {
//     name: string;
//     books: Book[];
//     authors: Author[];
// }

// //Objects

// const library: Library = {
//     name: "City Library",
//     books: [],
//     authors: []
// }

// // Functions

// function addAuthor(library: Library, author: Author): void {
//     library.authors.push(author);
// }

// function addBook(library: Library, book: Book): void {
//     library.books.push(book);
// }

// function getBooksByGenre(library: Library, genre: Genre): Book[] {
//     return library.books.filter(book => book.genre === genre);
// }

// function findAuthorById(library: Library, authorId: number): Author | undefined {
//     return library.authors.find(author => author.id === authorId);
// }

// function findBookById(library: Library, bookId: number): Book | undefined {
//     return library.books.find(book => book.id === bookId);
// }

// function listAuthors(library: Library): Author[] {
//     return library.authors;
// }

// function listBooks(library: Library): Book[] {
//     return library.books;
// }

// // Adding authors
// addAuthor(library, { id: 1, name: "J.K. Rowling", birthYear: 1965, nationality: "British" });
// addAuthor(library, { id: 2, name: "George Orwell", birthYear: 1903, nationality: "British" });
// addAuthor(library, { id: 3, name: "Isaac Asimov", birthYear: 1920, nationality: "American" });

// // Adding books
// addBook(library, { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: Genre.Fantasy, authorId: 1, publishedYear: 1997 });
// addBook(library, { id: 2, title: "1984", genre: Genre.ScienceFiction, authorId: 2, publishedYear: 1949 });
// addBook(library, { id: 3, title: "Foundation", genre: Genre.ScienceFiction, authorId: 3, publishedYear: 1951 });
// addBook(library, { id: 4, title: "Animal Farm", genre: Genre.Fiction, authorId: 2, publishedYear: 1945 });

// // Using functions
// console.log("Books in the Science Fiction genre:");
// console.log(getBooksByGenre(library, Genre.ScienceFiction));

// console.log("Books by George Orwell:");
// console.log(getBooksByAuthor(library, 2));

// console.log("Details of author with ID 1:");
// console.log(findAuthorById(library, 1));

// console.log("Details of book with ID 3:");
// console.log(findBookById(library, 3));

// console.log("All authors in the library:");
// console.log(listAuthors(library));

// console.log("All books in the library:");
// console.log(listBooks(library));

// // Additional functionality
// function updateBook(library: Library, bookId: number, updatedInfo: Partial<Book>): void {
//     const book = findBookById(library, bookId);
//     if (book) {
//         Object.assign(book, updatedInfo);
//     }
// }

// function updateAuthor(library: Library, authorId: number, updatedInfo: Partial<Author>): void {
//     const author = findAuthorById(library, authorId);
//     if (author) {
//         Object.assign(author, updatedInfo);
//     }
// }

// // Updating book information
// updateBook(library, 1, { title: "Harry Potter and the Philosopher's Stone" });

// console.log("Updated book information:");
// console.log(findBookById(library, 1));

// // Updating author information
// updateAuthor(library, 3, { nationality: "Russian-American" });

// console.log("Updated author information:");
// console.log(findAuthorById(library, 3));


// Enums
enum Genre {
    Fiction,
    NonFiction,
    Fantasy,
    Biography,
    ScienceFiction,
    Mystery,
    Romance
}

// Interfaces
interface Author {
    id: number;
    name: string;
    birthYear: number;
    nationality: string;
}

interface Book {
    id: number;
    title: string;
    genre: Genre;
    authorId: number;
    publishedYear: number;
}

interface Library {
    name: string;
    books: Book[];
    authors: Author[];
}

// Objects
const library: Library = {
    name: "City Library",
    books: [],
    authors: []
};

// Functions
function addAuthor(library: Library, author: Author): void {
    library.authors.push(author);
}

function addBook(library: Library, book: Book): void {
    library.books.push(book);
}

function getBooksByGenre(library: Library, genre: Genre): Book[] {
    return library.books.filter(book => book.genre === genre);
}

function getBooksByAuthor(library: Library, authorId: number): Book[] {
    return library.books.filter(book => book.authorId === authorId);
}

function findAuthorById(library: Library, authorId: number): Author | undefined {
    return library.authors.find(author => author.id === authorId);
}

function findBookById(library: Library, bookId: number): Book | undefined {
    return library.books.find(book => book.id === bookId);
}

function listAuthors(library: Library): Author[] {
    return library.authors;
}

function listBooks(library: Library): Book[] {
    return library.books;
}

// Adding authors
addAuthor(library, { id: 1, name: "J.K. Rowling", birthYear: 1965, nationality: "British" });
addAuthor(library, { id: 2, name: "George Orwell", birthYear: 1903, nationality: "British" });
addAuthor(library, { id: 3, name: "Isaac Asimov", birthYear: 1920, nationality: "American" });

// Adding books
addBook(library, { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: Genre.Fantasy, authorId: 1, publishedYear: 1997 });
addBook(library, { id: 2, title: "1984", genre: Genre.ScienceFiction, authorId: 2, publishedYear: 1949 });
addBook(library, { id: 3, title: "Foundation", genre: Genre.ScienceFiction, authorId: 3, publishedYear: 1951 });
addBook(library, { id: 4, title: "Animal Farm", genre: Genre.Fiction, authorId: 2, publishedYear: 1945 });

// Using functions
console.log("Books in the Science Fiction genre:");
console.log(getBooksByGenre(library, Genre.ScienceFiction));

console.log("Books by George Orwell:");
console.log(getBooksByAuthor(library, 2));

console.log("Details of author with ID 1:");
console.log(findAuthorById(library, 1));

console.log("Details of book with ID 3:");
console.log(findBookById(library, 3));

console.log("All authors in the library:");
console.log(listAuthors(library));

console.log("All books in the library:");
console.log(listBooks(library));

// Additional functionality
function updateBook(library: Library, bookId: number, updatedInfo: Partial<Book>): void {
    const book = findBookById(library, bookId);
    if (book) {
        Object.assign(book, updatedInfo);
    }
}

function updateAuthor(library: Library, authorId: number, updatedInfo: Partial<Author>): void {
    const author = findAuthorById(library, authorId);
    if (author) {
        Object.assign(author, updatedInfo);
    }
}

// Updating book information
updateBook(library, 1, { title: "Harry Potter and the Philosopher's Stone" });

console.log("Updated book information:");
console.log(findBookById(library, 1));

// Updating author information
updateAuthor(library, 3, { nationality: "Russian-American" });

console.log("Updated author information:");
console.log(findAuthorById(library, 3));
