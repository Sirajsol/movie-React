import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Cont } from "./mcontx";
import{Link}from 'react-router-dom'
import SingleCard from "./singlecard";
const Card=({id,firstName,lastName})=>{
    const {names}=Cont
    const {para}=useParams()
    let [cl,setCl]=useState('ocontainhome')
    let [l,setL]=useState('')
    return(
        <div  className={` ${l}`} onMouseEnter={()=>{setL("close")}} onMouseLeave={ ()=>{setL("")}}>
        <div  className={` ${cl}`} onMouseEnter={ ()=>{setCl('containhome')} } onMouseLeave={ ()=>{setCl('ocontainhome')} }>
         
           <div className="card ">
            <div className="cardelement">card{para}</div> 
            <div className="cardelement">{id}</div>
            <div className="cardelement">{firstName}</div>
            <div className="cardelement">{lastName}</div>
            
            </div>
        </div>
        </div>
    )
}
export  default Card