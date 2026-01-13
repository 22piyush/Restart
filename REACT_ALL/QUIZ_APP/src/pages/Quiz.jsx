import React from "react";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

function Quiz() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* Quiz Card */}
          <div className="card shadow-lg border-0 p-4">

            {/* Header */}
            <Timer />

            {/* Progress Bar */}
            <ProgressBar/>

            <hr />

            {/* Question */}
            <QuestionCard/>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Quiz;
