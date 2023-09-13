import style from './calendar.module.css'
import {Link} from 'react-router-dom'
const Calendar = () => {
    return (
      <div className= {style.container}>
        <Link to ='../Home'><button className={style.btn}>Home</button></Link>
      </div>
    )
  }
  
  export default Calendar