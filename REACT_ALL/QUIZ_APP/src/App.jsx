import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import LeaderBoard from "./pages/LeaderBoard";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizProvider from "./context/QuizContext";
const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <>
      <QuizProvider>
        <BrowserRouter>
          <Suspense fallback={<h2 className="text-center mt-5">Loading....</h2>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QuizProvider>
    </>
  );
}

export default App;
