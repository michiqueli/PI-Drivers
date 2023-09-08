import style from "./Landing.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"

const Landing = () => {

  const [isChecked, setIsChecked] =useState(false)

  return (
    <div className={style.container}>
        <p className={style.leyenda}>
          WELCOME TO F1 PAGE
        </p>
        <input 
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}> 
        </input>
        <p className={style.btnContainer}>
          <Link to ='./Home'>
          <button className={style.homeBtn}
          disabled={!isChecked}> Lets Go To Race</button></Link></p>
        <p className={style.pie}>
          Created by Michiqueli
        </p>
      </div>
  )
}

export default Landing
