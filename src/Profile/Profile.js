import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Button} from 'react-bootstrap'

export default function Profile() {
    const navigate=useNavigate();
    const loggingOut=()=>{
      window.localStorage.clear(); 
        navigate("/login_page");
    }
    return (
        <div>
            {/* <h2>Welcome to profile page</h2> */}
           <Button onClick={loggingOut} className='profilebtn'>Log Out</Button>
        </div>
    )
}
