import style from './Top.module.css'
import {Link} from 'react-router-dom'
const Top = () => {
    return (
       <div className={style.container}>
        <div className= {style.titulo}>TOP TEN CHAMPIONS DRIVERS</div>
        <div className= {style.titulo}>TOP TEN CHAMPIONS TEAMS</div>
        <div className= {style.imagedrv}></div>
        <div className= {style.imageteams}></div>
        <Link to ='../Home'><button className={style.btn}>BACK HOME</button></Link>
        </div>
        
    )
  }
  export default Top