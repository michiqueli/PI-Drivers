import style from "./Details.module.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


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

   return(
         <div>{
            driver.name &&  
            <div className = {style.container}>
               <div className={style.title}>{driver.name} {driver.lastname}</div>
               
               <div className={style.imagen} style={driver.image.url !== ""
               ?{backgroundImage: `url(${driver.image.url})`}
               :{backgroundImage: 'url(PI-Drivers-Pruebas/client/src/assets/weLostImg.jpg)'}
               }> <Link to ='../Home'><button className={style.btn}>BACK HOME</button></Link>
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