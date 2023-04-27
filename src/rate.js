import React from 'react'
import { useState } from 'react'
import './rate.css'
import star from './star.png'
const Rate=()=>{
    const[num,setNum]=useState(0)
    const[toggle,setToggle]=useState(false)
    return<div className='ratecont' onClick={()=>{setToggle(!toggle) } }   onMouseLeave={()=>{if(!toggle){setNum(0)}}}>
    <div onMouseEnter={()=>{setNum(1)}} className={num>0?'shine':'off'}><img src={star}></img></div>
    <div onMouseEnter={()=>{setNum(2)}}  className={num>1?'shine':'off'}><img src={star}/></div>
    <div onMouseEnter={()=>{setNum(3)}}  className={num>2?'shine':'off'}><img src={star}/></div>
    <div onMouseEnter={()=>{setNum(4)}}  className={num>3?'shine':'off'}><img src={star}/></div>
    <div onMouseEnter={()=>{setNum(5)}}  className={num>4?'shine':'off'}><img src={star}/></div>
    </div>
}
export default Rate