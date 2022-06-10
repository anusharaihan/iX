import React, {useState} from 'react'

import { createUserWithEmailAndPassword } from '/firebase/auth';
import {useNavigate } from 'react-router-dom';


import { auth } from '../../firebase/firebase';

export default function RegisterPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword (
                auth,
                email,
                password
            )
            console.log(userCred);

            navigate('/');
        } catch(err) {
            //deal with the error
            alert(err.message);
        }
    }


    return (
        <div className = "container my-4">
            <div className='card card-body'>

                <h1>Register</h1>
                <p>Register with your email and password</p>

                <form onSubmit = {onFormSubmit}>
                    <div className="mb-3">
                        <label className="form-label">
                            Email address
                        </label>
                        <input
                            //the next two lines are two-way binding
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                        />
                    </div>

                    <div className = 'text-center'>
                        <button className = 'btn btn-primary px-5'>
                            Register
                        </button>
                    </div>



                </form>
            </div>
        </div>
    )
}