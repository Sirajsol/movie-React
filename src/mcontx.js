import React, { useEffect } from "react";
import { useContext ,useState} from "react";
import { json } from "react-router-dom";
import data from "./data";
import StudentService from "./studentservice";
const Contextap=React.createContext();
const AppProvider=({children})=>{
    const [searchage,setSearchage]=useState('siraj')
 const [dd,setDd]=useState([])
    const getl=()=>{
        let m=JSON.parse(localStorage.getItem('names'))
        if(m)return m
         else return data
         
        //  return data
    }
//    alert('initating insid context ')
     let nnames=getl()
    //  localStorage.removeItem('names')
    if(!nnames)
{
alert('not names')
}
else{
    // alert('from insid context nnames of'+nnames.length)
}
const fet=()=>{
    StudentService().then((response) =>{
          setDd(response.data)
               
            })
            .catch(error => console.log('error'))
}


    const [names,setNames]=useState(getl())
    useEffect(()=>{
        StudentService().then((response) =>{
            setNames(response.data)
           
        })
        .catch(error => console.log('error'))
        // fet()
        },[])
    const search=()=>{
       // const dd=fet();
      //  alert('searchage is '+searchage+' of type '+typeof(searchage)+(searchage==(names[0].age)))
        // let searched=getl().filter((item) => (''+item.name).startsWith(searchage) )
        //alert('type of searched '+typeof(searched))
        // console.log('type of searched '+searched)
       // alert('serchage length '+searchage.length)

       let searched=dd.filter((item) => (''+item.firstName).startsWith(searchage) )
        if(searched.length>0){
            // alert(' find searched length '+typeof(searched)+' of age '+searched[0].firstName)
            setNames(searched)
        //    alert(searched.length)
           
        }
else{ 
    setNames([])
   // alert('not found')
}
// if(searchage.length==0){setNames(getl())}
if(searchage.length==0){
//  setNames(dd)
 setSearchage('')
}
    }
    useEffect(()=>{
         search()
    }
    ,[searchage])

    //alert('from insid context  names of '+names.length+'items nnames of '+nnames.length+' items')
    const [toggle,setToggle]=useState(false)
    useEffect(()=>{
         nnames=getl()
       // alert('call useeffect'+names.length)
    //    localStorage.setItem('names',JSON.stringify(names))
    },[names])

    useEffect(()=>{
        fet()
     
   },[])

    //if(localStorage.getItem('names'))
    // alert('exist')
    // setNames(JSON.parse(localStorage.getItem('names')))
return(
    <Contextap.Provider 
    value={{
        getl,
        setSearchage,
        names,
        toggle,
        setNames,
        setToggle,}
    }
    >
        {children}
    </Contextap.Provider>
)
}
export const Cont=()=>{
    return useContext(Contextap)
}
export{AppProvider,Contextap}