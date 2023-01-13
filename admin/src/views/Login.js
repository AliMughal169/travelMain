import axios from "axios";
import React from "react";
const backendUrl=process.env.REACT_APP_BASE_URL;
// react-bootstrap components
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Alert
} from "react-bootstrap";
 import {useHistory} from 'react-router-dom'

function Login() {
    const history=useHistory();
    const getLogin=async (event)=>
    {
        event.preventDefault();
        const data =new FormData(event.target);
        try {
            const response =await axios.get(`${backendUrl}v1/admin/admin/login?email=${data.get("email")}&password=${data.get("password")}`)
            if(response.data.result.jwtToken)
            {
                localStorage.setItem('access_token',response.data.result.jwtToken)
                localStorage.setItem('_id',response.data.result._id)
                console.log(response.data.result.jwtToken)
                history.push('/admin/dashboard')
            }
            else{
                alert("Invalid email of password")
            }
        } catch (error) {
            alert("Invalid email of password")
        }
    }
  return (
    <>
        <Container className="centered">
            <Row>
            <Col className="mx-auto" lg="4" md="8" >
                <Form action="" className="form" method="" onSubmit={getLogin}>
                    <Card className="card-login">
                        <Card.Header className="text-center">
                            <div className="logo-holder d-inline-block align-top">
                            <h1>Login</h1>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Body>
                                <Form.Group>
                                    <label>Email address <span className="text-danger">*</span></label>
                                    <Form.Control placeholder="Enter Email" type="text" name="email"  />
                                </Form.Group>
                                <Form.Group>
                                    <label>Password <span className="text-danger">*</span></label>
                                    <Form.Control placeholder="Enter Password" type="password" name="password" />
                                </Form.Group>
                            </Card.Body>
                        </Card.Body>
                        <Card.Footer className="ml-auto mr-auto">
                            <Button className="btn-filled" type="submit">Login</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Col>
            </Row>
        </Container>
    </>
  );
}

export default Login;
