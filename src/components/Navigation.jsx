import { useEffect, useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { SessionContext } from '../contexts/SessionContext'
import {logout, showSession} from '../services/userService'

export const Navigation = (props) => {
  let {user} = useContext(SessionContext)
  let navigate = useNavigate()
  let session = showSession()

  const onLogout = (e) => {
    e.preventDefault()
    // props.change(c => !c)
    logout()
    .then(e => navigate('/'))
  }


    return (
        <header>
    <h1>
      <Link className="home" to="/">
        GamesPlay
      </Link>
    </h1>
    <nav>
      <Link to="/catalogue">All games</Link>
      {session ? 
      <div id="user">
        <Link to="/create-game">Create Game</Link>
        <Link onClick={(e) => onLogout(e)} to="/">Logout</Link>
      </div>
      :
      <div id="guest">
        <Link to="/users/login">Login</Link>
        <Link to="/users/register">Register</Link>
      </div>
      }
    </nav>
  </header>
    )
}