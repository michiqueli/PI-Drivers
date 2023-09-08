import style from "./Card.module.css";
import { Link } from 'react-router-dom'

export default function Card({name, lastName, image, id, teams}) {

   
   return (
      <div className={style.container} style={{ backgroundImage: `url(${image}`}}>
         <Link to = {`/detail/${id}`}>
            <div className={style.name}>{name} {lastName}</div>
            <div className={style.teams}>{teams}</div>
         </Link>
      </div>
   );
}