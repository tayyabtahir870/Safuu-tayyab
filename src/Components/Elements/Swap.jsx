import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";

function Swap() {
  return (
    <div className="dashboard2  hero-button">
      <div className="table1 ">
        <h5 className="fw-bold">S w a p</h5>
       <div className="d-flex">
       <IoMdRefresh color="white" size={25} />
        <AiFillSetting color="white" size={25} />
       </div>
      </div>

      <div className="table1 ">
        <h5>Fast, Secure, KYC-Free.</h5>
        
      </div>

      <div className="swap-button ">
        <div className="table1">
          <h5>From:</h5>
          <h5>Balance: 0</h5>
        </div>

        <div className="table1">
          <h5>0.00</h5>
          <h5>
            <b className="color">Max</b>{" "}
            <img
              src="https://app.safuu.com/static/media/bnb-icon.cda692f5.svg"
              color="yellow"
              alt=""
            />
            BNB
          </h5>
        </div>
      </div>

      <div className="text-center my-3">
        <AiOutlineArrowDown size={25} />
      </div>
      <div className="swap-button ">
        <div className="table1">
          <h5>To:</h5>
          <h5>Balance: 0</h5>
        </div>

        <div className="table1">
          <h5>0</h5>
          <h5>
            {" "}
            <img
              className="img-fluid"
              src="https://app.safuu.com/static/media/safuu-logo.ca35646e.png"
              alt=""
              width={30}
            />
            SAFUU
          </h5>
        </div>
      </div>

      <div className=" p-3">
        <div className="table1">
          <h5>Slippage Tolerance</h5>
          <h5 className="color">0.1%</h5>
        </div>
      </div>

      <div className="text-center">
        <button className="header-button1 swapbutton ">
          <b>Connect Wallet</b>
        </button>
      </div>

      <div className="swap-button my-3 ">
        <div className="table1">
          <h5>Minimum received</h5>
          <h5>Minimum received</h5>
        </div>

        <div className="table1 ">
          <h5>Price Impact</h5>
          <h5>0%</h5>
        </div>

        <div className="table1 ">
          <h5>Liquidity Provider Fee
</h5>
          <h5>0% - No Fee</h5>
        </div>

        <div className="table1 ">
          <h5>Route
</h5>
          <h5>SAFUU --  BNB</h5>
        </div>
      </div>
    </div>
  );
}

export default Swap;
