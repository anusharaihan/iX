// import React, {useState} from 'react'
import React from 'react'

export default function Button(props) {
        // const[title, setTitle] = useState(props.title);
        // const[author, setAuthor] = useState(props.author);
        // const[isbn, setIsbn] = useState(props.isbn);

    function submitted() {
        console.log("Submit button clicked");
    }

    return (
        <button onClick = {submitted} type="submit" className="btn btn-outline-primary">
            Add Book
        </button>
    )
}