import React from "react";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Quiz() {

  const {state, dispatch} = useContext(QuizContext);
  const {index, questions} = state;
  const navigate = useNavigate();

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
