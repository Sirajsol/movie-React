import React from "react";
import { Cont } from "./mcontx";
import Card from "./card";
import { useParams } from "react-router-dom";
const SingleCard=()=>{
    const{id}=useParams()
const {names}=Cont()

  const n=names.filter((name) => name.id==id)

    return<div className="close">
        {/* <div>name:{n.name}</div> */}
       
    <Card {...n[0]}/>
    </div>
}
export default SingleCard