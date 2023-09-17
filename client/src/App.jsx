import './App.css'
import Landing from "./pages/Landing/Landing.jsx"
import Home from "./pages/Home/Home.jsx"
import Error from "./pages/Error/Error.jsx"
import Details from './pages/Details/Details.jsx'
import Top from './pages/Top/Top'
import About from './pages/Form/Create'
import Calendar from './pages/Calendar/Calendar'

import {Route, Routes} from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from '../src/redux/store'




function App() {
   
return (
   <Provider store={store}>
  <div className='App'>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/form' element={<About/>}/>
        <Route path='/top' element={<Top/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
   </div>
   </Provider>
  )
 }

export default App
