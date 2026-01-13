import React from "react";

function ProgressBar() {
  return (
    <div>
      <div className="progress mt-3 mb-4" style={{ height: "8px" }}>
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{ width: "30%" }} // static for now
          aria-valuenow="30"
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
}

export default ProgressBar;
