import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Drawer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="container-fluid  ">
            <div className="sidebar-1">
              <div>
                <div className=" col-md-2 text-center  sidebar-img">
                  <img src="Assests/sidebar.png" alt="" width={150} />
                </div>
                <div className="buttonsidebar text-start">
                  <Link className="sidebar-button" to="/hero">
                    {" "}
                    <img src="Assests/pic1.png" alt="" width={25} /> &nbsp;
                    &nbsp; Dashboard
                  </Link>
                  <Link className="sidebar-button" to="/account">
                    {" "}
                    <img src="Assests/pic2.png" alt="" width={25} /> &nbsp;
                    &nbsp; Account
                  </Link>
                  <Link className="sidebar-button" to="/swap">
                    {" "}
                    <img src="Assests/pic3.png" alt="" width={25} /> &nbsp;
                    &nbsp; Swap
                  </Link>
                  <Link className="sidebar-button" to="/calculator">
                    {" "}
                    <img src="Assests/pic4.png" alt="" width={25} /> &nbsp;
                    &nbsp; Calculator
                  </Link>
                  <Link className="sidebar-button" to="/analytics">
                    {" "}
                    <img src="Assests/pic5.png" alt="" width={25} /> &nbsp;
                    &nbsp; Analytics
                  </Link>
                  <a className="sidebar-button" href="">
                    {" "}
                    <img src="Assests/pic6.png" alt="" width={25} /> &nbsp;
                    &nbsp; Docs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Drawer;
