import { React, useEffect, useState } from 'react'
import Movie from './movie'

import './createmovie.css'
import MovieService from './movieservice'
import ActorService from './actorservice'
const AddActorToMovie=()=>{
const [movies,setMovies]=useState([])
const [actors,setActors]=useState([])
const [selectedmovie,setSelectedmovie]=useState(1)
const [selectedactor,setSelectedactor]=useState(1)
const[movie,setMovie]=useState(<Movie id={1} mname={'training day'}/>)
const[movieIndex,setMovieIndex]=useState(0)
const[actorIndex,setActorIndex]=useState(0)
useEffect(()=>{
    MovieService.GetMovies().then(res=>{
        setMovies(res.data).catch(console.error())
    })

},[])
useEffect(()=>{
    ActorService.GetActors().then(res=>{
        setActors(res.data).catch(console.error())
    })

},[])
const add=()=>{
    alert('add pressed')
    ActorService.MoviePut(selectedactor,selectedmovie)
    setMovie(<Movie id={selectedmovie}  mname={movies[movieIndex].name} change={true}/>)
}
const subhndl=(e)=>{
    e.preventDefaulte()
}
    return<div className='moviecont'>
    <div className='mmovie'>
    <div className='movie'>
    <form onSubmit={(e)=>{subhndl(e)}}>
        <br></br>
        <br></br>
        <br></br>
        <select id='movies'
        onChange={(e)=>{setSelectedmovie(e.target.value)
            setMovieIndex(e.target.selectedIndex)
        setMovie(<Movie id={e.target.value} mname={movies[e.target.selectedIndex].name} change={false}/>)
        }}
        >
           {movies.map(movie=>{return   <option value={movie.id}>{movie.name}</option>})} 
           
        </select>
        <label htmlFor='movies'>select movie</label><br></br>
        <select id='actors'
         onChange={(e)=>{setSelectedactor(e.target.value)
            setActorIndex(e.target.selectedIndex)
        }}
        >
        {actors.map(actor=>{return   <option value={actor.id}>{actor.name}</option>})} 
        </select>
        <label htmlFor='actors'>select actor</label>

    </form>
    <h1>{selectedmovie}/{selectedactor}</h1>
    <button type='submit' onClick={()=>{add()}}>add</button>
    </div>
    </div>
    {/* <div>{selectedmovie&& movie}</div> */}
    </div>
}
export  default AddActorToMovie