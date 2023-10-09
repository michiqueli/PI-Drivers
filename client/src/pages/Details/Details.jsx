import style from "./Details.module.css"
import axios from "axios"
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
<<<<<<< HEAD
import imageDefault from "../../assets/weLostImg.jpg"
=======
import { CheckImageUrl } from "../../utilities/checkImgUrl"
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624


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
<<<<<<< HEAD
=======
    
   const imageUrl = CheckImageUrl(driver.image)
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624

   return(
         <div>{
            driver.name &&  
            <div className = {style.container}>
               <div className={style.title}>{driver.name} {driver.lastname}</div>
               
<<<<<<< HEAD
               <div className={style.imagen} style={{ backgroundImage: `url(${driver.image || imageDefault})`}
=======
               <div className={style.imagen} style={{ backgroundImage: `url(${imageUrl})`}
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
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