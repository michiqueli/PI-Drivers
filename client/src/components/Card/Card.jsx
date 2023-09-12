import style from "./Card.module.css";
import { Link } from 'react-router-dom'

export default function Card({name, lastName, image, id, teams}) {
   //const teamArreglo = teams.split(",").join(", ")
   
   return (
      <Link to = {`/details/${id}`}>
         <div className={style.container} style={{ backgroundImage: `url(${image}`}}>
            <div className={style.teams}>Teams: {teams}</div>
            <div className={style.name}>{name} {lastName}</div>
         </div>
      </Link>
   );
}