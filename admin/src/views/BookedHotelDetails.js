import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import axios from "axios";
import { useEffect, useState } from "react";
const backendUrl = process.env.REACT_APP_BASE_URL;

function BookedHotelDetails({ show, setShow, hotelDetail }) {
    console.log(hotelDetail)

    const [roomData, setroomData] = useState([]);

    useEffect(() => {
        async function fetchRoomData() {
            const response = await axios.get(`${backendUrl}v1/admin/rooms/allrooms`).then((res) => setroomData(res.data.result));
            console.log(roomData._id)
        }

        fetchRoomData()


    }, [])



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
                        {/* <div className=' row text-left '>
                            <div className='col-sm'>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Passenger Name :  {roomDetail(guestDetail.passengerId, "firstName")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Passport Number :  {roomDetail(guestDetail.passengerId, "passportNumber")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Nationality :  {roomDetail(guestDetail.passengerId, "nationality")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Age :  {roomDetail(guestDetail.passengerId, "age")}</p>
                                </div>

                            </div>
                            <div className=' col-sm'>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Father Name :  {roomDetail(guestDetail.passengerId, "lastName")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Passport Expiry :  {roomDetail(guestDetail.passengerId, "passportExpiry")}</p>
                                </div>
                                <div className='label' >
                                    <p className=' font-weight-bold'>Gender :  {roomDetail(guestDetail.passengerId, "gender")}</p>
                                </div>

                            </div>
                        </div> */}


                    </div>
                    <div className='container-fluid'>
                        <h4>Room Detail</h4>
                        {roomData._id === hotelDetail ? (
                            <div className=' row text-left '>
                                <div className='col-sm'>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Category:  { }</p>
                                    </div>
                                    {/* <div className='label' >
                                        <p className=' font-weight-bold'>Room Number :  { }</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Price :  { }</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Description :  { }</p>
                                    </div>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Is Booked:  { }</p>
                                    </div> */}


                                </div>
                            </div>
                        ) : (
                            <div className=' row text-left '>
                                <div className='col-sm'>
                                    <div className='label' >
                                        <p className=' font-weight-bold'>Category:  {hotelDetail}</p>
                                    </div>
                                </div>
                            </div>
                        )}

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