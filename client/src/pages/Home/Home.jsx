import style from './Home.module.css'
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"


const Home = () => {
    return (
      <div className={style.container}>
        <CardsContainer className={style.cardCont}/>
        <Nav className={style.nav} />
      </div>
    )
  }
  
  export default Home