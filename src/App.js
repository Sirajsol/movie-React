import logo from './logo.svg';
import{BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import './App.css';
import './index.css'
import Nav from './nav';
import Home from './home';
import About from './about';
import Card from './card';
import Create from './create';
import { Cont } from './mcontx';
import SingleCard from './singlecard';
import Nav1 from './nav1';
import Createmovie from './createmovie';
import CreateActor from './createactor';
import AllMovies from './allmovies';
import AddActorToMovie from './addactorstomovie'
import MoviesForActor from './moviesforactor';
import SingleMovie from './singlemovie'
import Rate from './rate'
import Login from './login/login';
import Filter from './filter';
function App() {
  let ao={id:1,
    name:'sirajjj',
    sur:{
      lo:0
    }
  
  }
  console.log(ao.sur[0])
  return (
    
<Router>
<Nav1/>
{/* <div className='men'>
  <a href=''>Home</a>
  <a href=''>Content</a>
  <a href=''>Create</a>
  <a href=''>About</a>
</div> */}

  <Routes>
  <Route path='/' exact element={<Login/>}/>
    <Route path='/Home' exact element={<AllMovies/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Cards/:para' element={<Card/>}/>
    <Route path='/SingleCard/:id' element={<SingleCard/>}/>
    <Route path='/Create' element={<Create/>}/>
    <Route path='/CreateM' element={<Createmovie/>}/>
    <Route path='/CreateM/:id' element={<Createmovie/>}/>
    <Route path='/CreateA' element={<CreateActor/>}/>
    <Route path='/Add' element={<AddActorToMovie/>}/>
    <Route path='/Actor/:id/:name' element={<MoviesForActor/>}/>
    <Route path='/Movie/:id/:name' element={<SingleMovie/>}/>SingleMovie
   
  </Routes>
  {/* <div className='ddiv1'>  <img src="./images/mv/city.jpg" alt="" /></div> */}
  <div><Rate/></div>
  
    {/* <div className='div1'>
      <div className='ddiv1'></div>
    </div> */}
    {/* <AllMovies/> */}
    </Router>
    
  );
}

export default App;
