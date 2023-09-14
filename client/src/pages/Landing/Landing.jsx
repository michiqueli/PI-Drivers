import style from "./Landing.module.css"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setDrivers, setModDrivers } from '../../redux/sliceDrivers'
import axios from "axios"

const Landing = () => {
  
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://localhost:3001/drivers')
      .then(response => {
        dispatch(setDrivers(response.data));
      })
      .catch(error => {
        throw new Error (error)
      });
  }, [dispatch]);
  useEffect(() => {
    axios.get('http://localhost:3001/drivers')
      .then(response => {
        dispatch(setModDrivers(response.data));
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
