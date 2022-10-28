import React from "react";

function Analytics() {
  return (
    <div className="dashboard5 hero-button ">
      <div class="container text-center ">
        <div class="row">
          <div class="col">
            <div className="hero-button">
              <h5>How much you have invested so far?</h5>
              <img
                src="https://app.safuu.com/static/media/earn.0f7dcd87.png"
                alt=""
                width={50}
              />
              <h3>Total Investment</h3>
              <button className="header-button1 px-5">
                <b>$0</b>
              </button>
            </div>
          </div>

          <div class="col">
            <div className="hero-button">
              <h5>Risk Meter</h5>
              <img
                src="https://app.safuu.com/static/media/metrc-bg.be1bb429.png "
                alt=""
              />
              <img src="" alt="" />
            </div>
          </div>

          <div class="col">
            <div className="hero-button">
              <h5>How much you have withdrawn so far?</h5>
              <img
                src="https://app.safuu.com/static/media/lose.45a4bceb.png"
                alt=""
                width={50}
              />
              <h3>Total Earned</h3>
              <button className="header-button1 px-5">
                <b>$0</b>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col my-5"></div>
          <div class="col my-5">
            <div className="analytics-button ">
              <h5 className="color">Recent Trading History</h5>
            </div>
          </div>
          <div class="col my-5"></div>
        </div>
      </div>

      <div class="container text-center header ">
        <div class="row">
          <div class="col-md-2">
           <text className="color">Transaction Hash</text>
          </div>
          <div class="col-md-2">
          <text className="color">Block Number</text>

          </div>
          <div class="col">
            <text className="color">Method</text>

          </div>
          <div class="col">
            <text className="color">Date</text>

          </div>
          <div class="col">
            <text className="color">Amount</text>

          </div>
          <div class="col">
            <text className="color">$ SAFUU</text>

          </div>
          <div class="col">
            <text className="color">$ BNB</text>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Analytics;
