import React from "react";


function Calculator() {
    
  return (
    <div className="container hero1" >
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-7">
    <div className="  card hero-card py-3 px-3">
      <div>
        <h5>Calculator</h5>
        <h5>Estimate your returns</h5>
      </div>

      <div class="container text-center">
        <div class="row">
          <div class="col-md-4 my-4">
            <h4 className="cal">SAFUU Price</h4>
            <h3>$1.53</h3>
          </div>
          <div class="col-md-3 my-4">
            <h4 className="cal">Current APY</h4>
            <h3>383,025.8%</h3>
          </div>
          <div class="col-md-5 my-4">
            <h4 className="cal">Your SAFUU Balance</h4>
            <h3>0 SAFUU</h3>
          </div>

          <div class="container text-start">
            <div class="row">
              <div class="col">
                <h5>SAFUU Amount</h5>

                <div className="cal-button ">
                  <div className="table1 ">
                    <h5 className="cal">0</h5>
                    <h5>Max</h5>
                  </div>
                </div>
              </div>

              <div class="col">
                <h5>APY (%)</h5>

                <div className="cal-button ">
                  <div className="table1 ">
                    <h5 className="cal">383025.8</h5>
                    <h5>Current</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container text-start">
            <div class="row">
              <div class="col my-4">
                <h5>SAFUU price at purchase ($)</h5>

                <div className="cal-button ">
                  <div className="table1 ">
                    <h5 className="cal">1.53</h5>
                    <h5>Current</h5>
                  </div>
                </div>
              </div>

              <div class="col my-4">
                <h5>Future SAFUU market price ($)</h5>

                <div className="cal-button ">
                  <div className="table1 ">
                    <h5 className="cal">1.53</h5>
                    <h5>Current</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" my-3 ">
            <div className="table1">
              <h5>Your initial investment</h5>
              <h5>$0</h5>
            </div>

            <div className="table1 ">
              <h5>Current wealth</h5>
              <h5>$0</h5>
            </div>

            <div className="table1 ">
              <h5>SAFUU rewards estimation</h5>
              <h5>0 SAFUU</h5>
            </div>

            <div className="table1 ">
              <h5>Potential return</h5>
              <h5>$0</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Calculator;
