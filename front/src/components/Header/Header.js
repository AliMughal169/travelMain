import React, { useEffect } from 'react'
import { Container, Navbar,Nav } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap'
import travel from '../../assets/img/travelLogo.png'
function Header({routes}) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className='  container-fluid  '>
         <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home"><img src={travel} width={"60px"}></img></Navbar.Brand>
          <Nav className="me-auto ">
          {routes.map((prop, key) => {
            if (!prop.showInBar) {
              return null;
            }
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
          </Nav>
          <Button autoFocus >Login</Button>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header