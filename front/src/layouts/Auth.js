import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import routes from "../routes"
import Header from '../components/Header/Header';
import Footer from "../components/Footer/Footer"
import UserNavbar from '../components/Navbar/UserNavbar';
function Auth() {
    const location=useLocation();
    const mainPanel=React.useRef(null);
    
    const getRoutes=(routes)=>{
        return routes.map((prop,key)=>{
            if (prop.layout==="/user")
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
            <Header/>
            <UserNavbar routes={routes} />
            <div className='content'>
                <Routes>{getRoutes(routes)}</Routes>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default Auth