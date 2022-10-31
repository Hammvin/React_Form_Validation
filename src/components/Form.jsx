import React, {useState, useEffect} from 'react'
import './Form_style.css'


const Form = () => {
  const initialValues = {firstName: "", lastName: "", email: "", pwd: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const FormHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!values.firstName){
      errors.firstName = "First name required!";
    }

    if(!values.lastName){
      errors.lastName = "Last name required!";
    }

    if(!values.email){
      errors.email = "Email required!";
    }else if(!regex.test(values.email)){
      errors.email = "Invalid email formate";
    }

    if(!values.pwd){
      errors.pwd = "Password required!";
    }else if(values.pwd.length < 8){
      errors.pwd = "Weak password";
    }else if(values.pwd.length > 10){
      errors.pwd = "Password is too long";
    }
    return errors;
  }

  return (
    <div className='entry'>
      <div className="space"></div>
      <div className=''>
        <form action="" onSubmit={FormHandler} className='form'>
          <div className='flex-container'>
            <h3 className='formTag'>Sign-in</h3>
          </div>

            <div className='flex-container formMessage'>
              {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui_message">Sign in success..!</div>) : ""}
            </div>
          
            <label htmlFor="">First Name:</label>
            <input type="text"
                name='firstName'
                placeholder='Enter firstname'
                value={formValues.firstName}
                onChange={handleChange}
            />
            <p className="warning">{formErrors.firstName}</p>

            <label htmlFor="">Last Name:</label>
            <input type="text"
                name="lastName"
                placeholder="Enter lastname"
                value={formValues.lastName}
                onChange={handleChange}
            />
            <p className="warning">{formErrors.lastName}</p>

            <label htmlFor="">Email:</label>
            <input type="text" 
                name='email'
                placeholder='Enter email'
                value={formValues.email}
                onChange={handleChange}
            />
            <p className="warning">{formErrors.email}</p>

            <label htmlFor="">Password:</label>
            <input type="password"
              name='pwd'
              placeholder='Enter password'
              value={formValues.password}
              onChange={handleChange}
            />
            <p className="warning">{formErrors.pwd}</p>
            
            <button className='btn' >Sign-up</button>
        </form>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default Form