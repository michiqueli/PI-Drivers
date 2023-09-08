import style from "./SearchBar.module.css"
import {useState} from 'react';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState("")
   const handleChange = (e) => {
      let {value} = e.target
      setId(value);
   }

   return (
      <div className={style.container}>
         <input className={style.in} type='search' onChange={handleChange} value={id}></input>
         <button className={style.btn} onClick={()=>{onSearch(id);setId('')}}>Buscar</button>
      </div>
   );
}