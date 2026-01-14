import React from "react";

function QuestionCard({question, options, onSelect}) {
  return (
    <div>
      <h4 className="mb-4">{question}</h4>

      {/* Options */}
      <div className="list-group">

        {options.map((opt, i) => (
          <button className="list-group-item list-group-item-action mb-2" key={i}
            onClick={() => onSelect(opt)}>
          </button>
        ))}

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
