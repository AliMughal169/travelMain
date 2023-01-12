import React from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { Button } from 'reactstrap'
import travel from '../../assets/img/travelLogo.png'
function Header({routes}) {
  return (
    <div className='  container-fluid  '>
         <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home"><img src={travel} width={"60px"}></img></Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Flights</Nav.Link>
            <Nav.Link href="#pricing">Hotels</Nav.Link>
            <Nav.Link >Contact Us</Nav.Link>
            <Nav.Link   >Hotels</Nav.Link>
            
          </Nav>
          <Button autoFocus >Login</Button>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header