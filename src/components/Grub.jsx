import React, { useState, useEffect} from 'react';
import './Form_style.css';

function Grub() {
    const [fName, setFname] = useState("");
    const [fNameError, setFnameError] = useState("");
    const [lName, setLname] = useState("");
    const [lNameError, setLnameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdError, setPwdError] = useState("");

    const Fname = (e) => {
        let fname = e.target.value;
          setFname(fname);
    }

    const Lname = (e) => {
        let lname = e.target.value;
        setLname(lname);

    }
    const Email = (e) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let email = e.target.value;
        setEmail(email);
        
        if(!regex.test(email)){
            setEmailError("Invalid email format");
        }else{
          setEmail(email);
        }
    }

    const Password = (e) => {
        let pass = e.target.value;
        setPwd(pass);

        if(pass.length < 5){
          setPwdError("Weak Password!");
        }else if(pass.length > 10){
            setPwdError("Password too long!");
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!fNameError && !lNameError && !emailError && !pwdError){
          alert("Signed in successfully!");
        }

    }
    

  return (
    <div className='entry'>
      <div className="space"></div>
      <div className=''>
        <form action="" onSubmit={handleSubmit} className='form'>
          <div className='flex-container'>
            <h3 className='formTag'>Sign-in</h3>
          </div>
          
            <label htmlFor="">First Name:</label>
            <input type="text"
                name='firstName'
                placeholder='Enter firstname'
                onChange={Fname}
            />
            <p>{fNameError}</p>

            <label htmlFor="">Last Name:</label>
            <input type="text"
                name="lastName"
                placeholder="Enter lastname"
                onChange={Lname}
            />
            <p>{lNameError}</p>

            <label htmlFor="">Email:</label>
            <input type="text" 
                name='email'
                placeholder='Enter email'
                onChange={Email}
            />
            <p>{emailError}</p>

            <label htmlFor="">Password:</label>
            <input type="password"
              name='pwd'
              placeholder='Enter password'
              onChange={Password}
            />
            <p>{pwdError}</p>
            
            <button className='btn'>Sign-up</button>
        </form>
      </div>
      <div className="space"></div>
    </div>
  )
}

export default Grub