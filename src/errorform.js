import React, { useEffect, useState } from "react";
import './errorform.css'
const Formerror=({resset})=>{
    const [istime,setIstime]=useState(true)
    
    const [ph,setPh]=useState('')
useEffect(()=>{
setTimeout(() => {
    setIstime(true)
   
}, 1000);



},[])

// useEffect(()=>{
   
//        if(istime)
//     setTimeout(() => {
//         // alert(istime)
//       setIstime(false)
//     }, 3000);

   
    
//     },[istime])

return istime && <div className="formerr">
    <h1>Error </h1>
<h3>data is not completed </h3>
<br></br>
<button onClick={()=>{resset()}}>CLOSE</button>
<h4>please complete data then click save</h4>
</div> 

}
export default Formerror