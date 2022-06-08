export class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


// import React from 'react'
// class UserInterface extends React.Component {
//     constructor(props) {
//        this.state = {books: []}; 
//        this.title = document.getElementById('title'); 
//        this.author = document.getElementById('author'); 
//        this.isbn = document.getElementById('isbn'); 
//     }


//        buttonSubmit(e){
//             e.preventDefault();
//             const book = {
//                 title: this.title.value,
//                 author: this.author.value,
//                 isbn: this.isbn.value
//             };
//        }
// }  

//---------------------------------------

// import React, { useState } from 'react'

// export default function Book(props) {

//     const[titleOut, setTitle] = useState(props.title);
//     const[authorOut, setAuthor] = useState(props.author);
//     const[isbnOut, setIsbn] = useState(props.isbn);


//     function addBook() {
//         console.log(titleOut);
//         console.log(authorOut);
//         console.log(isbnOut);
//     }

//     return (
//         <div className="d-grid gap-2 mt-4">
//             <button onClick={Book}>
//                 Add Book
//             </button>
//         </div>
//     )
// }


