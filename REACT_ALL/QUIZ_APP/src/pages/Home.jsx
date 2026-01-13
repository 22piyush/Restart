import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

  const [name, setName] = useState("");

  const startQuiz = () => {
    if(!name.trim()) return alert("Please enter your name.");
    
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-0 shadow-lg text-center p-4">
            
            {/* Icon */}
            <div className="mb-3">
              <span
                className="badge bg-primary rounded-circle p-3"
                style={{ fontSize: "24px" }}
              >
                🧠
              </span>
            </div>

            {/* Heading */}
            <h2 className="fw-bold mb-2">React Quiz Challenge</h2>
            <p className="text-muted mb-4">
              Test your React knowledge and level up 🚀
            </p>

            {/* Input */}
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />

            {/* Button */}
            <button className="btn btn-primary btn-lg w-100" onClick={startQuiz}>
              Start Quiz
            </button>

            {/* Footer text */}
            <small className="text-muted mt-3 d-block">
              10 Questions • Beginner Friendly
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
