import style from './Top.module.css'
const Top = () => {
    return (
      <div className={style.container}>
        <div className={style.drivers}>
          <p className= {style.titulo}>"TOP TEN CHAMPIONS DRIVERS"</p>
          <img className= {style.imagedrv}></img>
        </div>
        <div className={style.teams}>
          <p className= {style.titulo}>"TOP TEN CHAMPIONS TEAMS"</p>
          <img className= {style.imageteams}></img>
        </div>
      </div>
    )
  }
  export default Top