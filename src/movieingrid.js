import React, { useEffect, useState } from 'react'
import mat from'./mat.jpg'
import './createdmovie.css'
import tr from'./tr.jpg'
import ke from'./ke.jpg'
import city from './img/mv/city.jpg'
import Movieservice from'./movieservice'
import star from './star.png'
import{legends,first,training,you,grinch} from './immg'
const Movieingrid=({id})=>{
    const [movvie,setMovvie]=useState({})
    useEffect(()=>{
Movieservice.MoviById(id).then(
    res=>{
        setMovvie(res.data)
    }
).catch(error=>{console.log(error)})
    },[id])//i add id to the dependencies matrix to fix the problem of conflicting boster and link
    
    return<div className='movieingrid'>
        <div>
        <img src={`data:image/jpg;base64,${movvie.imgdata}`} alt="" />
            
            
            
            <div className='ratee'>
                <img src={star}/>
                <div className='txt'>{movvie.rate}</div>
                </div>
        </div>
        <div className='title'>{movvie.name}</div>
    </div>
}
export default Movieingrid