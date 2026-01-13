import React from "react";

function QuestionCard() {
  return (
    <div>
      <h4 className="mb-4">React is mainly used for ?</h4>

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
      <div className="d-flex justify-content-end align-items-center mt-4">
        {/* <button className="btn btn-outline-secondary">Previous</button> */}

        <button className="btn btn-primary">Next Question →</button>
      </div>
    </div>
  );
}

export default QuestionCard;
