import React, { useState } from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css'

const Registration = () => {
    const navigate=useNavigate();

    const validateName=RegExp('^([a-zA-Z]{5,20})$');
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');

    const [inputState,setInputState]=useState({isError:{
        username:'',
        lastname:'',
        email:'',
        password:'',
     }})
     const handalChange=(event)=>{
        event.persist();
        let {name,value}=event.target;
        let isErr = {...inputState.isError};
        switch(name){
          case "username":
            isErr.username=validateName.test(value)?"":"Only Uppercase and Lowercase is required";
            break;
          case "lastname":
            isErr.lastname=validateName.test(value)?"":"Only Uppercase and Lowercase is required";
            break;
          
            case "email":
            isErr.email=validateEmail.test(value)?"":"Wrong Pattern";
            break;
           
            case "password":
              isErr.password=validatePassword.test(value)?"":"Total 10 Characters is required, Uppercase, Lowercase, Speacial Characters, Numbers";
              break;   
        }
        setInputState({...inputState,[name]:value,isError:isErr});
    console.log("values",inputState);
  }
  const submitHandler=(event)=>{
    event.preventDefault();  
    console.log("Final values",inputState);
    let user={username:inputState.username,email:inputState.email,password:inputState.password};
    console.log("user value",user);
    axios.post('https://project-node-1.herokuapp.com/postUserData',user) 
    .then(res=>{
      console.log("Axios responce:",res);
      navigate('/login_page');
        }) 
    .catch(err=>{
      console.log("Axios error",err);
    })
  }
    return (
        <div>
           <div className="mainclass">
                <div className='leftform'>
                <img src='image/regicon.jpg' alt="image"/>
                    <div className='rightform'>
                        <h2>Sign Up</h2>
                        <form onSubmit={submitHandler}>
                            <input className="reginput" type="text" name="username" placeholder="Firstname" onChange={handalChange}/>
                            {inputState.isError.username.length>0 && (
                            <span className='signerror'>{inputState.isError.username}</span>
                            )}

                            <input className="reginput" type="text" name="lastname" placeholder="Lastname" onChange={handalChange}/>
                            {inputState.isError.lastname.length>0 && (
                             <span className='signerror'>{inputState.isError.lastname}</span>
                            )}

                            <input className="reginput" type="email" name="email" placeholder="Email" onChange={handalChange}/>
                            {inputState.isError.email.length>0 && (
                             <span className='signerror'>{inputState.isError.email}</span>
                            )}

                            <input className="reginput" type="password" name="password" placeholder="Password" onChange={handalChange}/><br/>
                            {inputState.isError.password.length>0 && (
                             <span className='signerror'>{inputState.isError.password}</span>
                            )}

                            <input className='regbtn' type="submit" name="submit" value="Sign up"/>  
                        </form>

                        <div>
                            <p>OR</p>
                            <h4>Sign In With</h4>
                            <button className="regbtn1"><FaFacebookF fontSize="20px"/>Facebook</button>
                            <button className="regbtn2"><FcGoogle/>Google</button>

                        </div>
                    </div>
                </div>            
            </div> 
            
            
            </div>
      
    )
}

export default Registration
