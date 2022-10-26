import React from "react";

function Sidebar() {
  return (
    <div className="container sidebar">
      <img className="img-fluid" src="Assests/sidebar.png" alt="" width={160} />

      <button className="sidebar-button">
        <img src="Assests/pic1.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Dashboard</b>
      </button>

      <button className="sidebar-button">
        {" "}
        <img src="Assests/pic1.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Account</b>
      </button>

      <button className="sidebar-button">
        <img src="Assests/pic3.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Swap</b>
      </button>

      <button className="sidebar-button">
        <img src="Assests/pic4.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Calculator</b>
      </button>

      <button className="sidebar-button">
        <img src="Assests/pic5.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Analytics</b>
      </button>

      <button className="sidebar-button">
        {" "}
        <img src="Assests/pic6.png" alt="" width={30} />{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <b>Docs</b>
      </button>
    </div>
  );
}

export default Sidebar;
