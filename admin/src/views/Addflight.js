import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const backendUrl = process.env.REACT_APP_BASE_URL;
function Addflight({ show, setShow, data, setEdit }) {
  console.log(data._id)
  let depDateTime = new Date(data.departureDateTime)

  var postData = {
    _id:data._id,
    airlineName: "",
    arrivalCity: "",
    arrivalDate: "",
    arrivalTime: "",
    departureTime: "",
    businessCapacity: 0,
    businessPrice: 0,
    departureCity: ",",
    departureDate: "",
    economyCapacity: 0,
    economyPrice: 0,
    flightNumber: "",
    isFull: false,
    totalCapacity: 0
  }
  const handleChange = (event) => {
    console.log(postData)
    postData[event.target.name] = event.target.value
  }
  let date = new Date(data.departureDateTime)
  console.log(date.getHours() + ":" + date.getMinutes())
  const [buttonText, setButtonText] = useState('Add Flight')
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (data) {
      setButtonText("Save changes")

    }
  })
  const addFlight = async () => {
    console.log(postData._id)
    if (buttonText == "Save changes") {
      console.log(buttonText)
    
      const res= await axios.put(`${backendUrl}v1/admin/flights/updateflight?_id=${postData._id}`,{
        airlineName: postData.airlineName,
        arrivalCity: postData.arrivalCity,
        arrivalDateTime: postData.arrivalDate + "T" + postData.arrivalTime,
        businessCapacity: postData.businessCapacity,
        businessPrice: postData.businessPrice,
        departureCity: postData.departureCity,
        departureDateTime: postData.departureDate + "T" + postData.departureTime,
        economyCapacity: postData.economyCapacity,
        economyPrice: postData.economyPrice,
        flightNumber: postData.flightNumber,
        isFull: postData.isFull ? true : false,
        totalCapacity: postData.totalCapacity
      }).then((res) => console.log(res))
    }
    else {
      const response = await axios.post(`${backendUrl}v1/admin/flights/addflight`,
        {
          airlineName: postData.airlineName,
          arrivalCity: postData.arrivalCity,
          arrivalDateTime: postData.arrivalDate + "T" + postData.arrivalTime,
          businessCapacity: postData.businessCapacity,
          businessPrice: postData.businessPrice,
          departureCity: postData.departureCity,
          departureDateTime: postData.departureDate + "T" + postData.departureTime,
          economyCapacity: postData.economyCapacity,
          economyPrice: postData.economyPrice,
          flightNumber: postData.flightNumber,
          isFull: postData.isFull ? true : false,
          totalCapacity: postData.totalCapacity
        }).then((res) => console.log(res))
    }
    setEdit('')

  }
  return (
    <>

      <Modal show={show} size="lg" onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Add New Flight</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className=' d-lg-flex  ' >
            <Container className=' p-0 mx-2  '>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Flight Number</Form.Label>
                <Form.Control
                  size='lg'
                  type="text"
                  name='flightNumber'
                  placeholder="name@example.com"
                  defaultValue={data ? data.flightNumber : ''}
                  onChange={handleChange}
                  autoFocus
                />

              </Form.Group>
              <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                <Form.Label>Departure City</Form.Label>
                <Form.Control
                  size='lg'

                  onChange={handleChange}
                  type="text"
                  name='departureCity'
                  defaultValue={data ? data.departureCity : ''}
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  size='lg'
                  onChange={handleChange}
                  name='departureDate'
                  defaultValue={data ? data.departureDateTime.split('T', 1) : ''}
                  autoFocus
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Departure Time</Form.Label>
                <Form.Control
                  type="time"
                  size='lg'
                  onChange={handleChange}
                  name="departureTime"
                  defaultValue={data ? depDateTime.getHours() + ":" + depDateTime.getMinutes() : ''}

                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Total Seats</Form.Label>
                <Form.Control size='lg'
                  type="number"
                  defaultValue={data ? data.totalCapacity : 0}
                  onChange={handleChange}
                  name="totalCapacity"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Buisness Seats</Form.Label>
                <Form.Control size='lg'
                  defaultValue={data ? data.businessCapacity : ''}
                  name="businessCapacity"
                  onChange={handleChange}
                  type="number"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Buisness Price</Form.Label>
                <Form.Control size='lg'
                  onChange={handleChange}
                  defaultValue={data ? data.businessPrice : ''}
                  name="businessPrice"
                  type="number"
                  autoFocus
                />
              </Form.Group>
            </Container>




            <Container className=' p-0 mx-2 '>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Airline Name</Form.Label>
                <Form.Control
                  size='lg'
                  onChange={handleChange}
                  type="text"
                  defaultValue={data ? data.airlineName : ''}
                  name="airlineName"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Arrival City</Form.Label>
                <Form.Control
                  type="text"
                  onChange={handleChange}
                  size='lg'
                  defaultValue={data ? data.arrivalCity : ''}
                  name="arrivalCity"
                  placeholder="name@example.com"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Arrival Date</Form.Label>
                <Form.Control
                  type="date"
                  size='lg'
                  name='arrivalDate'
                  defaultValue={data ? data.arrivalDateTime.split('T', 1) : ''}
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Arrival Time</Form.Label>
                <Form.Control
                  type="time"
                  size='lg'
                  name='arrivalTime'
                  onChange={handleChange}
                  defaultValue={data ? depDateTime.getHours() + ":" + depDateTime.getMinutes() : ''}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-column " controlId="exampleForm.ControlInput1">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  className='p-0 m-0 h3'
                  autoFocus
                  onChange={handleChange}
                  name="isFull"
                  defaultValue={data.isFull ? 'Full' : 'Not Full'}

                  size='lg'
                >
                  <option value="Full">Full</option>
                  <option value="Not Full">Not Full</option>

                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Economy Seats</Form.Label>
                <Form.Control size='lg'
                  type="number"
                  onChange={handleChange}
                  defaultValue={data ? data.economyCapacity : 0}
                  autoFocus
                  name='economyCapacity'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Economy Price</Form.Label>
                <Form.Control size='lg'
                  type="number"
                  name='economyPrice'
                  defaultValue={data ? data.economyPrice : 0}
                  onChange={handleChange}
                  autoFocus
                />
              </Form.Group>
            </Container>


          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addFlight()}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Addflight

