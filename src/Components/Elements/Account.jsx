import React from "react";

function Account() {
  return (
    <div className="container hero1">
      <div className="  dashboard1 ">
        <div className="hero-button">
          <h3 className="card-title text-center">Your Balance</h3>
          <h3 className="card-text text-center mt-3 color">$0</h3>
          <h3 className="card-text text-center mt-3 ">0 SAFUU</h3>
        </div>
      </div>

      <div className="  dashboard1 ">
        <div className="hero-button">
          <h3 className="card-title text-center">APY</h3>
          <h3 className="card-text text-center mt-3 color">383,025.8%</h3>
          <h3 className="card-text text-center mt-3 ">Daily ROI 2.28%</h3>
        </div>
      </div>

      <div className="  dashboard1 ">
        <div className="hero-button">
          <h3 className="card-title text-center">Next Rebase:</h3>
          <h3 className="card-text text-center mt-3 color">00:06:47</h3>
          <h3 className="card-text text-center mt-3 ">Rebasing...</h3>
        </div>
      </div>

      <div className="dashboard1 hero-button">
        <div className="table1 my-3">
          <h5>Current SAFUU Price</h5>
          <h5>$1.54</h5>
        </div>

        <div className="table1 my-3">
          <h5>Next Reward Amount</h5>
          <h5>0 SAFUU</h5>
        </div>

        <div className="table1 my-3">
          <h5>Next Reward Amount USD</h5>
          <h5>$0</h5>
        </div>

        <div className="table1 my-3">
          <h5>Next Reward Yield</h5>
          <h5>0.02355%</h5>
        </div>

        <div className="table1 my-3">
          <h5>ROI(1-Day Rate) USD</h5>
          <h5>$0</h5>
        </div>

        <div className="table1 my-3">
          <h5>ROI(5-Day Rate)</h5>
          <h5>11.96%</h5>
        </div>

        <div className="table1 my-3">
          <h5>ROI(5-Day Rate) USD</h5>
          <h5>$0</h5>
        </div>

       
      </div>
    </div>
  );
}

export default Account;
