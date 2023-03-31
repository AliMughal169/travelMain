import React, { useState } from 'react'
import "./css/form.css"
import axios from 'axios'
import {Button} from 'react-bootstrap'
import moment from 'moment'
import TravelLogo from '../assets/img/travelLogo.png'
import { Link } from 'react-router-dom'

const backendUrl = process.env.REACT_APP_BASE_URL;

function Flight() {
    const [flights,setFlights]=useState([]);
    var [message,setmessage]=useState('')
    const searchFlight=async (event)=>{
        event.preventDefault();
        console.log(backendUrl)
        const data=new FormData(event.target)
        const response=await axios.get(`${backendUrl}v1/front/flights/searchflight?departureCity=${data.get("departureCity")}&arrivalCity=${data.get("arrivalCity")}&departureDate=${data.get("departureDate")}&category=${data.get("category")}`)
        .then((res)=>
        {
            if (res.data.status==false)
            {
                setFlights([])
                setmessage("Sorry No Such Flight Is Available")
                console.log(message)
            }
            else
            {
                setmessage('')
                console.log(res.data)
                setFlights(res.data.final_res)
            }
            
        })
    }
  return (
    <div className='main'>
        <div className="mainwrapper container">
     <div className="form container-fluid" >
         <h1 className="title">Search Flight</h1>

         <form onSubmit={(e)=>searchFlight(e)} className="myform d-flex">
             <div className="control-from">
                 <label >Leaving From *</label>
                 <input name='departureCity' type="text" id="leaving"  required/>
             </div>

             <div className="control-from">
                 <label >Gonig to *</label>
                 <input type="text" name='arrivalCity' placeholder='Gonig to' id="going"  required/>
             </div>

             <div className="control-from w-25">
                 <label >Departure *</label>
                 <input type="date" defaultValue={moment().format('YYYY-MM-DD') } name='departureDate' id="emailaddress"  required/>
             </div>


             <div className="control-from w-25" >
                 <label >Category</label>
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
    {
        
    flights?.map((data,index)=>{ 
        return(
            <div key={index} className=" my-3 container-fluid  rounded-4 shadow-lg d-flex flex-column justify-content-center align-content-center">
                <div className=' container-fluid d-flex align-items-center '>
                    <div className='container-fluid m-2 d-flex justify-content-start align-item-center'>
                        <img className='logo-img img-responsive' height={"70px"} src={TravelLogo} alt=""/>
                        <h3 className=' fw-bold  d-flex align-items-center'> <b >{data.flightNumber} {data.airlineName} </b></h3>
                    </div>
                    <div className='container-fluid d-flex justify-content-end  align-items-center'>
                    <h3 className=' fw-bold m-0  d-flex align-items-center '> <b >PKR  {data.economyPrice} </b></h3>
                   <Link to={"/user/bookflight"} state={{flightDetail: data}}  > <Button style={{background:" rgba(87, 50, 173, 1)"}}   className=' rounded-pill my-0' > Buy</Button></Link>

                    </div>
                </div>
                <div className=' px-5 container-fluid d-flex my-2 justify-content-start text-white align-content-center' style={{background:" rgba(87, 50, 173, 1)"}}>
                    <h5 className=' fw-bold my-1'>Departure : </h5>
                    <h5 className=' mx-1 my-1'> {moment(data.departureDateTime).format('DD-MMM-YYYY')}</h5>
                    <h5 className=' mx-1 my-1'>| Economy</h5>
                    
                </div>

                <div className=' px-5  py-2 d-flex container-fluid'>
                    <div className=' d-flex container-fluid  flex-column justify-content-center align-items-center '>
                        <h4 className=' fw-bold'>{moment(data.departureDateTime).format('hh:mma')}</h4>
                        <h4 className=' fw-bold'>{data.departureCity}</h4>
                        
                    </div>
                    
                    <div className=' d-flex  container-fluid flex-column justify-content-center align-items-center'>
                    <p className=' my-0'> {moment(data.arrivalDateTime).diff(data.departureDateTime,'hours')}{moment(data.arrivalDateTime).diff(data.departureDateTime,'hours')>1?'hrs':'hr'}</p> 
                    <p className=' '>_________________________</p>
                    </div>
                    
                    <div className=' d-flex container-fluid  flex-column justify-content-center align-items-center '>
                        <h4 className=' fw-bold'>{moment(data.arrivalDateTime).format('hh:mma')}</h4>
                        <h4 className=' fw-bold'>{data.arrivalCity}</h4>
                        
                    </div>
                    
                    
                </div>
                
            </div>
            )
        })
        
    }
    {message!=''?<div className=' py-5 container-fluid d-flex justify-content-center align-items-center'>
            <b>{message}</b>
        </div>:''}
    </div>
     </div>
 </div>
    
    </div>
    
  )
}

export default Flight