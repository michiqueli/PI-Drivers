import style from "./Landing.module.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setDrivers, setModDrivers } from '../../redux/sliceDrivers'
import { setTeams } from '../../redux/sliceTeams'
import axios from "axios"

const Landing = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://pi-drivers-zk1w-michiquelis-projects.vercel.app/drivers')
      .then(response => {
        dispatch(setDrivers(response.data));
      })
      .catch(error => {
        throw new Error (error)
      });
  }, [dispatch]);
  useEffect(() => {
    axios.get('https://pi-drivers-zk1w-michiquelis-projects.vercel.app/drivers')
      .then(response => {
        dispatch(setModDrivers(response.data));
      })
      .catch(error => {
        throw new Error (error)
      });
  }, [dispatch]);
  useEffect(() => {
    axios.get('https://pi-drivers-zk1w-michiquelis-projects.vercel.app/teams')
    .then(response => {
      const teams = response.data;
      dispatch(setTeams(teams));
    })
      .catch(error => {
        throw new Error (error)
      });
  }, [dispatch]);




  return (
    <div className={style.container}>
        <p className={style.leyenda}>
          WELCOME TO F1 PAGE
        </p>
        <p className={style.btnContainer}>
          <Link to ='./Home'>
          <button className={style.homeBtn}> Lets Go To Race</button>
          </Link>
        </p>
        <p className={style.pie}>
          Created by Michiqueli
        </p>
      </div>
  )
}

export default Landing
