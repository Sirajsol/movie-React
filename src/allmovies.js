import { React, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Movie from './movie'
import MovieService, {MovieSave} from './movieservice'
// import './index.css'
import Movieingrid from './movieingrid'
const AllMovies=()=>{
const [movies,setMovies]=useState([])
const[search,setSearch]=useState('')
const[year,setYear]=useState(0)
const[gener,setGener]=useState('')
const[rate,setRate]=useState('')
const [years,setYears]=useState([])
const[user,setUser]=useState('')
const[totalPages,setTotalPages]=useState(0)
const [currentPage,setCurrentPage]=useState(0)
const navigate=useNavigate()
useEffect(()=>{
const u=JSON.parse(localStorage.getItem('user'))
if(!u||(u=='')){navigate('/')}
else{
    if(u){console.log('Welcome '+u.username)
    //alert('Welcome '+u.username+' '+u.role)
}
setUser(u.toString())
}
MovieService.Years().then(
res=>{
    setYears(res.data)
}

)
},[])
useEffect(()=>{

    MovieService.MoviesByYear(year).then(
    res=>{
        setMovies(res.data)
    }
    
    )
    },[])
useEffect(()=>{
if(gener!='All')
{MovieService.GetMoviesByGener(gener).then(
    res=>{
        setMovies(res.data)
    }
   
)
// alert(gener)
}
else{
    MovieService.GetMovies().then(res=>{
        setMovies(res.data.content)}).catch(console.error())
}
},[gener])
useEffect(()=>{

    MovieService.GetMoviesByYear(year).then(
        res=>{
            setMovies(res.data)
        }
    )
    
    },[year])
    useEffect(()=>{

        MovieService.GetMoviesByRate(rate).then(
            res=>{
                setMovies(res.data)
            }
        )
        
        },[rate])


useEffect(()=>{
    // alert('sear')
    if(search.length>0){
    MovieService.MovieLike(search).then(res=>{
        setMovies(res.data)}).catch(console.error())
    }
    else{
        MovieService.GetMovies().then(res=>{
            setMovies(res.data.content)
        setTotalPages(res.data.totalPages)
        
        }).catch(console.error())
    }
    
    },[search])

useEffect(()=>{
MovieService.GetMovies(currentPage).then(res=>{
    setMovies(res.data.content)}).catch(Error=>console.log('error :'+Error))


},[currentPage])
const nextPage=()=>{
    if(currentPage<totalPages-1){
        setCurrentPage(currentPage+1)
    }
}

const previousPage=()=>{
    if(currentPage>0){
        setCurrentPage(currentPage-1)
    }
}

    return<div className='searchcont'>




<div className="wholecont">
   <div className="cont">
        <label htmlFor="gener">Select Gener</label>
<select
id="gener"
onChange={(e)=>{setGener(e.target.value)
   
}}
>
<option value="All">All</option>
    <option value="Drama">Drama</option>
    <option value="Action">Action</option>
    <option value="War">War</option>
    <option value="Comedy">Comedy</option>
    <option value="Crime">Crime</option>
    <option value="Romance">Romance</option>
    <option value="Animation">Animation</option>
    <option value="Adventure">Adventure</option>
    <option value="Fantasy">Fantasy</option>
</select>
</div>
<div className="cont">
<label htmlFor="Rate">Select Rate</label>
<select
id="Rate"
onChange={(e)=>{setRate(e.target.value)

}

}
>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    
</select>
</div>
<div className="cont">
<label htmlFor="year">Select Year</label>
<select id="year"
onChange={(e)=>{setYear(e.target.value)}}
>
  {years.map(yr=>{
    return<option value={yr}>{yr}</option>
  })} 
</select>
</div>
</div>



        
        <div className='searchbar'>
<input
type='text'
id='mvnm'
value={search}
onChange={(e)=>{setSearch(e.target.value)}}
></input>
<label htmlFor='mvnm'>Search</label>
        </div>
    
    <div className='moviesgrid'>
    {/* {movies.map(movie=>{
        const{id,name}=movie
        return<div>
        <Movieingrid  name={name}/>
    </div>})} */}

{movies.map(m=>{
      
      return<Link to={`/Movie/${m.id}/${m.name}`} className='nav1lnk' key={m.id}><Movieingrid id={m.id} name={m.name} rate={m.rate}change={true}/></Link>
      
  })}
    
    </div>
    <div className='nextandprevious'>
    <button onClick={()=>{previousPage()}}>previous</button>
        <input
        type='text'
        value={currentPage+1}

        />
        <button onClick={()=>{nextPage()}}>next</button>
        
    </div>
    </div>
}
export default AllMovies