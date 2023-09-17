import style from './Create.module.css'
import {useState} from 'react'
import validate from './validation';
import { Link } from 'react-router-dom';
const Form = ({create}) => {

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

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        
        setErrors(validate({...form, [property]: value}))
        setForm({...form, [property]: value});
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        create(form);
    }

    return (
         <div className={style.formulario}>
            <div className={style.title}>TIME</div>
            <div className={style.title}>to</div>
            <div className={style.title}>CREATE A DRIVER</div>
            
         <form className={style.container} onSubmit={submitHandler}>
                <div className={style.name}>
                    <label htmlFor="Name"> Name </label>
                    <input className= {style.box} input maxlength="16"
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
                    <input className= {style.box} input maxlength="16"
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
                    <input className= {style.box} input maxlength="16"
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
                    <label htmlFor="teams"> Teams </label>
                    <select defaultValue='' className= {style.selectbox}>
                    <option value=''>Select a Team</option>
                    <option value='Ferrari'>Ferrari</option>
                    <option value='Mercedes'>Mercedes</option>
                    <option value='Red Bull'>Red Bull</option>
                    <option value='Hass'>Hass</option>
                    <option value='Renault'>Renault</option>
                    <option value='Williams'>Williams</option>
                    </select>
                    <span>
                    {errors.team}
                    </span>
                </div>
                <div className={style.desc}>
                    <label htmlFor="description"> Description </label>
                    <textarea className= {style.descbox} input maxlength="1000"
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
                <div className={style.login}>
                    <button className={style.btn} type="submit">CREATE</button>
                </div>
            </form>
            <Link to ='../Home'><button className={style.homebtn}>Back to Home</button></Link>
            </div>
    )
}
export default Form