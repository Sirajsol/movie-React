import React from 'react'
import './index.css'
import{Link} from 'react-router-dom'
import { Cont } from './mcontx'
const Sidenav=()=>{
    const {toggle,setToggle}=Cont()
// const para=5
    return(
        <div className='left'>
    <div className={toggle?'container':'sidecontainer'}>
        <div className='first'>
        <Link to={'/Home'} className='lnk'><div className='element'>Home</div></Link>
        </div>
        <div className='second'><Link to={'/About'} className='lnk'><div className='element'>About</div></Link></div>
        <div className='third' ><Link to={`/Cards/:para`} className='lnk'><div className='element'>Card</div></Link></div>
        <div className='third' ><Link to={`/Create`} className='lnk'><div className='element'>Create</div></Link></div>
    </div>
    <button onClick={()=>{setToggle(!toggle)
    // alert(toggle)
    }}></button>
    </div>
    )
}
export default Sidenav