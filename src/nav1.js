import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import sir from './111.JPG'
import './nav1.css'
const Nav1=()=>{
const[show,setShow]=useState(false)
const location=useLocation();
const[user,setUser]=useState('')


const u =JSON.parse(localStorage.getItem('user'))
useEffect(()=>{
    
    // if(u&&u!=null){setUser(u)}
},[u])

useEffect(()=>{
   // alert('welcome '+u)
    if(location.pathname=='/'){
   
        setShow(false)
    }
    else{
        setShow(true)
    
    }
        
},[location.pathname])

  if(show)  return  <div className='nav1cont'>
        <div>
            <img  className='logo' src={sir}></img>
        </div>
        {show&&

<ul className='nul'>
        <li className='nulli'><Link to={'/Home'} className='nav1lnk'>Home</Link></li>
        {/* <li className='nulli'><Link to={'/Home'} className='nav1lnk'>Content</Link></li> */}
       {(u&&u.role!='user') &&<li className='nulli'><Link to={'/About'} className='nav1lnk'>About</Link></li>}
        {(u&&u.role=='Admin')&&<li className='nulli'><Link to={'/CreateM'} className='nav1lnk'>Create Movie</Link></li>}
        {(u&&u.role=='Admin')&&<li className='nulli'><Link to={'/CreateA'} className='nav1lnk'>Create Actor</Link></li>}
        <li className='nulli'><Link to={'/'} className='nav1lnk' onClick={()=>{localStorage.removeItem('user')}}>Logout</Link></li>
       </ul>

        }
       
       
    </div>
    }

export default Nav1