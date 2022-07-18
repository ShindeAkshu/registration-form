import React from 'react'
import { useState } from 'react';

const MultipleInputs = () => {

    const [userRegistration,setUserRegistration] = useState({
        username:"",
        email:"",
        contact:"",
        password:""
    });
  
    const[records,setRecords] =useState([]);

    const handleInput =(e)=>{
        const name =e.target.name;
        const value =e.target.value;
        setUserRegistration({...userRegistration, [name]: value})
        
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      const newRecord = {...userRegistration , id: new Date().getTime().toString()}
      setRecords([...records,newRecord]);  

      setUserRegistration({username:"",
      email:"",
      contact:"",
      password:""});
    };

    return(
   <form action='' onSubmit={handleSubmit}>
       
            <div>
              <label for="username">Full Name</label>
              <input  type="text" autoComplete='off'
              value={userRegistration.username}
              onChange={handleInput}
              name="username" id="username" placeholder='Enter Name'></input>
            </div>
            <div>
              <label for="email"> Email</label>
              <input type="email" autoComplete='off'
              value={userRegistration.email}
              onChange={handleInput}
              name="email" id="email" placeholder='Enter Email'></input>
            </div>
            <div>
              <label for="contact">contact No.</label>
              <input  type="tel" autoComplete='off'
              value={userRegistration.contact}
              onChange={handleInput}
              name='contact' id="contact" placeholder='Enter contact no.'></input>
            </div>
            <div>
              <label htmlfor="password">Password</label>
              <input type="password" autoComplete='off'
              value={userRegistration.password }
              onChange={handleInput}
              name='password'  id="password" placeholder='Enter Password'></input>
            </div>
            <button type="submit">
               Registration
            </button>
        
    </form>
    /*<div>
    {
      records.map((curElem)=>{
        return (
          <div className='showDataStyle'>
            <p>{curElem.username}</p> 
            <p>{curElem.email}</p> 
            <p>{curElem.contact}</p> 
            <p>{curElem.password}</p> 
            </div>
        )
        
     
      })
    }
  </div>*/
    

      
    );
};

export default MultipleInputs;