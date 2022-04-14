import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import "./Login.css"
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { auth, setAuth } = useAuth();
  
  
  const navigate = useNavigate('');

  const loginHandler = async () => {
    try {

      const response = await axios.post('/api/auth/login', { email: 'adarshbalika@gmail.com', password: 'adarshbalika' });
      // const response = await axios.post('/api/auth/login', { email, password });
      console.log(response)
      if (response.data.foundUser) {
        setAuth({
          ...auth, user: true,
          token: response.data.encodedToken,
          auth: true
        })
        localStorage.setItem("token", auth.token);
        navigate('/')
        // navigate('/Cart')
      }
    }
    catch (err) {
      console.log(err.response)
    }


  }

  return (
    <div>
      <div class="main-content">
        <h1 class="description">Login</h1>
        <form class="auth-form">
          <input onChange={(e) => setEmail(e.target.value)} value={email} class="input" type="email" placeholder="Email" id="email" name="email" required />
          <input onChange={(e) => setPassword(e.target.value)} value={password} class="input" type="password" placeholder="Password" id="password" name="password" required />
        </form>
        <div class="btn-container">
          <button class="btn btn-primary-solid" onClick={loginHandler}>Login</button>
        </div>
        <p class="auth-text">Not a member? <span><a href="/components/signup/signup.html">SignUp</a></span> here.</p>
      </div>
    </div>
  )
}
