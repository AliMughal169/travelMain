import React from 'react'
import { Button, Modal } from 'react-bootstrap'
const backendUrl = process.env.REACT_APP_BASE_URL;



function BookedHotelDetails({ show, setShow, hotelDetail, roomData, hotelData, hotelList }) {
    const checkBookedRoom = () => {
        for (let i = 0; i < roomData.length; i++) {

            for (let j = 0; j < hotelData.length; j++) {


                if (roomData[i].hotelId == hotelData[j].hotelId && roomData[i]._id == hotelData[j].roomId && hotelDetail._id == hotelData[j].userId) {
                    return i;
                }
            }
        }

    }
    const checkBookedHotel = () => {
        for (let j = 0; j < hotelData.length; j++) {

            if (hotelDetail._id == hotelData[j].userId) {
                // console.log(j)
                return j;
            }
        }

    }
    const checkHotelList = () => {
        for (let i = 0; i < hotelList.length; i++) {
            for (let j = 0; j < hotelData.length; j++) {
                if (hotelList[i]._id == hotelData[j].hotelId) {
                    return i;
                }
            }
        }

    }

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
                            (checkBookedHotel() != undefined) ? (
                                <div className=' row text-left '>
                                    <div className='col-sm'>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Hotel Name : {hotelList[checkHotelList()].hotelName} </p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Guest Name :{hotelData[checkBookedHotel()].guestName} </p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Check In : {hotelData[checkBookedHotel()].checkIn} </p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Check Out : {hotelData[checkBookedHotel()].checkOut} </p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Booking Date : {hotelData[checkBookedHotel()].bookingDate} </p>
                                        </div>
                                    </div>
                                </div>

                            ) : (
                                <div className='label' >
                                    <p className=' font-weight-bold'>Booking Date : not mached </p>
                                </div>
                            )

                        }


                    </div>
                    <div className='container-fluid'>
                        <h4>Room Detail</h4>
                        {/* {roomData === hotelDetail ? ( */}
                        {
                            (checkBookedRoom() != undefined && checkBookedHotel() != undefined) ? (

                                <div className=' row text-left '>
                                    <div className='col-sm'>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Category:  {roomData[checkBookedRoom()].category}</p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Room Number :  {roomData[checkBookedRoom()].roomNumber}</p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Price :  {roomData[checkBookedRoom()].price}</p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Description :  {roomData[checkBookedRoom()].desc}</p>
                                        </div>
                                        <div className='label' >
                                            <p className=' font-weight-bold'>Is Booked:  {roomData[0].isFull}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='label' >
                                    <p className=' font-weight-bold'>Is Booked:  {roomData[0].isFull}</p>
                                </div>
                            )

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