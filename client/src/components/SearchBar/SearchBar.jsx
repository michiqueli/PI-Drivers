import axios from "axios";
import style from "./SearchBar.module.css"
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux"
import { setModDrivers, getDrivers} from "../../redux/sliceDrivers";

export default function SearchBar() {
   
   const dispatch = useDispatch()
   
   const [name, setName] = useState("")
   const handleChange = (e) => {
      let {value} = e.target
      setName(value);
   }
   const onSearch = () => {
      axios
        .get(`http://localhost:5000/drivers?name.forename=${name}`)
        .then((response) => {
         if(response.data.length > 0){
          dispatch(setModDrivers(response.data));
        }else{
         window.alert('¡No hay personajes con este Nombre!');
        }
      })
    }
    const drivers = useSelector(getDrivers);
    
    const clearAll = (() => {
    dispatch(setModDrivers(drivers));
   })

   return (
      <div className={style.container}>
         <input className={style.in} type='search' onChange={handleChange} value={name}></input>
         <button className={style.btn} onClick={onSearch}>Buscar</button>
         <button className={style.btn2} onClick={clearAll}>CLEAR ALL</button>
      </div>
   );
}