import style from './Home.module.css'
import Nav from "../../components/Nav/Nav"
import CardsContainer from "../../components/CardsContainer/CardsContainer"

const Home = (characters, onSearch, getAllDrivers) => {
    return (
      <div className={style.container}>
        <div>
        <Nav onSearch={onSearch} getAllDrivers={getAllDrivers}/>
        <CardsContainer character={characters}getAllDrivers={getAllDrivers}/>
        </div>
      </div>
    )
  }
  
  export default Home