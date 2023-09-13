import {useDispatch} from 'react-redux'
import { setDrivers } from '../../redux/sliceDrivers'
import { Link } from 'react-router-dom'
import style from "./Error.module.css"
const Error = () => {
    return (
      <div className={style.container}>
        <p className={style.leyenda}>
          404
        </p>
        <Link to ='../Home'><button className={style.btn}>BACK HOME</button></Link>
        <p className={style.leyenda}>
          PAGE NOT FOUND
        </p>
      </div>
    )
  }
  
  export default Error
