import React from "react";
import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import {useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function Quiz() {

  const {state, dispatch} = useContext(QuizContext);
  const {index, questions} = state;
  const navigate = useNavigate();

  if(!questions || questions.length === 0){
    return <h2 className="text-center mt-5">Loading Questions</h2>
  }
  
  if(index >= questions.length){
    dispatch({type:"FINISH"})
    navigate("/result")
    return null;
  }


  const current = questions[index];


  const handleSelect = (option) => {
    dispatch({type:"ANSWER", payload: option === current.answer});

  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* Quiz Card */}
          <div className="card shadow-lg border-0 p-4">

            {/* Header */}
            <Timer time={time}/>

            {/* Progress Bar */}
            <ProgressBar current={index} total={questions.length}/>

            <hr />

            {/* Question */}
            <QuestionCard 
              question={current.questions}
              options={current.options}
              onSelect={handleSelect}
            />

          </div>

        </div>
      </div>
    </div>
  );
}

export default Quiz;
