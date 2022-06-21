import React, { useState } from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCred);
      navigate('/');
    } catch (err) {
        alert(err.message);
    }
  }
  
  return (
    <div className="container my-4">
      <div className="card card-body">
        <h1>Log in</h1>
        <p>Log in with your email and password</p>

        <form onSubmit={onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              value={password}
              onChange={(p) => setPassword(p.target.value)}
              type="password"
              className="form-control"
            />
          </div>

          <div className="text-center">
            <button className="btn btn-primary">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

