import './App.css'
import Landing from "./pages/Landing/Landing.jsx"
import Home from "./pages/Home/Home.jsx"
import Error from "./pages/Error/Error.jsx"
import Details from './pages/Details/Details.jsx'
import Top from './pages/Top/Top'
import About from './pages/About/About'
import Nav from './components/Nav/Nav'

import {useNavigate, Route, Routes} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
    const [characters, setCharacters] = useState([]);
    const [access, setAccess] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
 
    function aceptTerms() {
       /*const URL = 'http://localhost:3001/';
       axios(URL).then(({ data }) => {
          const { access } = data;*/
          setAccess(true);
          access && navigate('/home')
       }

    useEffect (() => {
       !access && navigate('/');
       },[access, navigate]);
    
    const onSearch = (id) =>{
       axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
          if (data.name) {
             setCharacters((characters) => [...characters, data]);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       });
    }

  return (
  <div className='App'>
      {location.pathname !== '/' && <Nav onSearch = {onSearch}/>}
      <Routes>
        <Route path='/' element={<Landing aceptTerms = {aceptTerms}/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home' element={<Home characters={characters} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/top' element={<Top/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>

  </div>
  
  )
 
}

export default App
