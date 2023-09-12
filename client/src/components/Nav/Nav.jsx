import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav (onSearch){
    return (
        <div className={style.navBar}>
            <div className={style.accesos}>
                <Link to ='../About'><button className={style.accbtn} >About</button></Link>
                <Link to ='../Home'><button className={style.accbtn}>Home</button></Link>
                <Link to ='../Top'><button className={style.accbtn}>Top Ten</button></Link>
                <Link to ='../Calendar'><button className={style.accbtn}>Calendario</button></Link>
            </div>
            <div className={style.search}>
                <SearchBar onSearch = {onSearch}></SearchBar>
            </div>
            <div className={style.filters}>
                <button className={style.filBtn} >For Team</button>
                <button className={style.filBtn} >From API</button>
                <button className={style.filBtn} >From DB</button>
            </div>
            <div className={style.order}>
                <button className={style.ordBtn} >A-Z</button>
                <button className={style.ordBtn} >Z-A</button>
                <button className={style.ordBtn} >DoB A</button>
                <button className={style.ordBtn} >DoB D</button>
            </div>
        </div>
    )   
}