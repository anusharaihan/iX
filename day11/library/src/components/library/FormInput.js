import React, {useState} from 'react'
import Button from '../common/Button';
import Spinner from '../common/Spinner';

export default function FormInput(props) {
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const[isbn, setIsbn] = useState('');
    const [saving, setSaving] = useState(false);

    async function onFormSubmit(e) {
        e.preventDefault();
        setSaving(true);
        await props.onCreateBook(title, author, isbn);
        setSaving(false);

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
                    <Button
                        variant = "secondary"
                        type="submit"
                    >
                        {
                        saving ?
                        <Spinner />
                        :
                        "+"   
                        }
                    </Button>
                </div>
            </form>    
        </div>
    )
}