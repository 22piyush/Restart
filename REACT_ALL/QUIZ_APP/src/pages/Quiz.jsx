import React from "react";

function Quiz() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* Quiz Card */}
          <div className="card shadow-lg border-0 p-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Question 1 / 10</h5>
              <span className="badge bg-danger fs-6">
                ⏱ 30s
              </span>
            </div>

            <hr />

            {/* Question */}
            <h4 className="mb-4">
              React is mainly used for ?
            </h4>

            {/* Options */}
            <div className="list-group">

              <button className="list-group-item list-group-item-action mb-2">
                A. Styling
              </button>

              <button className="list-group-item list-group-item-action mb-2">
                B. Mobile App
              </button>

              <button className="list-group-item list-group-item-action mb-2">
                C. Building UI
              </button>

              <button className="list-group-item list-group-item-action">
                D. None
              </button>

            </div>

            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center mt-4">
              <button className="btn btn-outline-secondary">
                Previous
              </button>

              <button className="btn btn-primary">
                Next Question →
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Quiz;
