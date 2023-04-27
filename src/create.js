import React, { useContext, useEffect, useState } from "react";
import { Cont } from "./mcontx";
import data from "./data";

const Create=()=>{
    // const{data}=Cont()
    
    const {getl}=Cont()
    let{names,setNames}=Cont()
  
    //  alert('starting create names '+names.length)
    // const [names,setNames]=useState(getl())
    const m=getl()
   // alert('names length is'+names.length+names[1].name)
    const [name,setName]=useState('')
    const [age,setAge]=useState(0)
    const submithandl = (e) =>{
        e.preventDefault();
    //    localStorage.clear()
       
    }
    // useEffect(()=>{
    //     // const{names,setNames}=Cont()  
    // },[])
    const send=(e)=>{
        alert('hi'+names.length)
        const nid=names.length+1
        
        const newItem={id:nid,name:name,age:age}
        //alert('names was contain' +names.length)
        // setNames([...names,newItem])
        const n=[...names,newItem]
        // alert('n contain' +n.length)
        alert('n is '+n.length+' items')
        alert('names was '+names.length+' items')
      setNames(prev=>[...prev,newItem])
      /* even thought names is a state value in mcontext but it is not here
      so setName(names) will update the state value in mcontext but names here will keep its old value
      and localStorage.set('names',JSON.stringify(names)) will store the old value of names
      that is whay we  write names=[...names,newItem] to update the local value of names before 
      storing it in local storage

       */
      names=[...names,newItem]
       alert('names now '+names.length+' items')

    //    localStorage.setItem('names',JSON.stringify([...names,newItem]))

        // alert('names now contain' +names.length)
         localStorage.setItem('names',JSON.stringify(names))
        alert('item added'+name+age+' and local now is '+getl().length+' while names is '+names.length)
    }
    
    return<>
    <form onSubmit={submithandl}>
        <div className="form">
        <div className="formrow">
            <input type="text"
             id="name"
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
             ></input>
        <label htmlFor="name">enter your name</label>
            </div>
        <div className="formrow">
        <input type="text"
         id="age"
         
             value={age}
             onChange={(e)=>{setAge(e.target.value)}}
         ></input>
        <label htmlFor="age">enter your age</label>
        </div>
        
        </div>
        <button onClick={(e)=>{send(e)}}>submit</button>
    </form>
    <div className="form">{names.map((item)=>{return <span>{item.name}</span>})}<div>{names.length}</div></div>
    </>
}
export default Create