import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import { useEffect, useState } from "react";
const backendUrl = process.env.REACT_APP_BASE_URL;

function checkBooked() {

}

function BookedHotelDetails({ show, setShow, hotelDetail, roomData, hotelData }) {
    // console.log(hotelDetail._id)
    // console.log(roomData)
    // console.log(hotelData.userId)

    return (
        <>
            <Modal

                size='lg'
                className="  modal-primary"
                show={show}
                onHide={() => setShow(false)}
            >
                <Modal.Header className="  justify-content-center">
                    <div className="modal-profile">
                        <i className="nc-icon nc-bulb-63"></i>
                    </div>


                </Modal.Header>
                <Modal.Body className="text-center">
                    <div className='container-fluid'>
                        <h4>Hotel Details</h4>
                        {
                            hotelData.map((data, index) => {
                                return (
                                    <div className=' row text-left '>
                                        <div className='col-sm'>
                                            <div className='label' >
                                                <p className=' font-weight-bold'>Hotel Name : {hotelDetail.firstName} </p>
                                            </div>
                                            <div className='label' >
                                                <p className=' font-weight-bold'>Guest Name :{data.guestName} </p>
                                            </div>
                                            <div className='label' >
                                                <p className=' font-weight-bold'>Check In : {data.checkIn} </p>
                                            </div>
                                            <div className='label' >
                                                <p className=' font-weight-bold'>Check Out : {data.checkOut} </p>
                                            </div>
                                            <div className='label' >
                                                <p className=' font-weight-bold'>Booking Date : {data.bookingDate} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className='container-fluid'>
                        <h4>Room Detail</h4>
                        {/* {roomData === hotelDetail ? ( */}
                        {

                            <div className=' row text-left '>
                                <div className='col-sm'>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Category:  {roomData[0].category}</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Room Number :  {roomData[0].roomNumber}</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Price :  {roomData[0].price}</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Description :  {roomData[0].desc}</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Is Booked:  {roomData[0].isFull}</p>
                                    </div>
                                </div>
                            </div>

                        }



                        {/* ) : ( */}
                        {/* <div className=' row text-left '>
                                <div className='col-sm'>

                                    <div className='label' >
                                        <p className=' font-weight-bold'>No rooms detail</p>

                                    </div>
                                </div>
                            </div> */}
                        {/* )} */}

                        {/* <div className=' col-sm'>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Airline :  {hotelData(guestDetail.flightId, "airlineName")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Arrival City :  {hotelData(guestDetail.flightId, "arrivalCity")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Arrival Date :  {hotelData(guestDetail.flightId, "arrivalDate")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Ticket Type :  {guestDetail.ticketType}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Price :  {guestDetail.price}</p>
                                </div>

                            </div> */}



                    </div>

                </Modal.Body>
                <div className="modal-footer">
                    <Button
                        className="btn-simple"
                        type="button"
                        variant="link"
                        onClick={() => setShow(false)}
                    >
                        Back
                    </Button>
                    <Button
                        className="btn-simple"
                        type="button"
                        variant="link"
                        onClick={() => setShow(false)}
                    >
                        Close
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default BookedHotelDetails