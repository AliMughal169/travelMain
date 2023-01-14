import axios from "axios";
import React, { useEffect, useState } from "react";
const backendUrl = process.env.REACT_APP_BASE_URL;
// react-bootstrap components
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { render } from "react-dom";
import Swal from "sweetalert2";
import BookedDetails from "./BookedHotelDetails";
import Notify from './notify'
import NotificationAlert from "react-notification-alert";

function BookedHotels() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const [notifyData, setnotifyData] = useState('');
  const [hotelDetail, setHotelDetail] = useState(false)
  const [reload, setReload] = useState(false)
  const [hotelData, setHotelData] = useState([]);
  const [guestData, setguestData] = useState([])
  const notificationAlertRef = React.useRef(null);
  const [roomData, setroomData] = useState([]);
  const [showOtherComponent, setShowOtherComponent] = useState(false);

  function handleButtonClick() {
    setShowOtherComponent(true);
  }

  useEffect(() => {
    async function fetchHotelData() {
      const response = await axios.get(`${backendUrl}v1/admin/bookedHotels/allBookedHotel`).then((res) => setHotelData(res.data.result));
    }
    async function fetchGuestData() {
      const response = await axios.get(`${backendUrl}v1/admin/guests/guests`).then((res) => setguestData(res.data.result));
      //console.log(guestData)



    }
    async function fetchRoomData() {
      const response = await axios.get(`${backendUrl}v1/admin/rooms/allrooms`).then((res) => setroomData(res.data.result));
      // console.log(roomData)
    }


    fetchHotelData()
    fetchGuestData();
    fetchRoomData();
    // console.log(roomData)



  }, [reload])

  async function deleteGuest(id) {
    const response = await axios.delete(`${backendUrl}v1/admin/guests/deleteGuest?_id=${id}`).then((res) => console.log(res))
    setReload(!reload)
    setnotifyData({ place: "tc", message: `deleted id : ${id} successfully`, type: "success" })


  }


  function alerted(id) {
    Swal.fire({
      title: 'Are You Sure you want to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        deleteGuest(id)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  const detailClick = (data) => {
    if (data) {
      setHotelDetail(data)
      //console.log(data)
      handleShow()

    }

  }
  // const sendId = () => {
  //   setuserId(guestData._id)
  //   console.log(guestData._id)

  // }
  // const getGuestdetail = (id, tag) => {

  //   for (let i = 0; i < guestData.length; i++) {
  //     if (guestData[i]._id == id) {
  //       if (tag) {
  //         return guestData[i][tag]
  //       }
  //       else {
  //         return guestData[i]
  //       }


  //     }
  //   }

  // }
  // const getRoomdetail = (id, tag) => {
  //   for (let i = 0; i < roomData.length; i++) {
  //     if (roomData[i]._id == id) {
  //       if (tag) {
  //         return roomData[i][tag]
  //       }
  //       else {
  //         return roomData[i]
  //       }


  //     }
  //   }
  // }
  return (
    <>
      {
        notifyData ? <Notify option={notifyData} setoption={setnotifyData} notificationAlertRef={notificationAlertRef}></Notify> : ''
      }
      <NotificationAlert ref={notificationAlertRef} />

      {/* <BookedDetails show={show} setShow={setShow} hotelDetail={hotelDetail} roomData={roomData} hotelData={hotelData} /> */}

      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Booked Guests  List   </Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>



              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>

                      <th className="border-0">FirstName</th>
                      <th className="border-0">LastName</th>
                      <th className="border-0">Phone Number </th>
                      <th className="border-0">Age</th>
                      <th className="border-0">Passport Number</th>


                    </tr>
                  </thead>
                  <tbody>
                    {
                      guestData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.phone}</td>
                            <td>{data.age}</td>
                            <td>{data.passport}</td>
                            <td>
                              <Button variant='success' onClick={() => { detailClick(data), handleButtonClick() }}> Detail</Button>
                              {showOtherComponent && <BookedDetails show={show} setShow={setShow} hotelDetail={hotelDetail} roomData={roomData} hotelData={hotelData} />}
                            </td>
                            <td><Button variant='danger' onClick={() => alerted(data._id)} > Delete</Button></td>

                          </tr>
                        )
                      })
                    }
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

export default BookedHotels