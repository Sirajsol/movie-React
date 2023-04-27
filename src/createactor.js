import React, { useState } from 'react'
//    import Movieservice form './movieservice'
import ActorService from './actorservice'
import './actor.css'
function CreateActor() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [actdata,setActdata]=useState(null)
    const subhndl = (e) => {
        e.preventDefaulte()

    }
    
    const save = () => {
        alert('pressed')
  
        ActorService.ActorwithimageSave(actdata).then(res=>{
            console.log(res)}).catch(err0r=>console.error())
        alert('saved '+name)
    }
const ch=event=>{
    const frm=new FormData()
    let fl=event.target.files[0]
    frm.append('fl',fl)
    frm.append('ast',[name,age])
setActdata(frm)
}

    return <div className='actorcont'>
        <div className='aactor'>
        <div className='actor'>
            <h1>Create Actor</h1>
        <form>
<input
id='name'
type='text'
value={name}
onChange={(e)=>{setName(e.target.value)}}

></input>
<label htmlFor='age'>Name</label><br></br>
<input
id='age'
type='text'
value={age}
onChange={(e)=>{setAge(e.target.value)}}

></input>
<label htmlFor='age'>Age</label>
<br></br>
<input
type='file'
onChange={ch}
></input>
        </form>
        <button type='submit' onClick={()=>{save()}}>save</button>
    </div>
    </div>
    </div>
}
export default CreateActor