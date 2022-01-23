import axios from 'axios';
import React, { useState } from 'react'
import './Login.css'
import {FaFacebookF} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();

    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$');
    const validatePassword=RegExp('^(?=.*[A-Z])(?=.*[!@$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$');

    const [inputState,setInputState]=useState({isError:{
        email:'',
        password:'',
    }})
  
     const handalChange=(event)=>{
         event.persist();
         let {name,value}=event.target;
         let isErr={...inputState.isError}
         switch(name){
             case "email":
                 isErr.email=validateEmail.test(value)?"":"Wrong Pattern";
             break;
             case "password" :
                 isErr.password=validatePassword.test(value)?"":"Total 10 Characters is required, Uppercase, Lowercase, Speacial Characters, Numbers";
                 break;
       }
       setInputState({...inputState,[name]:value,isError:isErr});
       console.log("value",inputState);
     }

     const submitHandler=(event)=>{
         event.preventDefault();
         console.log("Final value",inputState);
         let user={email:inputState.email,password:inputState.password}
         console.log("Submit value",user);
         axios.post('https://project-node-1.herokuapp.com/postLoginData',user)
         .then(res=>{
             console.log("responce",res);
             window.localStorage.setItem("Token",res.data.token);            
             navigate('/product_page')
         })
         .catch(err=>{
             console.log("error",err);
         })
     }

    return (
      <>
       <div className="mainclass">
                <div className='leftform'>
                <img src='image/signup.jpg'/>
                    <div className='rightform'>
                        <h2>Welcome Back!</h2>
                        <form onSubmit={submitHandler}>
                            
                            <input className="reginput" type="email" name="email" placeholder="Email" onChange={handalChange}/>
                            {inputState.isError.email.length>0 && (
                             <span className='signerror'>{inputState.isError.email}</span>
                            )}

                            <input className="reginput" type="password" name="password" placeholder="Password" onChange={handalChange}/><br/>
                            {inputState.isError.password.length>0 && (
                             <span className='signerror'>{inputState.isError.password}</span>
                            )}

                            <input className='regbtn' type="submit" name="Login" value="Login"/>  
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
        </>
    )
}

export default Login



