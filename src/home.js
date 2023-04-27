import {React,useState} from "react";
import { Cont } from "./mcontx";
import Card from "./card";
import {Link} from 'react-router-dom'
import Nav from "./nav";
import Sidenav from "./sidenav"
const Home=()=>{
    let  {names,setSearchage}=Cont()
    // if(localStorage.getItem('names'))
    // names=JSON.parse(localStorage.getItem('names'))
    // alert('inside home names of '+names.length)
    let [cl,setCl]=useState('')
    return(
        <div className="ssections">
        <div className="lleft">

<p>
    in this site we are rating movies
</p>

        {/* <div className="cardcontainer" style={{minWidth:100*(names.length+1)+50}}> */}
        <div className="cardcontainer "  >
        {names && names.map((name)=>{return (
            <div className="containhomee scal-up-centre">
                {/* <div className={cl} onMouseEnter={ ()=>{setCl('containhome')} } onMouseLeave={ ()=>{setCl('')} }> */}
        <Card key={name.id}  {...name}/>
        <Link to={'/SingleCard/'+name.id} className='lnk'>find{name.id}</Link>
        </div>
        )})}
       
       </div>
       <div>
        <input type="text"
        onChange={(e)=>{setSearchage(e.target.value)}}
        ></input>
       </div>
       {/* <div className="form">{names.map((item)=>{return <span>{item.name}</span>})}<div>{names.length}</div></div> */}
       {/* <div className="form">{names.map((item)=>{return <span>{item.firstName}</span>})}<div>{names.length}</div></div> */}

       </div>
       <div className="cardcontainer">
{/* <Sidenav/> */}
<div className="num">1</div>
<div className="num">2</div>
<div className="num">3</div>
<div className="num">4</div>
<div className="num">5</div>
       </div>
       </div>
    )
}
export  default Home