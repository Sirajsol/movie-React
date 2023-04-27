import { React, useEffect, useState } from 'react'
import {Link} from'react-router-dom'
import Movie from './movie'
import MovieService, {MovieSave} from './movieservice'
import './moviesforactor.css'
import ke from './ke.jpg'

import ActorService from './actorservice'
import Movieingrid from './movieingrid'
import { useParams } from 'react-router-dom'
const MoviesForActor=()=>{
    const{id,name}=useParams()
    const[actor,setActor]=useState({})
    useEffect(()=>{
    ActorService.ActorById(id).then(

      res=>{
        setActor(res.data)
      }
    ).catch(error=>{console.log(error)})

    },[])
const[mov,setMov]=useState([])
useEffect(()=>{
  ActorService.MoviesPerActor(id).then(
    res=>setMov(res.data)
  ).catch(error=>{console.log(error)})

},[])
// const spreaded=mov.map(m=>{return
// {m.id,m.name}
  
// })
// const[mov,setMov]=useState([])                    useEffect=(...) is a fuckin sin , it is useEffect()not useEffect=()
// useEffect=(()=>{

// ActorService.MoviesPerActor(1).then(res=>{
//     setMov(res.data)
// }

// ).catch(console.error())
// },[])


// const [movies,setMovies]=useState([])
// useEffect(()=>{
// ActorService.MoviesPerActor(1).then(res=>{
//     setMovies(res.data)}).catch(console.error())


// },[])

    return<div className='cont' >
     <div className='headd'><h2>{name}  </h2>
     <img src={`data:image/jpg;base64,${actor.imgdata}`}></img>
     </div> 
    
    <div className='moviesgrid'>
    {mov.map(m=>{
      const{id,name,rate,description}=m
        return<Link to={`/Movie/${m.id}/${name}`} className='nav1lnk'><Movieingrid id={id} /> </Link>

    })}
           {/* <Link to={`/Movie/${mov[0].id}/${mov[0].name}`} className='nav1lnk'><Movieingrid id={mov[0].id} name={mov[0].name} rate={mov[0].rate} change={true}/></Link>
{mov[0].id+'/'+mov[0].name}
<br></br>
{mov[1].id+'/'+mov[1].name}
<br></br>
{mov[2].id+'/'+mov[2].name}
<br></br>
{mov[3].id+'/'+mov[3].name}
<br></br>
<img src={`data:image/jpg;base64,${mov[0].imgdata}`}></img> */}
    </div>
    </div>
}
export default MoviesForActor