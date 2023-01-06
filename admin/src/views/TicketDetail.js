import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function TicketDetail({show ,setShow,flightData,ticketDetail,passData}) {
  return (
    <>
        <Modal
          
          size='lg'
          className="  modal-primary"
          show={show}
          onHide={() => setShowModal(false)}
        >
          <Modal.Header className="  justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-bulb-63"></i>
            </div>
            
            
          </Modal.Header>
          <Modal.Body className="text-center">
          <div className='container-fluid'>
              <h4>passenger Details</h4>
              <div className=' row text-left '>
                <div className='col-sm'>
                    <div className='label' >
                      <p className=' font-weight-bold'>Passenger Name :  {passData(ticketDetail.passengerId,"firstName")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Passport Number :  {passData(ticketDetail.passengerId,"passportNumber")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Nationality :  {passData(ticketDetail.passengerId,"nationality")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Age :  {passData(ticketDetail.passengerId,"age")}</p>
                    </div>
                    
                </div>
                <div className=' col-sm'>
                <div className='label' >
                      <p className=' font-weight-bold'>Father Name :  {passData(ticketDetail.passengerId,"lastName")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Passport Expiry :  {passData(ticketDetail.passengerId,"passportExpiry")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Gender :  {passData(ticketDetail.passengerId,"gender")}</p>
                    </div>
                    
                </div>
              </div>
              
              
          </div>
          <div className='container-fluid'>
              <h4>Ticket Detail</h4>
              <div className=' row text-left '>
                <div className='col-sm'>
                    <div className='label' >
                      <p className=' font-weight-bold'>Passenger Name :  {flightData(ticketDetail.flightId,"flightNumber")}</p>
                    </div>
                    <div className='label' >
                    <p className=' font-weight-bold'>Departure City :  {flightData(ticketDetail.flightId,"departureCity")}</p>
                    </div>
                   <div className='label' >
                    <p className=' font-weight-bold'>Departure Date :  {flightData(ticketDetail.flightId,"departureDate")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Ticket Class :  {ticketDetail.class}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Max Kg:  {ticketDetail.maxKg}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Seat Number :  {ticketDetail.seatNumber}</p>
                    </div>
                    
                    
                </div>
                <div className=' col-sm'>
                <div className='label' >
                <p className=' font-weight-bold'>Airline :  {flightData(ticketDetail.flightId,"airlineName")}</p>
                    </div>
                    <div className='label' >
                    <p className=' font-weight-bold'>Arrival City :  {flightData(ticketDetail.flightId,"arrivalCity")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Arrival Date :  {flightData(ticketDetail.flightId,"arrivalDate")}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Ticket Type :  {ticketDetail.ticketType}</p>
                    </div>
                    <div className='label' >
                      <p className=' font-weight-bold'>Price :  {ticketDetail.price}</p>
                    </div>
                    
                </div>
              </div>
              
              
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

export default TicketDetail