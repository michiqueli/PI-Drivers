import style from './Create.module.css'
import {useState} from 'react'
import validate from './validation';
import { Link } from 'react-router-dom';
import {getTeams} from '../../redux/sliceTeams'
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import axios from 'axios';

const Form = () => {

    const teams = useSelector(getTeams)
    const [lastId, setLastId] = useState(600)
       
    function addOptions(domElement, array) {
      var select = document.getElementsByName(domElement)[0];
     
      for (let value in array) {
       var option = document.createElement("option");
       option.text = array[value];
       select.add(option);
      }
     }
    useEffect(() => {
        addOptions("selectedTeam", teams)
    })

    const [form, setForm] = useState({
      name: "",
      lastName:"",
      nationality:"",
      image:"",
      dob:"",
      description:"",
      teams:"",
    });

    const [errors, setErrors] = useState({
      name: "Empty Name",
      lastName:"Empty Last Name",
      nationality:"Empty Nacionality",
      image:"Empty Img",
      dob:"Empty Date of Birdth",
      description:"Empty Description",
      teams:"Empty Teams",
    });

    const addTeam = () => {
      const selectedTeam = form.selectedTeam;
        if (form.teams.includes(selectedTeam)) {
            window.alert("Team already exist")
            return;
          }
        if (form.selectedTeam !== "") {
          const updatedTeams = form.teams !== "" ? `${form.teams}\n${selectedTeam}` : selectedTeam;
          setForm({
            ...form,
            teams: updatedTeams,
            selectedTeam: "",
          });
        }
      };

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        
        setErrors(validate({...form, [property]: value}))
        setForm({...form, [property]: value});
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        const newId = lastId + 1
        setLastId(newId);
        const driver = {
        id: newId,
        name: form.name,
        lastname: form.lastName,
        nationality: form.nationality,
        image: form.image,
        dob: form.dob,
        teams: form.teams,
        description: form.description,
      };
      axios.post(`http://localhost:3001/drivers`, driver)
      .then(response => {window.alert('Drivers Create success', response.data)
      setForm({
        name: "",
        lastName: "",
        nationality: "",
        image: "",
        dob: "",
        teams: "",
        description: "",
      });
    })
      .catch((error) => window.alert('Error on Create Driver', error.message))
        
    }

    return (
         <div className={style.formulario}>
            <div className={style.title}>TIME</div>
            <div className={style.title}>to</div>
            <div className={style.title}>CREATE A DRIVER</div>
            
         <form className={style.container} onSubmit={submitHandler}>
                <div className={style.name}>
                    <label htmlFor="Name"> Name </label>
                    <input className= {style.box} maxLength="16"
                    type="text"
                    name="name" 
                    value={form.name}
                    placeholder="Caps in first, min 2 Char"
                    onChange={handleChange}   
                    />
                    <span>
                    {errors.name}
                    </span>
                </div>
                <div className={style.name}>
                    <label htmlFor="lastName"> Last Name </label>
                    <input className= {style.box} maxLength="16"
                    type="text"
                    name="lastName"
                    placeholder="Caps in first, min 2 Char"
                    value={form.lastName}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.lastName}
                    </span>
                </div>
                <div className={style.name}>
                    <label htmlFor="Nationality"> Nationality </label>
                    <input className= {style.box} maxLength="16"
                    type="text"
                    name="nationality"
                    placeholder="Caps in first, min 3 Char"
                    value={form.nationality}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.nationality}
                    </span>
                </div>
                <div className={style.name}>
                    <label htmlFor="image"> Image </label>
                    <input className= {style.box}
                    type="text"
                    name="image"
                    placeholder="Insert a Image URL"
                    value={form.image}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.image}
                    </span>
                </div>
                <div className={style.name}>
                    <label htmlFor="dob"> Date of Birth </label>
                    <input className= {style.box} 
                    type="date"
                    name="dob"
                    placeholder="Insert a Valid DoB (DD/MM/AAAA)"
                    value={form.dob}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.dob}
                    </span>
                </div>
                <div className={style.name}>
                    <label htmlFor="selectedTeam"> Teams </label>
                    <select
                    name="selectedTeam"
                    className={style.selectbox}
                    value={form.selectedTeam}
                    onChange={handleChange}
  >                 <option>Select a Team</option>
                    </select>
                </div>
                
                <div className={style.selectedteams}>
                    <label htmlFor="teams"> Selected Teams </label>
                    
                    <textarea className={style.selectedteamsbox}
                    type="text"
                    name="teams"
                    value={form.teams}
                    readOnly={true}
                    />
                </div>
                <div></div>
                <div></div>
                <div>
                    <button className={style.addBtn} type="button" onClick={addTeam}>
                    Add Team
                    </button>
                    </div>
                <div className={style.desc}>
                    <label htmlFor="description"> Description </label>
                    <textarea className= {style.descbox}  maxLength="1000"
                    type="text"
                    name="description"
                    placeholder="Insert a Description min 20 Characters, max 1000 Characters"
                    value={form.description}
                    onChange={handleChange}
                    />
                    <span>
                    {errors.description}
                    </span>
                </div>
                <div className={style.create}>
                    <button className={style.btn} type="submit">CREATE</button>
                </div>
            </form>
            <Link to ='../'><button className={style.homebtn}>Back to Home</button></Link>
            </div>
    )
}
export default Form