// import './styles/style.css'
import { Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details';
import { HomePage } from './pages/HomePage';
import { EditPage } from './pages/EditPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { CreateGame } from './pages/CreateGame';
// import { DeletePage } from './pages/DeletePage';
import {Navigation} from './components/Navigation'
import { Catalogue } from './pages/Catalogue';
import { useContext, useEffect, useState } from 'react';
import { login, logout, showSession } from './services/userService';
import { SessionContext } from './contexts/SessionContext';

function App() {
  let [user , setUser] = useState(showSession())

  const loginHandler = () => {
    let u = showSession()
    setUser(u)
  }

  return (
    <div id="box">
  {/* Main Content */}

  <main id="main-content">
  <SessionContext.Provider value={{user ,loginHandler}}>
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/login' element={<HomePage />}/>
        <Route path='/register' element={<HomePage />}/>
        <Route path='/details/:gameId' element={<Details />}/>
        <Route path='/edit/:gameId' element={<EditPage />}/>
        <Route path='/users/login' element={<LoginPage />}/>
        <Route path='/users/register' element={<RegisterPage />}/>
        <Route path='/create-game' element={<CreateGame />}/>
        <Route path='/catalogue' element={<Catalogue />}/>
      </Routes>
  </SessionContext.Provider>

  </main>
</div>

  );
}

export default App;
