import React from 'react'
import "./SignUp.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';
import { useState } from 'react';
export const SignUp = () => {
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const signupHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName,
        lastName,
        email,
        password
      });
      console.log(response)
      const { data } = response;
      if (data) {
        const { createdUser, encodedToken } = data;
        setAuth({
          user: { ...createdUser },
          token: encodedToken,
          auth: true,
        });
        localStorage.setItem("token", encodedToken);
        navigate("/");
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>SignUp
     <div class="main-content"> 
        <h1 class="description">SignUp</h1>
        <form class="auth-form">
            
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName}class="input" placeholder="Name" type="name" id="name" name="name"/>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} class="input" placeholder="LastName" type="name" id="lastName" name="name"/>
            <input onChange={(e) => setEmail(e.target.value)} value ={email}class="input" placeholder="Email" type="email" id="email" name="email" required/>
            <input onChange={(e) => setPassword(e.target.value)} value={password} class="input" placeholder="Password" type="password" id="password" name="password" required/>
        </form> 
      <div class="btn-container">
          <button class="btn btn-primary-solid" onClick={signupHandler}>SignUp</button>
      </div>
      <p class="auth-text">Already a member? <span><a href="/components/login/login.html">Login</a></span> here.</p>
  </div>

    </div>
  )
}
