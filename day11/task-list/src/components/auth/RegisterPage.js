import React, {useState} from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth';
import {useNavigate } from 'react-router-dom';


import { auth } from '../../firebase/firebase';
import Button from '../common/Button';

export default function RegisterPage() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function onFormSubmit(e) {
        e.preventDefault();
        setLoading(true);
        //register the user
        try {
            const userCred = await createUserWithEmailAndPassword (
                auth,
                email,
                password
            )
            console.log(userCred);

            navigate('/'); //navigates to TasksPage after user registers
        } catch(err) {
            //deal with the error
            alert(err.message);
        }
        setLoading(false);
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
                            Register
                        </Button>
                    </div>



                </form>
            </div>
        </div>
    )
}