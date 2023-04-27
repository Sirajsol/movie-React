import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Moviie from './movie'
import Movieservice, {MovieSave} from './movieservice'
import './singlemovie.css'
import { useParams } from 'react-router-dom'
const SingleMovie=()=>{
    const[showConfirm,setShowConfirm]=useState(false)
    const{id,name}=useParams()
    const navigate=useNavigate()
    const u =JSON.parse(localStorage.getItem('user'))
     return<div > 
        {/* <div className='singlecont'> */}
    
        {/* <div className='tryyy'>
   
    </div> */}
   
    <Moviie id={id} mname={name} change={true}/>
  {showConfirm&&<div className='deleteconfirm'>
    <h3>Are you sure ?</h3>
    <div className='buttoncontainer'>
<button onClick={()=>{setShowConfirm(false)
Movieservice.PreRemove(id)
// navigate('/Home')

}}>YES</button>
<button onClick={()=>{setShowConfirm(false)}}>NO</button>
    </div>
  </div>}
  {(u&&u.role=='Admin')&&<div className='deletecontainer'>
    <button  onClick={()=>{setShowConfirm(true)}}>Delete</button>
  <div className='linkcontaner'><Link to ={`/CreateM/${id}` } className='link'>Edit</Link></div>
 </div>


  }
 
    </div>
}
export default SingleMovie