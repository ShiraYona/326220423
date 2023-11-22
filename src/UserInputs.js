import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { Calendar } from 'primereact/calendar';
 function UserInputs() {
    const [start , setStart]= useState()
    const [flag, setFlag] = useState()
    const [end , setEnd]= useState()
    const navigate=useNavigate()
   const page=()=>{
    navigate("/events",{state:{startDate:start , endDate:end,flag:flag}})
   }
    
    return(
        <>
        {/* <Calendar placeholder="enter start date" dateFormat="yy/mm/dd" onChange={(e) => setStart(e.value)}></Calendar>
        <Calendar placeholder="enter end date" dateFormat="yy/mm/dd" onChange={(e) => setEnd(e.value)} showButtonBar></Calendar> */}
        <input  placeholder="enter start date" type={'date'} onChange={(e)=>setStart(e.target.value)}></input>
        <input placeholder="enter end date" type={"date"} onChange={(e)=>setEnd(e.target.value)}></input>
        show only parashot<input type={"checkbox"} id="cb" defaultChecked={false} onChange={(e=>setFlag(e.isTrusted))}></input>
       <br></br>
        <button onClick={()=>{page()}}>show dates</button>
        </>
    )
    
}
export default UserInputs