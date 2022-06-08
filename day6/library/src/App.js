import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import'./App.css'


// import the Book class
import { Book } from './models/book/Book'

// import book components from the components folder
import FormInput from './components/FormInput'
import BookTable from './components/BookTable'


export default function App() {

  const [books, setBooks] = useState([])

  function onCreateBook(title, author, isbn) {
    //create a new Book
    const book = new Book (title, author, isbn)

    //add book to book list
    setBooks([...books, book])
  }

  function onRemoveClicked(isbn) {
      const newBooks = books.filter((b) => {
        return b.isbn !== isbn;
    });
    setBooks(newBooks);
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
