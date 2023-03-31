import moment from 'moment';
import React from 'react'
import { Button, FormSelect } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import { Input, InputGroup, Label } from 'reactstrap';
import TravelLogo from '../assets/img/travelLogo.png'

function BookFlight(props) {
  const location=useLocation();
  console.log(location)
  const data=location.state.flightDetail
  console.log(location.state.flightDetail)
  const bookTicket=(e)=>{
    //e.preventdefault()
    const formData=new FormData(e.target);

    console.log(formData.get("category"))
  }
  return (
    <div className=' container d-flex flex-column justify-content-center  '>
      <div  className=" my-3 container-fluid  rounded-4 shadow-lg d-flex flex-column justify-content-center align-content-center">
                <div className=' container-fluid d-flex align-items-center '>
                    <div className='container-fluid m-2 d-flex justify-content-start align-item-center'>
                        <img className='logo-img img-responsive' height={"70px"} src={TravelLogo} alt=""/>
                        <h3 className=' fw-bold  d-flex align-items-center'> <b >{data.flightNumber} {data.airlineName} </b></h3>
                    </div>
                    <div className='container-fluid d-flex justify-content-end  align-items-center'>
                    <h3 className=' fw-bold m-0  d-flex align-items-center '> <b >PKR  {data.economyPrice} </b></h3>

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
            <form className=' form my-3 container-fluid  rounded-4 shadow-lg d-flex flex-column justify-content-center align-content-center' >
              <div className=' my-3 d-flex justify-content-center align-items-center'>
                <p className=' fw-bold h2'> Traveller's Detail </p>
              </div>
              <div className=' my-2 d-flex form-group  justify-content-around align-items-center'>
                <div className='w-25'>
                  <Label defaultValue={"First Name"}>First Name</Label>
                  <Input type='text' name='firstName' placeholder='First Name' required ></Input>
                </div>
                <div className='w-25'>
                  <Label defaultValue={"First Name"}>Last Name</Label>
                  <Input type='text' name='lastName' placeholder='Last Name' required ></Input>
                </div>
              </div>
              <div className=' my-2 d-flex  justify-content-around align-items-center'>
                <div className='w-25'>
                  <Label defaultValue={"First Name"}>Passport Number</Label>
                  <Input type='text' name='passportNumber' placeholder='ALU23438C etc' required ></Input>
                </div>
                <div className=' w-25'>
                  <Label defaultValue={""}>Passport Expiry</Label>
                  <Input type='date' name='passportExpiry'  placeholder='Passport Expiry' defaultValue={moment().format('YYYY-MM-DD')} required></Input>
                </div>
              </div>
              <div className=' my-2 d-flex  justify-content-around align-items-center'>
                <div className='w-25'>
                  <Label defaultValue={"First Name"}>Nationality</Label>
                  <Input type='text' name='nationality'  placeholder='Nationality' required></Input>
                </div>
                <div className='  w-25 '>
                  <Label defaultValue={"First Name"}>Gender</Label><br></br>
                  <Input type='select' name='gender' className=' ' >
                    <option  value="">Male</option>
                    <option value="">Female</option>
                    
                  </Input>
                </div>
              </div>
              <div className=' my-2 d-flex justify-content-around align-items-center'>
                <div className='w-25'>
                  <Label defaultValue={""}>Age</Label>
                  <Input placeholder='0' name='age' type='number' required></Input>
                </div>
                <div className='  w-25 '>
                  <Label defaultValue={"First Name"}>Category</Label><br></br>
                  <Input type='select' name='category' disabled={data.economyCapacity<1?true:false} className=' '  >
                    {data.economyCapacity>1?<option  value="">Economy</option>:""}
                    {data.businessCapacity>1?<option  value="">Buisness</option>:""}
                    
                  </Input>
                </div>
              </div>
              <div className=' d-flex justify-content-center my-3 '>
                <Button className=' rounded-4' onClick={bookTicket} >Book</Button>
              </div>
            </form>
    </div>
  )
}

export default BookFlight