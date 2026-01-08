import React from "react";

function Home() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          {/* Laptop */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Laptop</h5>
                <p className="card-text">₹50,000</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Mobile</h5>
                <p className="card-text">₹20,000</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Tablet */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Tablet</h5>
                <p className="card-text">₹30,000</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Computer */}
          <div className="col-md-3">
            <div className="card text-center">
              <div className="card-body">
                <h5 className="card-title">Computer</h5>
                <p className="card-text">₹60,000</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
