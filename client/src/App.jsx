import './App.css'
import Landing from "./pages/Landing/Landing.jsx"
import Home from "./pages/Home/Home.jsx"
import Error from "./pages/Error/Error.jsx"
import Details from './pages/Details/Details.jsx'
import Top from './pages/Top/Top'
import About from './pages/About/About'

import {Route, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {
   const [characters, setCharacters] = useState([]);
   
   const getAllDrivers = () => {
      axios(`http://localhost:3001/drivers`)
      .then((response) => {
         setCharacters(response.data)
      })
   }


   const onSearch = (id) =>{
       axios(`http://localhost:3001/drivers/${id}`)
       .then(({ data }) => {
          if (data.name) {
             setCharacters(data);
          } else {
             window.alert('¡No hay personajes con este ID!');
          }
       });
    }

  return (
  <div className='App'>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home' element={<Home characters={characters} onSearch={onSearch} />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/top' element={<Top/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
   </div>
  
  )
 
}

export default App
