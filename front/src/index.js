import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './layouts/Auth';
import Home from './views/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/user/*"  element={ <Auth />} />
    {/* <Route path="user/user/home"  element={ <Home />} /> */}
     {/* <Route path="/unauth" render={(props) => <UnAuthLayout {...props} />} /> */}
      {/* <Route path='/'  element={ <Auth />} /> */}
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
