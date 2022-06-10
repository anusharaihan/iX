import {
    collection, addDoc,
    query, getDocs,
    doc, updateDoc,
    deleteDoc,
} from 'firebase/firestore';

import{ db } from '../firebase/firebase'
import { Book } from '../models/book/Book';
class BookService {

    constructor() {
        this.collection = 'books';
    }
    //CREATE
    async createBook(book) {
        const collectionRef = collection(db, this.collection);

        const docRef = await addDoc(collectionRef, {
            title: book.title,
            author: book.author,
            isbn: book.isbn
        });
        return book;
    }
    
    //READ
    async fetchBooks() {
        const q = query(collection(db, this.collection));

        const querySnapshot = await getDocs(q);

        const books = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            books.push (new Book(
                data.title,
                data.author,
                data.isbn
            ));
        });
        return books;
    }

    //UPDATE
    async updateBook(book) {
        const docRef = doc(db, this.collection, book.isbn);
        await updateDoc(docRef, {
            title: book.title,
            author: book.author,
            isbn: book.isbn
        });
        return book;
    }

    //DELETE
    async deleteBook(isbn) {
        const docRef = doc(db, this.collection, isbn);
        await deleteDoc(docRef);
    }


}

const service = new BookService();
export default service;