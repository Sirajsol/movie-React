import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'
import axios from "axios";
import dracula from '.././pro/dark.jpg'
import broken from '.././pro/broken.jpg'
import chill from '.././pro/chil.jpg'
import brave from '.././pro/brave.jpg'
import hobit from '.././pro/hobit.jpg'
import joker from '.././pro/joker.jpg'
import you from '.././img/mv/you got.jpg'
import bruce from '.././img/mv/bruce.jpg'
import good from '.././img/mv/good.jpg'
import troy from '.././img/mv/troy.jpg'
const Login=()=>{
const[userName,setUserName]=useState('')
const[password,setPassword]=useState('')
const[user,setUser]=useState({})
const navigate=useNavigate()
const baseurl='http://localhost:8080/user'
const lo=()=>{
   // const u=[userName,password]
    // const r=axios.post('http://localhost:8080/user/'+userName+'/'+password).then(res=>{  if the api return an object then res.data is an array
        const r=axios.post('http://localhost:8080/user/'+userName+'/'+password).then(res=>{//if the api return a user then the res.data is an object
       //const r=axios.post('http://localhost:8080/user/sv',userName).then(res=>{//if you want to post a reques body (post(url,request body))
       if(res.data){setUser(res.data)
        // const[id,password,role,username]=res.data
        const{id,password,role,username}=res.data
         localStorage.setItem('user',JSON.stringify({id:id,password:password,role:role,username:username}))
        console.log('username: '+username)
        if(!res.data.length){console.log('but length is '+res.data.length)}
         navigate('/Home')
       }
       else if(!res.data){console.log('no data')}
    }).catch(error=>console.log(error))
    console.log('r is '+r)
}
const log=()=>{

    if((userName&&userName.length>2)&&(password&&password.length>2)){
        if(((userName=='Siraj')&&(password=='sol'))||((userName=='Samy')&&(password=='sol'))){
            sessionStorage.setItem('user',userName)
            navigate('/Home')
        }
        else{
            alert('user not found')
        }
    }
}
    return<div className="logco">
    <div className="slideshow">
    <div className="title">Siraj 's Cinema </div>
       
        <div className="content">
            <div className="content-carrousel">
            
<img src={joker} ></img>
            <img src={hobit} ></img>
            <img src={broken}></img>
           <img src={chill} ></img>
          <img src={brave} ></img>
          <img src={dracula} ></img>
             <img src={bruce} ></img>
            <img src={you}></img>
            <img src={troy} ></img>
            
            </div>
           
        </div>
        <div className="descont" >
    
    <div className="desc">
        
        it is a movie site 
        where you can create , update , delete movies
   
</div>
    </div>
        <div className="ddcontain">
        <div className="dd">
        <h1>You are what you watch</h1>
            <h3>
                i really belive that the kind of movies you watch can reflect prety much about you
            </h3>
        </div>
        <div className="dd">
        <h1>Put your own rate</h1>
            <h3>
                i really belive that the kind of movies you watch can reflect prety much about you
            </h3>
        </div>
        <div className="dd">
        <h1>Add your favorit movies</h1>
            <h3>
                i really belive that the kind of movies you watch can reflect prety much about you
            </h3>
        </div>
        <button onClick={()=>{ navigate('/Home')}}>Get started</button>
        </div>
    <div className="lmcontainer">
    <form onSubmit={(e)=>{e.preventDefault()}}>
<div className="il">
    <input className="txt"
    type='text'
    id='username'
    value={userName}
    onChange={(e)=>{setUserName(e.target.value)}}
    >

    </input>
    <label className="lbl" htmlFor="username">User Name</label>
</div>
<div className="il">
    <input className="txt"
    type='password'
    id='passwd'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    >

    </input>
    <label className="lbl" htmlFor="passwd">Password</label>
    </div>
    <button onClick={()=>{lo()}}>Login</button>


    </form>
    </div>
    
    </div>
   
    <div className="footer">&copy; Siraj Soliman 2023</div>
    </div>
}
export default Login