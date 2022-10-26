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
    console.log(formValues);
  }

  const FormHandler = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formErrors).length ===0 && isSubmit){
      console.log(formValues);
    }
  })

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
    }

    if(!values.pwd){
      errors.pwd = "Password required!";
    }
  }

  return (
    <div className='entry'>
        <form action="" onSubmit={FormHandler} className='form'>
          <div >
            <h3 className='formTag'>Sign-in</h3>
          </div>
          
            <label htmlFor="">First Name:</label>
            <input type="text"
                name='firstName'
                placeholder='Enter firstname'
                value={formValues.firstName}
                onChange={handleChange}
            />

            <label htmlFor="">Last Name:</label>
            <input type="text"
                name="lastName"
                placeholder="Enter lastname"
                value={formValues.lastName}
                onChange={handleChange}
            />

            <label htmlFor="">Email:</label>
            <input type="text" 
                name='email'
                placeholder='Enter email'
                value={formValues.email}
                onChange={handleChange}
            />

            <label htmlFor="">Password:</label>
            <input type="password"
              name='pwd'
              placeholder='Enter password'
              value={formValues.password}
              onChange={handleChange}
            />
            
            <button className='btn' >Sign-up</button>
        </form>
    </div>
  )
}

export default Form