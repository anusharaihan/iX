import React, {useState} from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Alert from '../common/Alert';


import { auth } from '../../firebase/firebase';

export default function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        setLoading(true);
        //register the user
        try {
            const userCred = await signInWithEmailAndPassword (
                auth,
                email,
                password
            )
            console.log(userCred);

            navigate('/'); //navigates to TasksPage after user registers
        } catch(err) {
            //deal with the error
            setError(err.message);
        }
        setLoading(false);
    }


    return (
        <div className = "container my-4">
            <div className='card card-body'>

                <h1>Log in</h1>
                <p>Log in with your email and password</p>

                <form onSubmit = {onFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Email address
                        </label>
                        <input
                            //the next two lines are two-way binding
                            value={email} //when we change the email state, it updates in the input
                            onChange = {(e) => setEmail(e.target.value)} //when we change email in the input (ie typing it in), it changes the state
                            type="email"
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                            Password
                            </label>
                        <input 
                            //the next two lines are two-way binding
                            value={password} //when we change the password state, it updates the input
                            onChange = {(e) => setPassword(e.target.value)} //when we change password in the input (ie typing it in), it changes the state
                            type="password"
                            className="form-control"
                        />
                    </div>

                    <div className = 'text-center'>
                        <Button loading={loading} className = 'px-5'>
                            Log in
                        </Button>
                    </div>
                </form>
                
                <Alert 
                    show={error}
                    onClose = {() => setError('')}
                    className='mt-4'
                >
                    {error}
                </Alert>
            </div>
        </div>
    )
}