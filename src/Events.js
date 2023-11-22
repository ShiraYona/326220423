
import { useEffect, useState } from "react"
import { useLocation  } from "react-router-dom"
import { Fieldset } from 'primereact/fieldset';

 function Events() {
    const [array, setArray] = useState()
    const location = useLocation()
    const start = location.state.startDate
    const end = location.state.endDate
    const flag = location.state.flag
   const getEvents= ()=>{
    fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
    .then(res =>res.json())
    .then(data =>{console.log(data)
         setArray(data)})
   }
   useEffect(()=>{getEvents()},[])

 return(<>
{start && end &&!flag && array && array.map((item, index)=>{return  <Fieldset legend={item.title} key ={index}><div>description :  {item.description} </div><div>date: {item.start}</div></Fieldset>})}
 {start && end &&flag && array && array.map((item, index)=>{return item.className==="parashat" && <Fieldset legend={item.title} key ={index}><div>description :  {item.description} </div><div>date: {item.start}</div></Fieldset>})}
 </>)   
}
export default Events