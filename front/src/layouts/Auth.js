import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import routes from "../routes"
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import UserNavbar from '../components/Navbar/UserNavbar';
import Home from '../views/Home';
import Flight from '../views/Flight';
import Hotel from '../views/Hotel';
import ContactUs from '../views/ContactUs';
import Login from '../views/Login'
import BookFlight from '../views/BookFlight';
function Auth() {
   
    const location=useLocation();
    const mainPanel=React.useRef(null);
    const [loginShow,setLogin]=useState('false');
    const getRoutes=(routes)=>{
        return routes.map((prop,key)=>{
            console.log(prop.layout)
            if (prop.layout=="/user")
            {
                return(
                    <Route key={key} path={prop.layout+prop.path} element={<prop.component/>} />
                )
                
            }
            else{
                return null;
            }
        })
    };
    useEffect(()=>{
        document.documentElement.scrollTop=0
         document.scrollingElement.scrollTop = 0;
        // mainPanel.current.scrollTop = 0;
        if (
          window.innerWidth < 993 &&
          document.documentElement.className.indexOf("nav-open") !== -1
        ) {
          document.documentElement.classList.toggle("nav-open");
          var element = document.getElementById("bodyClick");
          element.parentNode.removeChild(element);
        }
    },[location])
  return (
    <>
        <div className='wrapper'>
            <Header routes={routes}/>
            
            <div className='content' >
                
                <Routes>
                <Route path="/home"  element={ <Home />} />
                <Route path="/flights"  element={ <Flight />} />
                <Route path="/hotels"  element={ <Hotel />} />
                <Route path="/contactus"  element={ <ContactUs />} />
                <Route path="/bookflight"  element={ <BookFlight/>} />
                     
                </Routes>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Auth