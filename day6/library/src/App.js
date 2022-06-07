import React from 'react'
import FormInput from './components/formInput/FormInput'

export default function App() {

  return (
    <div className='container my-5'>
      <div className='card p-4'>
        <form id='form'>
          <FormInput inputType='title'></FormInput>
          <FormInput inputType='author'></FormInput>
          <FormInput inputType='isbn'></FormInput>
          {/* <Book title={document.getElementById('title').value} author={document.getElementById('author').value} isbn={document.getElementById('isbn').value}></Book> */}
        </form>
      </div>
      
      <table className='table mt-5'>
        <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id='table-body'>

          </tbody>

        </table>
    </div>
  )
}
