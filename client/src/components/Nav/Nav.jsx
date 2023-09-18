
import SearchBar from "../SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import { Link } from "react-router-dom"
import {getTeams} from "../../redux/sliceTeams.js"
import { useSelector } from "react-redux"
import { useEffect } from "react"


export default function Nav (){
    
    const teams = useSelector(getTeams)

    function addOptions(domElement, array) {
        var select = document.getElementsByName(domElement)[0];
       
        for (let value in array) {
         var option = document.createElement("option");
         option.text = array[value];
         select.add(option);
        }
       }
    useEffect(() => {
        addOptions("teams", teams)
    })
    const onChange = () => {
        
    }

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