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
import Addflight from "./Addflight";
import moment from "moment";
import NotificationAlert from "react-notification-alert";
import Notify from "./notify";

function TableList() {
<<<<<<< HEAD
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const [editData, setEditData] = useState('');
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      console.log(backendUrl)
      const response = await axios.get(`${backendUrl}v1/admin/flights/allflights`).then((res) => setdata(res.data.result));
    }
    fetchdata();

  }, []);
  async function deleteflight(id) {
    const response = await axios.delete(`${backendUrl}v1/admin/flights/deleteflight?_id=${id}`).then((res) => console.log(res))

  }
  function alerted(id) {
    Swal.fire({
      title: 'Are You Sure you want to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */

      if (result.isConfirmed) {
        deleteflight(id)
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

  return (
    <>

      <Addflight show={show} setShow={setShow} data={editData} setEdit={setEditData} />
=======
  const [type,setType]=useState('')
  const [show,setShow]=useState(false)
  const handleShow = () => setShow(true);
  const [editData,setEditData]=useState('');
  const [data,setdata]=useState([]);
  const notificationAlertRef = React.useRef(null);
  const [notifyData,setnotifyData]=useState('');
  
     useEffect(() => {
        async function fetchdata()
        {
          console.log(backendUrl)
          const response=await  axios.get(`${backendUrl}v1/admin/flights/allflights`).then((res)=>setdata(res.data.result));
        }
        fetchdata()
        
     },[])
     async function deleteflight(id) {
        const response=await axios.delete(`${backendUrl}v1/admin/flights/deleteflight?_id=${id}`).then((res)=>console.log(res))
        
     }
     function alerted(id) {
      Swal.fire({
        title: 'Are You Sure you want to Delete?',
        showCancelButton: true,
        confirmButtonText: 'Delete',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        
        if (result.isConfirmed) {
          deleteflight(id)
          refreshPage()
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
    function editflight(info) {
      setEditData(info)
      setType("Save Changes")
      handleShow()
      
    }
     
  return (
    <>
      {
        notifyData?<Notify option={notifyData} setoption={setnotifyData} notificationAlertRef={notificationAlertRef}></Notify>:''
    }
    <NotificationAlert ref={notificationAlertRef} />
    <Addflight show={show} setShow={setShow} data={editData} setEdit={setEditData} setnotifyData={setnotifyData} type={type}/>
>>>>>>> 50527946c756357fcaaebc7928a3768807e8c6f5
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Flight List</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
                <Button variant="primary" onClick={()=>{
                  setType("Add Flight")
                  handleShow()
                  }} >
                  Add Flight
                </Button>


              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Flight Number</th>
                      <th className="border-0">Airline</th>
                      <th className="border-0">Departure City</th>
                      <th className="border-0">Arrival City</th>
                      <th className="border-0">Departure Date</th>
                      <th className="border-0">Arrival Date</th>
                      <th className="border-0">Buisness Price</th>
                      <th className="border-0">Economy Price</th>
                      <th className="border-0">Total Seats</th>
                      <th className="border-0">Buisness Seats</th>
                      <th className="border-0">Economy Seats</th>
                      <th className="border-0">Is Full</th>

                    </tr>
                  </thead>
                  <tbody>
                    {
                      data.map((dat, index) => {
                        return (
                          <tr key={index}>
                            <td>{dat.flightNumber}</td>
                            <td>{dat.airlineName}</td>
                            <td>{dat.departureCity}</td>
                            <td>{dat.arrivalCity}</td>
                            {/* <td>{dat.departureDateTime}</td> */}
                            
                            <td>{moment(dat.departureDateTime).format("DD MM YYYY hh:mm")}</td>

                            <td>{dat.arrivalDateTime}</td>
                            <td>{dat.businessPrice}</td>
                            <td>{dat.economyPrice}</td>
                            <td>{dat.totalCapacity}</td>
                            <td>{dat.businessCapacity}</td>
                            <td>{dat.economyCapacity}</td>
                            <td>{dat.isFull}</td>

                            <td><Button variant='success' onClick={() => editflight(dat)}> Edit</Button></td>

                            <td><Button variant='danger' onClick={() => alerted(dat._id)} > Delete</Button></td>

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
