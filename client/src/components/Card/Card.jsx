import style from "./Card.module.css";
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import imageDeafult from "../../assets/weLostImg.jpg"

export default function Card({name, lastName, image, id, teams}) {
   
   return (
      <Link to = {`/details/${id}`}>
         <div className={style.container} style={{ backgroundImage: `url(${image || imageDeafult}`}}>
=======
import { CheckImageUrl } from "../../utilities/checkImgUrl";

export default function Card({name, lastName, image, id, teams}) {

const imageUrl = CheckImageUrl(image)
   
   return (
      <Link to = {`/details/${id}`}>
         <div className={style.container} style={{ backgroundImage: `url(${imageUrl}`}}>
>>>>>>> 334e2a857aa6a1908e0153bab766c50da46d4624
            <div className={style.teams}>Teams: {teams}</div>
            <div className={style.name}>{name} {lastName}</div>
         </div>
      </Link>
   );
}