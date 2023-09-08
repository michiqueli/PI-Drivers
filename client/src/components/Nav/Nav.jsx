import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav ({onSearch}){
    return (
        <div className={style.navBar}>
        <div className={style.container}>
        <Link to ='./About'><button className={style.about} >About</button></Link>
        <Link to ='./Home'><button className={style.home}>Home</button></Link>
        <Link to ='./Top'><button className={style.home}>Top Ten</button></Link>
        <SearchBar onSearch = {onSearch}></SearchBar>
        </div>
        </div>
    )   
}