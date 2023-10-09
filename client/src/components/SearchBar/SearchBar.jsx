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
   const onSearch = async () => {
      await axios
        .get(`http://localhost:3001/drivers/name/${name}`)
        .then((response) => {
          dispatch(setModDrivers(response.data));
          console.log(response.data);
        })
        .catch(() => {
<<<<<<< HEAD
          window.alert('¡No hay personajes con este Nombre!');
=======
          window.alert("No drivers with that Name");
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
        });
    };
    
    
    const drivers = useSelector(getDrivers);
    
   const clearAll = (() => {
   dispatch(
      setModDrivers(drivers)
      )
   })

   return (
      <div className={style.container}>
         <input className={style.in} type='search' onChange={handleChange} value={name}></input>
         <button className={style.btn} onClick={onSearch}>Buscar</button>
         <button className={style.btn2} onClick={clearAll}>CLEAR ALL</button>
      </div>
   );
}