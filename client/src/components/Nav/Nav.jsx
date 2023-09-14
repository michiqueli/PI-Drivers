import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav (){
    
    return (
        <div className={style.navBar}>
            <div className={style.accesos}>PAGES
                <Link to ='../About'><button className={style.btn} >About</button></Link>
                <Link to ='../Top'><button className={style.btn}>Top Ten</button></Link>
                <Link to ='../Calendar'><button className={style.btn}>Calendario</button></Link>
            </div>
            <div className={style.search}>Search By Name
                <SearchBar></SearchBar>
            </div>
            <div className={style.filters}>FILTERS
                <button className={style.btn} >For Team</button>
                <button className={style.btn} >From API</button>
                <button className={style.btn} >From DB</button>
            </div>
            <div className={style.order}>SORTERS
            <select className={style.btn}>
                    <option value="nameA">For Name Asc</option>
                    <option value="nameD">For Name Desc</option>
            </select>
            <select className={style.btn} >
                    <option value="dobA">For Date Asc</option>
                    <option value="dobD">For Date Desc</option>
            </select>
            </div>
        </div>
    )   
}