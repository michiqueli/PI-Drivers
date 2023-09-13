import style from "../Loading/Loading.module.css"
const Loading = () => {
    return (
        <div className={style.container}>
            <div className={style.imagen}></div>
            <p className={style.leyenda}>
            PAGE NOT FOUND
          </p>
        </div>
      )
    }
export default Loading