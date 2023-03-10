
import React, { createContext } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Auth.js";
import UnAuthLayout from "layouts/UnAuth.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Route path="/unauth" render={(props) => <UnAuthLayout {...props} />} />
      <Redirect from="/" to="/unauth/login" />
    </Switch>
  </BrowserRouter>
,document.getElementById("root"));