import style from "./Card.module.css";
import { Link } from 'react-router-dom'
import { CheckImageUrl } from "../../utilities/checkImgUrl";

export default function Card({name, lastName, image, id, teams}) {

const imageUrl = CheckImageUrl(image)
   
   return (
      <Link to = {`/details/${id}`}>
         <div className={style.container} style={{ backgroundImage: `url(${imageUrl}`}}>
            <div className={style.teams}>Teams: {teams}</div>
            <div className={style.name}>{name} {lastName}</div>
         </div>
      </Link>
   );
}