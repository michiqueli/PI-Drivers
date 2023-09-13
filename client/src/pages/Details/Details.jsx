import style from "./Details.module.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Details(){
    const {id} = useParams()
    const [driver, setDriver] = useState({})

    useEffect(() => {
      axios(`http://localhost:3001/drivers/${id}`).then(( {data} ) => {
      if (data.id) {
         setDriver(data);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
    });
    return setDriver({});
    }, [id]);
    const backHome = ()=>{
      window.location.href = '/Home';
   }
   return(
         <div>{
            driver.name &&  
            <div className = {style.container}>
               <button className={style.btn} onClick={backHome}>BACK HOME</button>
               <div className={style.title}>{driver.name} {driver.lastname}</div>
               <div className={style.imagen} style={driver.image.url !== ""
               ?{backgroundImage: `url(${driver.image.url})`}
               :{backgroundImage: 'url(PI-Drivers-Pruebas/client/src/assets/weLostImg.jpg)'}
               }>  
               </div>
               <div className={style.subtitle}>Nacionality:</div>
               <div className={style.stats}>{driver.nationality}</div>
               <div className={style.subtitle}>Date of Bird:</div>
               <div className={style.stats}>{driver.dob}</div>
               <div className={style.subtitle}>Teams:</div>
               <div className={style.stats}>{driver.teams}</div>
               <div className={style.subtitle}>Description:</div>
               <div className={style.stats}>{driver.description}</div>
            </div>
            }
         </div>
   )
}