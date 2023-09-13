import style from "./Error.module.css"
import { Link } from "react-router-dom"
const Error = () => {
  return (
      <div className={style.container}>
        <p className={style.leyenda}>
          404
        </p>
        <Link to ='../Home'><button className={style.btn}>Back to Home</button></Link>
        <p className={style.leyenda}>
          PAGE NOT FOUND
        </p>
      </div>
    )
  }
export default Error
