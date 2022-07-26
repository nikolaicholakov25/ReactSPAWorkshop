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
function App() {
  return (
    <div id="box">
  {/* Main Content */}

  <main id="main-content">
  <Navigation />
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/login' element={<HomePage />}/>
      <Route path='/register' element={<HomePage />}/>
      <Route path='/details/:gameId' element={<Details />}/>
      <Route path='/edit/:gameId' element={<EditPage />}/>
      {/* <Route path='/delete/:gameId' element={<DeletePage />}/> */}
      <Route path='/users/login' element={<LoginPage />}/>
      <Route path='/users/register' element={<RegisterPage />}/>
      <Route path='/create-game' element={<CreateGame />}/>
      <Route path='/catalogue' element={<Catalogue />}/>
    </Routes>


  </main>

  {/* Login Page ( Only for Guest users ) */}

  {/* Register Page ( Only for Guest users ) */}

  {/* Create Page ( Only for logged-in users ) */}

  
  {/* Edit Page ( Only for the creator )*/}

  {/*Details Page*/}

  {/* Catalogue */}

  
</div>

  );
}

export default App;
