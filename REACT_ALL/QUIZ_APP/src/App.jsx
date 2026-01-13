import React from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Result = lazy(() => import("./pages/Result"));

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
