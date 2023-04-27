import { React, useEffect, useState } from 'react'
import Movie from './movie'
import Movieservice, {MovieSave} from './movieservice'
import './createmovie.css'
import { useNavigate, useParams } from 'react-router-dom'
import movieservice from './movieservice'
import Formerror from './errorform'
const Createmovie=()=>{

const[name,setName]=useState('')
const[gener,setGener]=useState('')
const[actors,setActors]=useState([])
const[description,setDescription]=useState('')
const[rate,setRate]=useState('5.0')
const[year,setYear]=useState('1980')
const[movie,setMovie]=useState({})
const[imagdata,setImagdata]=useState(null)
const[selectImage,setSelectImage]=useState(false)
const[imgdata,setImgdata]=useState('')
const[ready,setReady]=useState(false)
const[tog,setTog]=useState(false)
const[fer,setFer]=useState(<Formerror/>)
const[selectedfil,setSelectedfil]=useState('')
// const[erfr,setErfr]=useState(Formerror({show:false}))
const[erfr,setErfr]=useState({show:true})
const{id}=useParams()
const navigate=useNavigate()
const u =JSON.parse(localStorage.getItem('user'))

useEffect(()=>{
    if(!u||(u&&(u.role!='Admin'))){navigate('/Home')}
if(id){
    Movieservice.MoviById(id).then(
        res=>{setMovie(res.data)
            setName(res.data.name)
            setGener(res.data.gener)
            setDescription(res.data.description)
            setRate(res.data.rate)
            setYear(res.data.year)
            setImgdata(res.data.imgdata)
        }
    ).catch(error =>console.log(error))
}

},[])

useEffect(()=>{

    // if((name&& name.length>0)&&(gener&&gener.length>0)&&(rate)&&(year))setReady(true)
    // else { setReady(false)}
upch()
// if(name&&rate&&gener&&year&&description)setReady(true)
},[name,gener,imagdata,description,rate,year])

const upch=()=>{
    const i=8890
    // alert(i+' '+parseInt(year)+'/'+rate+' '+parseFloat(rate))
    //if((name&& name.length>0)&&(gener&&(gener.length>0))&&(rate&&(parseFloat(rate)>0))&&(year&&(parseInt(year)>0)))
    if((name&& name.length>0)&&(gener&&(gener.length>0))&&(rate&&((parseFloat(rate)>0)||(rate.length>0)))&&(year&&((year.length>0)||(parseInt(year)>0)))&&(description&&(description.length>0))&&((imgdata&&(imgdata.length>10))||(selectedfil&&(selectedfil.length>1)))){
     // alert('after converting')      alert may stop  the folwing setting of state
        setReady(true)
        
    }
    else { setReady(false)
      
    }
}

const baseURL="http://localhost:8080/actor/save"
const subhandl=(e)=>{
e.preventDefault()
}
const res=()=>{
    setTog(false)
    // alert('settofalse')
}
const set=()=>{
   
    
//   alert('inside set ready is '+ready)


    if(!ready){
        setTog(true)
    // alert('name'+name)
    // alert('gemre'+gener)
    // alert('year'+year)
    // alert(rate+'year')
    // alert('description'+description)

    // alert('nott readdy')
}

//   alert('ready is '+ready)
   if(ready){alert('ready and '+' name:'+name.length+' gener:'+gener.length+' year:'+year+' desc:'+description.length+' rate:'+rate)}
    if(ready)
   if(name){
    // alert('name exist')
    if(!id){
    
    console.log('pressed')
    Movieservice.MoviewithimageSave(imagdata).then(res=>{
        console.log(res)
        alert('saved '+name)
        navigate('/Home')
    }).catch(error=>console.log.error())
   

   }
   else if(id){
    if(!selectImage){
    Movieservice.MoviePut(id,{name,gener,description, rate,imgdata,year}).then(res=>{
        navigate('/Home')
    })
    }
    else if(selectImage){
        Movieservice.PutMoviewithimageSave(id,imagdata).then(res=>{
            console.log(res)
            navigate('/Home')
        }).catch(err0r=>console.error())
        alert('saved '+name)
    }
    alert('update '+rate)
   }
   } 


}
const ch=event =>{

    

    let fil=event.target.files[0]
    alert(event.target.value)
    const md=new FormData()
    if(fil){
        alert(fil.name)
        setSelectedfil(fil.name)
        setSelectImage(true)
    md.append('fl',fil)
    md.append('mov',[name,gener,rate,description,year])
   setImagdata(md)
   
    }
    if(event.target.files.length==0){
        alert('no file selected')
    }

}
    return<div className='moviecont'>
      {!ready&&tog&& <Formerror resset={res}/>}
   {(u.role=='Admin')&&<div className='mmovie'>
        <div className='movie'>
        <h1>Create Movie</h1>
        <form onSubmit={subhandl}>
<input 
id='name'
type='text'
value={name}
onChange={(e)=>setName(e.target.value)}
></input>
<label htmlFor='name'>Movie Name</label>

<input 
id='gener'
type='text'
value={gener}
onChange={(e)=>setGener(e.target.value)}
></input>
<label htmlFor='gener'>Movie Gener</label>

<br></br>
<input 
id='year'
type='number'

value={year}
onChange={(e)=>setYear(e.target.value)}
></input>
<label htmlFor='year'>Movie Year</label>

<br></br>
<input 
id='rate'
type='text'

value={rate}
onChange={(e)=>{if((!isNaN(e.target.value)&&(parseFloat(e.target.value)<10)))setRate(e.target.value)}}

// onKeyUp={(e)=>{alert(isNaN(e.target.value))}}
 

></input>
<label htmlFor='rate'>Movie Rate</label>
<br></br>
<textarea 
id='description'
type='text'

value={description}
onChange={(e)=>{{setDescription(e.target.value)}}}
/>
<label htmlFor='description'>Movie Description</label>
<input
accept="image/*"
type='file'
name='mp'
onChange={ch
    
}



></input>
        </form>
        <button type='submit' onClick={()=>{set()}} >{''+ready}</button>
    </div>
    </div>}
    {/* <div><Movie id={8} mname={'The Matrix'} change={true}/></div> */}
    </div>

}
export default Createmovie