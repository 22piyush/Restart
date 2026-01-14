import { useContext } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Result() {

  const {state, dispatch} = useContext(QuizContext);


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="card shadow-lg border-0 text-center p-4">

            {/* Success Icon */}
            <div className="mb-3">
              <span
                className="badge bg-success rounded-circle p-4"
                style={{ fontSize: "28px" }}
              >
                🎉
              </span>
            </div>

            {/* Heading */}
            <h2 className="fw-bold mb-2">Quiz Completed!</h2>
            <p className="text-muted mb-4">
              Great job! {state.username}
            </p>

            {/* Score Section */}
            <div className="bg-light rounded p-3 mb-4">
              <h4 className="mb-1">Your Score</h4>
              <h1 className="fw-bold text-primary">{state.score} / {state.questions.length}</h1>
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              <Link to={"/"}><button
                className="btn btn-outline-secondary w-100"
              >
                ⬅ Back to Home
              </button></Link>

             <Link to={"/leaderboard"}>
                <button
                  className="btn btn-primary w-100"
                >
                  🔄 View Leaderboard
                </button>
             </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Result;
