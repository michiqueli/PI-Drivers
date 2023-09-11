import style from "./SearchBar.module.css"
import {useState} from 'react';

export default function SearchBar({onSearch}) {
   const [name, setName] = useState("")
   const handleChange = (e) => {
      let {value} = e.target
      setName(value);
   }

   return (
      <div className={style.container}>
         <input className={style.in} type='search' onChange={handleChange} value={name}></input>
         <button className={style.btn} onClick={()=>{onSearch(name);setName('')}}>Buscar</button>
      </div>
   );
}