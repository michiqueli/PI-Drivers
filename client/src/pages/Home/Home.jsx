import style from './Home.module.css'
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"

const Home = (characters, onSearch, getAllDrivers) => {
    return (
      <div className={style.container}>
        <Nav className={style.nav} onSearch={onSearch} getAllDrivers={getAllDrivers}/>
        <CardsContainer className={style.cardCont}character={characters}getAllDrivers={getAllDrivers}/>
      </div>
    )
  }
  
  export default Home