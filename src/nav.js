import React from 'react'
import './index.css'
import{Link} from 'react-router-dom'
import { Cont } from './mcontx'
const Nav=()=>{
    const {toggle,setToggle}=Cont()
// const para=5
    return(
        <div className='inn'>
    <div className={toggle?'container':'container'}>
        <div className='firstt'>
        <Link to={'/Home'} className='lnk'><div className='element'>Home</div></Link>
        </div>
        <div className='secondd'><Link to={'/About'} className='lnk'><div className='element'>About</div></Link></div>
        <div className='thirdd' ><Link to={`/Cards/:para`} className='lnk'><div className='element'>Card</div></Link></div>
        <div className='thirdd' ><Link to={`/Create`} className='lnk'><div className='element'>Create</div></Link></div>
    </div>
    <button onClick={()=>{setToggle(!toggle)
    // alert(toggle)
    }}></button>
    </div>
    )
}
export default Nav