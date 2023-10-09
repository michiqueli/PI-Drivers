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
    
       
    function addOptions(domElement, array) {
      var select = document.getElementsByName(domElement)[0];
     
      array.forEach(object => {
        var option = document.createElement("option");
        option.value = object.id;
        option.text = object.name;
        select.add(option);
    })
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
      teams: [],
      selectedteam: "",
    });

    const [errors, setErrors] = useState({
      name: "Empty Name",
      lastName:"Empty Last Name",
      nationality:"Empty Nacionality",
      image:"Empty Img",
      dob:"Empty Date of Birdth",
      description:"Empty Description",
      teams:"Empty Teams",
      selectedteam: " Empty List",
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const addTeam = () => {
      const { selectedTeam, teams } = form;
        if (selectedTeam && !teams.includes(selectedTeam)) {
            setForm({ ...form, teams: [...teams, selectedTeam], selectedTeam: "" });
        }else{
          window.alert("Team already added")
        }
      };

      const removeTeam = (index) => {
        const updatedTeams = [...form.teams];
        updatedTeams.splice(index, 1);
        setForm({ ...form, teams: updatedTeams });
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      const newErrors = validate({ ...form, [name]: value });
      setErrors(newErrors);
      setForm({ ...form, [name]: value });
      if (name === "selectedTeam") {
          setForm({ ...form, selectedTeam: value });
      }
      const hasErrors = Object.values(newErrors).some((error) => error !== "");
      setIsFormValid(!hasErrors);
    }
    
    const submitHandler = (event) => {
      event.preventDefault();
        const driver = {
        name: form.name,
        lastname: form.lastName,
        nationality: form.nationality,
        image: form.image,
        dob: form.dob,
        teams:form.teams,
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
        teams: [],
        description: "",
        selectedteam: "",
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
                    value={form.teams.map((teamId) => teams.find((team) => team.id == teamId).name).join("\n")}
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
            <Link to ='../Home'><button className={style.homebtn}>Back to Home</button></Link>
            </div>
    )
}
export default Form