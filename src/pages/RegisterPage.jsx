import { useContext } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import { register } from '../services/userService'

export const RegisterPage = (props) => {
  let navigate = useNavigate()

  let {loginHandler} = useContext(SessionContext)
  const onRegister = (e) => {
    e.preventDefault()
    let form = new FormData(document.getElementById('register'))
    
    let [email , password , confirmpassword] = form.values()

    if(password === confirmpassword){
      let body = {
        email,
        password
      }

      register(body)            
      .then(r => console.log(r))
      .then(f => loginHandler())
      .then(e => navigate('/'))
    } else {
      alert('please check passoword')
    }
  }


    return(
        <section id="register-page" className="content auth">
        <form onSubmit={onRegister} id="register">
          <div className="container">
            <div className="brand-logo" />
            <h1>Register</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
            />
            <label htmlFor="pass">Password:</label>
            <input type="password" name="password" id="register-password" />
            <label htmlFor="con-pass">Confirm Password:</label>
            <input type="password" name="confirmpassword" id="confirm-password" />
            <input className="btn submit" type="submit" defaultValue="Register" />
            <p className="field">
              <span>
                If you already have profile click <Link to="/users/register">here</Link>
              </span>
            </p>
          </div>
        </form>
      </section>
    )
}