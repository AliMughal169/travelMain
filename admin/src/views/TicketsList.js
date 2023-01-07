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
import TicketDetail from "./TicketDetail";

function TableList() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const [editData, setEditData] = useState('');
  const [ticketDetail, setTicketDetail] = useState([]);

  const [ticketData, setTicketData] = useState([]);
  const [passData, setPassData] = useState([]);
  const [flightData, setFlightData] = useState([])

  //appear notification
  // const notify  (place)
  // {

  // }
  function refreshPage() {
    window.location.reload(false);
  }
  useEffect(() => {
    async function fetchTicktData() {
      const response = await axios.get(`${backendUrl}v1/admin/tickets/alltickets`).then((res) => setTicketData(res.data.result));



    }
    async function fetchPassData() {
      const response = await axios.get(`${backendUrl}v1/admin/passenger/findpassenger`).then((res) => setPassData(res.data.result));

    }
    async function fetchFlightData() {
      const response = await axios.get(`${backendUrl}v1/admin/flights/allflights`).then((res) => setFlightData(res.data.result));

    }
    fetchTicktData()
    fetchPassData()
    fetchFlightData()

  }, [])
  async function deleteTicket(id) {
    const response = await axios.delete(`${backendUrl}v1/admin/tickets/deleteticket?_id=${id}`).then((res) => console.log(res))

  }
  function alerted(id) {
    Swal.fire({
      title: 'Are You Sure you want to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        deleteTicket(id)
        refreshPage()
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  function editflight(info) {
    setEditData(info)
    handleShow()

  }
  const detailClick = (data) => {
    if (data) {
      setTicketDetail(data)
      handleShow()
    }

  }
  const getflightdetail = (id, tag) => {

    for (let i = 0; i < flightData.length; i++) {
      if (flightData[i]._id == id) {
        if (tag) {
          return flightData[i][tag]
        }
        else {
          return flightData[i]
        }


      }
    }
  }
  const getPassengerdetail = (id, tag) => {
    for (let i = 0; i < passData.length; i++) {
      if (passData[i]._id == id) {
        if (tag) {
          return passData[i][tag]
        }
        else {
          return passData[i]
        }


      }
    }
  }
  return (
    <>

      <TicketDetail show={show} ticketDetail={ticketDetail} setShow={setShow} flightData={getflightdetail} passData={getPassengerdetail} />
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">List of Items</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>



              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Passenger Name</th>
                      <th className="border-0">Age</th>
                      <th className="border-0">Departure City</th>
                      <th className="border-0">Arrival City</th>
                      <th className="border-0">Purchase Date</th>
                      <th className="border-0">Seat #</th>
                      <th className="border-0">Ticket Type</th>
                      <th className="border-0">Class</th>
                      <th className="border-0">Price</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      ticketData.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td>{getPassengerdetail(data.passengerId, "firstName")}</td>
                            <td>{getPassengerdetail(data.passengerId, "age")}</td>
                            <td>{getflightdetail(data.flightId, "departureCity")}</td>
                            <td>{getflightdetail(data.flightId, "arrivalCity")}</td>

                            <td>{data.purchaseDate}</td>
                            <td>{data.seatNumber}</td>

                            <td>{data.ticketType}</td>
                            <td>{data.class}</td>
                            <td>{data.price}</td>

                            <td><Button variant='success' onClick={() => detailClick(data)}> Detail</Button></td>

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

export default TableList;
