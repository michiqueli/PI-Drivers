import style from './Top.module.css'
const Top = () => {
    return (
       <div className={style.container}>
        <div className= {style.titulo}>TOP TEN CHAMPIONS DRIVERS</div>
        <div className= {style.titulo}>TOP TEN CHAMPIONS TEAMS</div>
        <div className= {style.imagedrv}></div>
        <div className= {style.imageteams}></div>
        </div>
    )
  }
  export default Top