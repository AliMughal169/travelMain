import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const backendUrl = process.env.REACT_APP_BASE_URL;


function AddHotel({ show, setShow, data, setEdit, type }) {
    const [refresh, setRefresh] = useState(false);
    // console.log(data._id)

    var postData = {
        _id: data._id,
        hotelName: "",
        address: "",
        totalRooms: "",
        stars: 0,
        isFull: false,
    }
    const handleChange = (event) => {
        console.log(postData._id)
        postData[event.target.name] = event.target.value

    }


    const handleClose = () => {
        setEdit('')
        setShow(false);
    }

    useEffect(() => {
        //   setRefresh(!refresh)
    }, [])
    const addHotel = async () => {
        console.log(`id im add hote ${data._id}`)
        if (type == "Save changes") {

            // console.log(data._id, data.hotelName, data.address, data.totalRooms, data.stars, data.isFull)
            // postData.hotelName = data.hotelName,
            //     postData.address = data.address,
            //     postData.totalRooms = data.totalRooms,
            //     postData.stars = data.stars,
            //     postData.isFull = data.isFull ? 1 : 0



            const res = await axios.put(`${backendUrl}v1/admin/hotellist/updateHotel?_id=${postData._id}`, {
                hotelName: postData.hotelName,
                address: postData.address,
                totalRooms: postData.totalRooms,
                stars: postData.stars,
                isFull: postData.isFull ? 1 : 0

            }).then((res) => console.log(res))
            console.log(postData._id, postData.hotelName, postData.address, postData.totalRooms, postData.stars, postData.isFull)
            //setRefresh(!refresh)



        }
        else {
            //console.log(postData)

            const response = await axios.post(`${backendUrl}v1/admin/hotellist/addHotel`,
                {
                    hotelName: postData.hotelName,
                    address: postData.address,
                    totalRooms: postData.totalRooms,
                    stars: postData.stars,
                    isFull: postData.isFull ? 1 : 0

                }).then((res) => console.log(res))
            //setRefresh(!refresh)

        }

        setEdit('');

    }
    return (
        <>

            <Modal show={show} size="lg" onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Hotel</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className=' d-lg-flex  ' >
                        <Container className=' p-0 mx-2  '>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Hotel Name</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="text"
                                    name='hotelName'
                                    placeholder="name@example.com"
                                    defaultValue={data ? data.hotelName : ''}
                                    onChange={handleChange}
                                    autoFocus
                                />

                            </Form.Group>
                            <Form.Group className="mb-3 " controlId="exampleForm.ControlInput1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    size='lg'
                                    onChange={handleChange}
                                    type="text"
                                    name='address'
                                    defaultValue={data ? data.address : ''}
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Total Rooms</Form.Label>
                                <Form.Control
                                    type="number"
                                    size='lg'
                                    onChange={handleChange}
                                    name='totalRooms'
                                    defaultValue={data ? data.totalRooms : ''}
                                    autoFocus
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Stars</Form.Label>
                                <Form.Control
                                    type="number" setRefresh
                                    defaultValue={data ? data.stars : ''}

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
                        </Container>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {

                        addHotel()
                        // setRefresh(!refresh)
                        handleClose()

                    }}>
                        {type}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export default AddHotel

