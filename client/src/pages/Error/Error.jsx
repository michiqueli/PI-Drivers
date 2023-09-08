import style from "./Error.module.css"
const Error = () => {
    return (
      <div className={style.container}>
        <p className={style.leyenda}>
          404
        </p>
        <p className={style.leyenda}>
          PAGE NOT FOUND
        </p>
      </div>
    )
  }
  
  export default Error
