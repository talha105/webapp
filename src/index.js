/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/scss/paper-kit.scss?v=1.2.0";
import "./assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import AboutPage from "views/examples/About.js";
import ContactPage from "views/examples/Contact.js";
import TermsPage from "views/examples/Terms.js";
import UserForm from "./components/userform"
import DisclaimerPage from "views/examples/Disclaimer.js";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

// others
ReactDOM.render(


  



  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <LandingPage {...props} />} />
      {/* <Route path="/index" render={(props) => <Index {...props} />} /> */}
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/about-page"
        render={(props) => <AboutPage {...props} />}
      />
      <Route  path="/terms"  render={(props) => <TermsPage {...props} />} />
      <Route  path="/Disclaimer"  render={(props) => <DisclaimerPage {...props} />} />
      <Route
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/userform"
        render={(props) => <UserForm {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
