import React from "react";

function QuestionCard({ question, options, onSelect }) {
  return (
    <div>
      <h4 className="mb-4">{question}</h4>

      <div className="list-group">
        {options.map((opt, i) => (
          <button
            key={i}
            className="list-group-item list-group-item-action mb-2"
            onClick={() => onSelect(opt)}
          >
            {opt}  
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
