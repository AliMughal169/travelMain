import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const backendUrl = process.env.REACT_APP_BASE_URL;
import AddHotel from './AddHotel'
import NotificationAlert from "react-notification-alert";

// react-bootstrap components
import { Card, Table, Container, Row, Col, Button } from "react-bootstrap";

function HotelList() {
    const [notifyData, setnotifyData] = useState('');
    const [type, setType] = useState('');
    const [post, setpost] = useState([]);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [editData, setEditData] = useState("");
    const [refresh, setRefresh] = useState(false);
    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPost = async () => {
        const response = await axios
            .get(`${backendUrl}v1/admin/hotellist/allHotels`)
            .then((res) => setpost(res.data.result));

        // setpost(response.data.collection);
        //console.log(post)
    };

    function alerted(_id) {
        Swal.fire({
            title: "Do you want to Delete?",
            showCancelButton: true,
            confirmButtonText: "Save",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Delete(_id);
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    function editflight(info) {
        //console.log(info)
        setEditData(info)
        setType('Save changes')
        handleShow()

    }

    async function Delete(lastId) {
        console.log(lastId)
        let response = await axios.delete(`${backendUrl}v1/admin/hotellist/deleteHotel/?_id=${lastId}`).then((res) => console.log(res));
        //setRefresh(!refresh)

    }

    return (
        <>
            {/* {
                notifyData ? <Notify option={notifyData} setoption={setnotifyData} notificationAlertRef={notificationAlertRef}></Notify> : ''
            }
            <NotificationAlert ref={notificationAlertRef} />
            <BookedDetails show={show} setShow={setShow} guestData={hotelDetail} /> */}
            <AddHotel show={show} setShow={setShow} data={editData} setEdit={setEditData} type={type} />
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">List of Hotels</Card.Title>
                                <Button variant="primary" onClick={() => {
                                    setType('Add hotel')
                                    handleShow()
                                }} >
                                    Add Hotel
                                </Button>
                            </Card.Header>

                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>_id</th>
                                            <th>Hotel Name</th>
                                            <th>Address</th>
                                            <th>Total Rooms</th>
                                            <th>Is full</th>
                                            <th>RATINGS</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {post.map((data) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{data._id}</td>
                                                        <td>{data.hotelName}</td>
                                                        <td>{data.address}</td>
                                                        <td>{data.totalRooms}</td>
                                                        <td>
                                                            {data.isFull ? (
                                                                <p>Fully booked :{data.isFull}</p>
                                                            ) : (
                                                                <p>Available</p>
                                                            )}
                                                        </td>
                                                        <td>{data.stars}</td>
                                                        <td>
                                                            <Button style={{ borderColor: "green" }}
                                                                onClick={() => {
                                                                    //setType('Save changes')
                                                                    editflight(data)
                                                                }
                                                                }>

                                                                Edit
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                style={{ borderColor: "red" }}
                                                                onClick={() => alerted(data._id)}
                                                            >

                                                                Delete
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default HotelList;
