import style from './Home.module.css'
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setDrivers} from '../../redux/sliceDrivers'
import axios from "axios"

const Home = () => {
    return (
      <div className={style.container}>
        <CardsContainer className={style.cardCont}/>
        <Nav className={style.nav} />
      </div>
    )
  }
  
  export default Home