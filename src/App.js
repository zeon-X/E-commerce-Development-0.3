import { Route, Routes } from 'react-router-dom';
import './App.css';

import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import Home from './components/HomePage/Home/Home.js';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Login from './components/UserAuthentication/Login/Login';
import SignUp from './components/UserAuthentication/SignUp/SignUp';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>

        <Route path='/' element={<Home></Home>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/aboutme' element={<AboutMe></AboutMe>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />

        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } />

        <Route path='*' element={ <NotFound></NotFound> }/>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
