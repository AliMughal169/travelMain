import React, { useState } from 'react'
import "./css/form.css"
import axios from 'axios'
import {Button} from 'react-bootstrap'
const backendUrl = process.env.REACT_APP_BASE_URL;
function Flight() {
    const [flights,setFlights]=useState([]);
    const searchFlight=async (event)=>{
        event.preventDefault();
        console.log(backendUrl)
        const data=new FormData(event.target)
        const response=await axios.get(`http://localhost:8081/v1/front/flights/searchflight?departureCity=${data.get("departureCity")}&arrivalCity=${data.get("arrivalCity")}&departureDate=${data.get("departureDate")}&category=${data.get("category")}`).then((res)=>setFlights(res.data.result))
    }
  return (
    <div className='main'>
        <div className="mainwrapper container">
     <div className="form container-fluid" >
         <h1 className="title">Search Flight</h1>

         <form onSubmit={(e)=>searchFlight(e)} className="myform d-flex">
             <div className="control-from">
                 <label for="firstname">Leaving From *</label>
                 <input name='departureCity' type="text" id="leaving"  required/>
             </div>

             <div className="control-from">
                 <label for="lastname">Gonig to *</label>
                 <input type="text" name='arrivalCity' placeholder='Gonig to' id="going"  required/>
             </div>

             <div className="control-from w-25">
                 <label for="emailaddress">Departure *</label>
                 <input type="date" name='departureDate' id="emailaddress"  required/>
             </div>


             <div className="control-from w-25" >
                 <label for="businesscategory">Category</label>
                 <select name='category' defaultValue="Economy">
                    <option value="Economy">Economy</option>
                    <option value="Buisness">Buisness</option>
                    
                 </select>
             </div>

             {/* <div className="control-from">
                 <label for="businesscategory">Category</label>
                 <select defaultValue="Economy">
                    <option value="Economy">Economy</option>
                    <option value="Buisness">Buisness</option>
                    
                 </select>
             </div> */}

             <div className="button">
                 <button id="register" type='submit' >Search</button>
             </div>

         </form>
         <div className=' container '>
    {flights?.map((data,index)=>{ 
            return(
            <div key={index} className=" my-3 container-fluid  rounded shadow-lg d-flex justify-content-center align-content-center">
                
                <div className='  py-2 container-fluid'>
                    <div className=' d-flex '>
                        <div className=' p-0 container-fluid d-flex justify-content-start'>
                        <b>Airline Name  : </b><p> {data.airlineName}</p>        
                        </div>
                        <div className=' d-flex  container-fluid'>
                        <b>Flight Number  : </b><p>{data.flightNumber}</p>        
                        </div>

                    
                        
                    </div>
                    <div className=' d-flex'>
                    <b>Email :  </b><p> {data.email}</p>    
                    </div>
                    
                    <div className=' d-flex'>
                    <b>Message : </b> <p>{data.message}</p>    
                    </div>
                    
                    
                </div>
                <div className='  d-flex flex-column justify-content-center    align-content-center  '>
                <Button variant='success' className=' my-1' > Buy</Button>


                </div>
            </div>
            )
        })
    }
    </div>
     </div>
 </div>
    
    </div>
    
  )
}

export default Flight