
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"


export default function Nav (){
    
    return (
        <div className={style.navBar}>
            <div className={style.accesos}>PAGES
                <Link to ='../Top'><button className={style.btn}>Top Ten</button></Link>
                <Link to ='../Calendar'><button className={style.btn}>Calendario</button></Link>
                <Link to ='../Form'><button className={style.formbtn} >Crear Piloto</button></Link>
            </div>
            <div className={style.search}>Search By Name
                <SearchBar></SearchBar>
            </div>
            <div className={style.filters}>FILTERS
                <select name= "teams" className={style.btn} onChange={onChange} >For Team
                <option>Filter By Team</option>
                </select>
                <button className={style.btn} >From API</button>
                <button className={style.btn} >From DB</button>
            </div>
            <div className={style.order}>SORTERS
            <select className={style.btn} onChange={(event) => {
                        const selectedValue = event.target.value;
                        const sortedDrivers = [...orderedDrivers];
                        if (selectedValue === "nameA") {
                        sortedDrivers.sort(sortByNameAsc);
                        } else if (selectedValue === "nameD") {
                        sortedDrivers.sort(sortByNameDes);
                        }
                        dispatch(setModDrivers(sortedDrivers));
                    }}>
                    <option value="nameA">For Name Asc</option>
                    <option value="nameD">For Name Desc</option>
            </select>
            <select className={style.btn} onChange={sortByName(event)}>
                    <option value="dobA">For Date Asc</option>
                    <option value="dobD">For Date Desc</option>
            </select>
            </div>
        </div>
    )   
}