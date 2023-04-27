import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mat from'./mat.jpg'
import './createdmovie.css'
import tr from'./tr.jpg'
import ke from'./ke.jpg'
// import john from '../public/img/mv/john.jpg'
import Movieservice from'./movieservice'
import ActorService from'./actorservice'
import immg from './immg.json'
import sr from'./111.JPG'
import city from './img/mv/city.jpg'
import legends from './img/mv/The Legends of the fall.jpg'
import first from './img/mv/50 First Date.jpg'
import training from './img/mv/Training Day.jpg'
import truman from './img/mv/truman.jpg'
import you from './img/mv/you got.jpg'
import grinch from './img/mv/grinch.jpg'
const Movie=({id,mname,change})=>{
    const [name,setName]=useState([])
    const [movie,setMovie]=useState({})
    const[base6,setBase6]=useState('')
    const [actorstoadd,setActorstoadd]=useState([])
    const[actadd,setActadd]=useState([])
    const[actr,setActr]=useState([])
    const[listtoggle,setListtoggle]=useState(false)
    const[ref,setref]=useState([])
    const[addtoggle,setAddtoggle]=useState(false)
    const [search,setSearch]=useState('')
    const [tempname,setTempname]=useState([])
    const u=JSON.parse(localStorage.getItem('user'))
//  alert(immg[0].img)
    let nn=[]
   
   useEffect(
()=>{
   // alert('update actors')
    Movieservice.MovieActors(parseInt(id)).then(res=>{
        setName(res.data)
        
   // change=true
        }).catch(err0r=>console.error())

}

 ,[actr]  )
 useEffect(
    ()=>{
        // alert('toggle')
        Movieservice.GetActorstoadd().then(res=>{
            setActorstoadd(res.data)
            setref(res.data)
        change=true
            }).catch(err0r=>console.error())
    
    }
    
     ,[listtoggle]  )

 useEffect(
    ()=>{
        Movieservice.MoviById(parseInt(id)).then(res=>{
            setMovie(res.data)
            setBase6(btoa(String.fromCharCode(...new Uint8Array(res.data.imgdata))))
        change=true
            }).catch(err0r=>console.error())
    
    }
    
     ,[]  )
const searchit=(search)=>{
   // setActorstoadd(ref)
    let match=[]
 match=ref.filter(ac=>ac[1].startsWith(search.substring(0,1).toUpperCase()+search.substring(1)))

//if(match&&(match.length>0))
{
    //console.log(match[1])
    setActorstoadd(match)
}

}
useEffect(()=>{
    if(search.length>0)
searchit(search)
else if(search.length==0)
{setActorstoadd(ref)
setActr([])
}
},[search])

     const filt=(id)=>{
        // alert(actorstoadd[0][0])
        setActorstoadd(actorstoadd.filter((item)=>item[0]==id))
     }
     const{description,imgdata}=movie
    //  setBase6(btoa(String.fromCharCode(...new Uint8Array(imgdata))))
     console.log('imagedata now is :'+typeof(imgdata) )
    console.log('base6:'+base6)
     
    const remove=(selectedactor,selectedmovie)=>{
        // alert('add pressed')
        ActorService.MovieRemove(selectedactor,selectedmovie).then(res=>{
            const rem=name.filter(n=>n[0]!=selectedactor)
            setName(rem)
        }


        )
        setAddtoggle(!addtoggle)
        const rem=name.filter(n=>n[0]!=selectedactor)
        setName(rem)
        // alert('update addtoggle')
    }

// alert(name.length+name)



const add=(ai,mi)=>{
//    alert('add pressed')
    ActorService.MoviePut(ai,mi).then(res=>{
      setName([...name,actorstoadd[0]])
      setActr([])
       
    })
    setAddtoggle(!addtoggle)
    // setTempname([tempname,...ai])
    // alert('update addtoggle')
    
}

    return<div className='moviecontainer'>
        <h1>{mname}</h1> 
    <div className='createdmovie'>
   

        <div className='imganddesc'>
        <img src={`data:image/jpg;base64,${imgdata}`} alt="" />
    <p>
       <h2> Description</h2>
       <br></br>
      {description}
       </p>
       {(u&&u.role=='Admin')&& <div className='ull'>
  <input type='text'
  value={search}
  onChange={(e)=>{setSearch(e.target.value)}}
  ></input>
  <ul id='uul'>
  {/* <li><input type='text'
  value={search}
  onChange={(e)=>{setSearch(e.target.value)}}
  ></input></li> */}
      {actorstoadd && actorstoadd.map(atd=>{return <li onClick={()=>{
        if(actorstoadd.length>1){ setActr([atd[0],atd[1]],atd[2])
            filt(atd[0])}
            else   if(actorstoadd.length==1){ 
                if(actr&&actr.length>0){
                   
               setActorstoadd(ref)}
               else{
                setActr([atd[0],atd[1]],atd[2])
                filt(atd[0])
               }
            }
    }
    
   
} 
  
   
    ><img src={`data:image/jpg;base64,${atd[2]}`} alt="hhh" /><h6>{atd[1]}</h6></li>
      
      })}
      <li><button onClick={()=>{add(actr[0],id) }}>
        
         {/* disabled>  */}
        
        Add</button><h5>{actr[1]}</h5></li>
       {/* <option value={1}>1</option> */}
     </ul>
     
     {/* <button onClick={()=>{add(actr[0],id)
        //  setAddtoggle(2)
        }}> Add</button><h5>{actr[1]}</h5> */}

     </div>
}
    </div>
    <div className='nameandactors'>
    <h2>{mname}</h2>
   {(name.length>0)&&<ul>
{name.map(n=>{
    return <li>
        
    <Link to={`/Actor/${n[0]}/${n[1]}`} className='nav1lnk'>
    <img src={`data:image/jpg;base64,${n[2]}`} alt="" />
        <h5>{n[1]}</h5>
       
        </Link>
   
        {(u&&u.role=='Admin')&&<h5 onClick={()=>{remove(n[0],id)}}>remove</h5>}
        
    </li>
    
  
})}
       
       
        
        {/* <li><h5></h5><h5></h5><Link to ={`/CreateM/${id}`} className='nav1lnk'>Edit</Link></li> */}

        {/* <li><button onClick={()=>{add(actr[0],id)
        //  setAddtoggle(2)
        }}> Add</button><h5>{actr[1]}</h5></li> */}

    </ul>} 
    {/* <button onClick={
       ()=>{
        Movieservice.PreRemove(id).then(res=>{
            alert('yeaaaaa')
        })
       } 
    }>Removeall</button> */}
       
    </div>
    </div>
    </div>
}
export default Movie