import { useContext, useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import {login, showSession} from '../services/userService'
export const LoginPage = (props) => {

  let navigate = useNavigate()

  let { loginHandler } = useContext(SessionContext)


  const onLogin = (e) => {
    e.preventDefault()
      let data = new FormData(document.getElementById('login'))
      let email = data.get('email')
      let password = data.get('password')

      login(email,password)
      .then(e => loginHandler())
      .then(d => navigate('/'))  
      
    }

    return (
        <section id="login-page" className="auth">
    <form id="login">
      <div className="container">
        <div className="brand-logo" />
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@gmail.com"
        />
        <label htmlFor="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input  onClick={(e) => onLogin(e)} type="submit" className="btn submit" defaultValue="Login" />
        <p className="field">
          <span>
            If you don't have profile click <Link to='/users/login'>here</Link>
          </span>
        </p>
      </div>
    </form>
  </section>
    )
}