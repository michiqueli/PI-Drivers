import style from "./Card.module.css";
import { Link } from 'react-router-dom'
import imageDeafult from "../../assets/weLostImg.jpg"

export default function Card({name, lastName, image, id, teams}) {
   
   return (
      <Link to = {`/details/${id}`}>
         <div className={style.container} style={{ backgroundImage: `url(${image || imageDeafult}`}}>
            <div className={style.teams}>Teams: {teams}</div>
            <div className={style.name}>{name} {lastName}</div>
         </div>
      </Link>
   );
}