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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Button, Row, Container } from "reactstrap";

function WFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>Developed by <a href="http://www.mjaisstore.com/Info" target="_blank"  > MJais Software Consultancy </a>
              </li>
            <li><a href="/terms" >Terms &amp; Conditions</a></li>
            <li><a href="/Disclaimer" >Disclaimer</a></li>
             
            </ul>
          </nav>
          


          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> 

              <Button className="btn-just-icon btn-neutral" 
              href="https://www.facebook.com/WajidJobFinder/" target= "blank"
                    >
                      <i className="fa fa-facebook" /> </Button>
                      {/* <Button className="btn-just-icon btn-neutral" href="#pablo" onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" /> </Button> */}

            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default WFooter;
