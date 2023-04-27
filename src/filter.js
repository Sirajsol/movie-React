import React, { useState } from "react";
import './filter.css';
const Filter=()=>{
const cyear=new Date().getFullYear();
    const[year,setYear]=useState(1900)
    const[gener,setGener]=useState('')
    const[rate,setRate]=useState(4.4)


    

    return<div className="wholecont">
   <div className="cont">
        <label htmlFor="gener">Select Gener</label>
<select
id="gener"
>
    <option value="Drama">Drama</option>
    <option value="Action">Action</option>
    <option value="War">War</option>
    <option value="Comedy">comedy</option>
    <option value="Romance">Romance</option>
    
</select>
</div>
<div className="cont">
<label htmlFor="Rate">Select Rate</label>
<select
id="Rate"
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
<select id="year">
   
</select>
</div>
    </div>
}
export default Filter