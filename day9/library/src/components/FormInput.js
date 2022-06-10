import React, {useState} from 'react'

export default function FormInput(props) {
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[isbn, setIsbn] = useState('');

    function onFormSubmit(e) {
        e.preventDefault();
        props.onCreateBook(title, author, isbn);

        setTitle('');
        setAuthor('');
        setIsbn('');
    }
    return (
        <div>
            <form onSubmit = {onFormSubmit}>
                <div className="input-group mb-3">
                    <input
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                        type="text"
                        className = "form-control"
                        placeholder="Title"              
                    />
                    <input
                        value = {author}
                        onChange = {(e) => setAuthor(e.target.value)}
                        type="text"
                        className = "form-control"
                        placeholder="Author"              
                    />
                    <input
                        value = {isbn}
                        onChange = {(e) => setIsbn(e.target.value)}
                        type="text"
                        className = "form-control"
                        placeholder="ISBN"              
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                    >
                        +
                    </button>
                </div>
          {/* <Book title={document.getElementById('title').value} author={document.getElementById('author').value} isbn={document.getElementById('isbn').value}></Book> */}
          {/* <Button title={document.getElementById('title').value} author={document.getElementById('author').value} isbn={document.getElementById('isbn').value}></Button> */}
            </form>    
        </div>
    )
}