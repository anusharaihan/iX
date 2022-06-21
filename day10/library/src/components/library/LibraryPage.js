import React, {useState, useEffect} from 'react'

// import the Book class
import { Book } from '../../models/book/Book'

// import book components from the components folder
import FormInput from './FormInput'
import BookTable from './BookTable'

//import the instance of our book service
import BookService from '../../services/book.service'



export default function LibraryPage() {

  const [books, setBooks] = useState([])
  useEffect(() => {
    fetchBooks();
  }, [])

  async function fetchBooks() {
    const books = await BookService.fetchBooks();
    setBooks(books);
  }


async function onCreateBook(title, author, isbn) {
    //create a new Book
    const book = await BookService.createBook(new Book
      (title, author, isbn))

    //add book to book list
    setBooks([...books, book])
  }

  async function onRemoveClicked(isbn) {
    //delete the book on firebase
    await BookService.deleteBook(isbn);

    //filter book list to remove book
    setBooks(books.filter((book) => book.isbn !== isbn));
    }

  return (
    <div className='container my-5'>
    <div className='card card-body p-4'>
      <h1>Library</h1>
      <FormInput onCreateBook = {onCreateBook}/>
      <BookTable onRemoveClicked = {onRemoveClicked} books= {books}></BookTable>
    </div>
  </div>
  )
}
