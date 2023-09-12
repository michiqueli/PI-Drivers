import style from './Top.module.css'
const Top = () => {
    return (
      <div className={style.container}>
        <div className={style.drivers}>
          <div className= {style.titulo}>"TOP TEN CHAMPIONS DRIVERS"</div>
          <div className= {style.imagedrv} ></div>
        </div>
        <div className={style.teams}>
          <span className= {style.titulo}>"TOP TEN CHAMPIONS TEAMS"</span>
          <div className= {style.imageteams}></div>
        </div>
      </div>
    )
  }
  
  export default Top