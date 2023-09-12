import './App.css'
import Landing from "./pages/Landing/Landing.jsx"
import Home from "./pages/Home/Home.jsx"
import Error from "./pages/Error/Error.jsx"
import Details from './pages/Details/Details.jsx'
import Top from './pages/Top/Top'
import About from './pages/About/About'
import Calendar from './pages/Calendar/Calendar'

import {Route, Routes} from 'react-router-dom'
import {useState} from 'react';
import axios from 'axios';


function App() {
   const [drivers, setDrivers] = useState([]);
   
   const getAllDrivers = () => {
      axios(`http://localhost:3001/drivers`)
      .then((response) => {
         setDrivers(response.data)
      })
   }
   const onSearch = (name) =>{
       axios(`http://localhost:3001/drivers/${name}`)
       .then(({ data }) => {
          if (data.name) {
             setDrivers(data);
          } else {
             window.alert('¡No hay personajes con este Nombre!');
          }
       });
    }

  return (
  <div className='App'>
      <Routes>
        <Route path='/' element={<Landing getAllDrivers={getAllDrivers} />}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home' element=
                           {<Home drivers={drivers}
                           onSearch={onSearch}/>}
         />
        <Route path='/about' element={<About/>}/>
        <Route path='/top' element={<Top/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
   </div>
  )
 }

export default App
