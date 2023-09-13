import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav (onSearch){
    
    return (
        <div className={style.navBar}>
            <div className={style.accesos}>
                <Link to ='../About'><button className={style.btn} >About</button></Link>
                <Link to ='../Home'><button className={style.btn}>Home</button></Link>
                <Link to ='../Top'><button className={style.btn}>Top Ten</button></Link>
                <Link to ='../Calendar'><button className={style.btn}>Calendario</button></Link>
            </div>
            <div className={style.search}>
                <SearchBar onSearch = {onSearch}></SearchBar>
            </div>
            <div className={style.filters}>
                <button className={style.btn} >For Team</button>
                <button className={style.btn} >From API</button>
                <button className={style.btn} >From DB</button>
            </div>
            <div className={style.order}>
                <button className={style.btn} >A-Z</button>
                <button className={style.btn} >Z-A</button>
                <button className={style.btn} >DoB A</button>
                <button className={style.btn} >DoB D</button>
            </div>
        </div>
    )   
}