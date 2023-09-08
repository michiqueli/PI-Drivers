import style from "./Landing.module.css"
import { Link } from "react-router-dom"

const Landing = (getAllDrivers) => {
  return (
    <div className={style.container}>
        <p className={style.leyenda}>
          WELCOME TO F1 PAGE
        </p>
        <p className={style.btnContainer}>
          <Link to ='./Home'>
          <button className={style.homeBtn}onClick={()=>getAllDrivers}> Lets Go To Race</button>
          </Link>
        </p>
        <p className={style.pie}>
          Created by Michiqueli
        </p>
      </div>
  )
}

export default Landing
