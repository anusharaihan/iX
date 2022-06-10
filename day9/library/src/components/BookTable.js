import React from 'react'

export default function bookTable(props) {

    console.log(props);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th >Title</th>
                        <th >Author</th>
                        <th >ISBN</th>
                        <th >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map((book) =>
                            <tr key={book.isbn}>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.isbn}</td>
                                <td onClick = {(e) => props.onRemoveClicked(book.isbn)}>
                                    <i className = "bi bi-trash"></i>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>

    )
}