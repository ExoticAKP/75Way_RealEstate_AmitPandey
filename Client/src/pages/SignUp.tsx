import React, { useEffect } from 'react'
import './Login.css'
import { useState } from 'react'
import user_icon from '../assets/images/person.png'
import email_icon from '../assets/images/email.png'
import password_icon from '../assets/images/password.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const SignUp:React.FC = () => {
    const [action, setAction] = useState<string>("Sign Up");
    const [logState,setLogState]=useState<boolean>(true);
    const [password,setPassword]=useState<string>('');
    const [email,setEmail]=useState<string>('');
    const [name,setName]=useState<string>('');
    const handleSubmit=async()=>{
        const user={
            name,email, password
        }
        const {data}=await axios.post('http://localhost:3000/signup',user)
        console.log(data);
        if(data===''){
            setLogState(true);
        }
        else{
            setName(data);
            setLogState(false)
        }
        
    }
    useEffect(()=>{

    },[logState])

    if(logState){
        return (<div className='container'>
        <div className='headerLog'>
            <div className='text'>{action}</div>
            <div className='underline'></div>

            </div>

            <div className='inputs'>
                {action==="Login"?<div></div>: 
                    
                    <div className='input'>
                        <img src={user_icon} alt='user icon' />
                        <input type='text' placeholder='Username' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                }
           

            <div className='input'>
                <img src={email_icon} alt='user icon' />
                <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div className='input'>
                <img src={password_icon} alt='user icon' />
                <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            </div> 
        </div>

        <div className="submit-container">
        <div onClick={handleSubmit} className={action==="Login"? "submit gray":"submit"} >Sign Up</div>
            <Link to={'/login'}><div className={action==="Sign Up"? "submit gray":"submit"} >Login</div></Link>
        </div>
        </div>)
    }
    else{
        return (<div className='responseDiv'>
            <h1>Hello, You are welcomed {name}. We are that you registered with  us</h1>
        </div>)
    }
}

export default SignUp;