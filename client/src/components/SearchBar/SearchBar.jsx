import style from "./SearchBar.module.css"
import {useState} from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange = (e) => {
      let {value} = e.target
      setId(value);
   }
   const random = Math.ceil(Math.random()*826);
   return (
      <div className={style.container}>
         <input className={style.in} type='search' onChange={handleChange} value={id}></input>
         <button className={style.btn} onClick={()=>{onSearch(id);setId('')}}>AGREGAR</button>
         <button className={style.btnRdm} onClick={()=>onSearch(random)}>Toca Toca</button>
      </div>
   );
}