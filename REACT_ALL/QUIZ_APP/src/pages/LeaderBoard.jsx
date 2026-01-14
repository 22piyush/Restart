import { useContext, useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";

function LeaderBoard() {
  const [data, setData] = useState([]);
  const { dispatch } = useContext(QuizContext);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("leaderboard")) || [];
    setData(stored);
  }, []);

  const clearBoard =()=> {
    localStorage.removeItem("leaderboard");
    setData([]);
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 p-4">
            <h3 className="text-center mb-4">🏆 Leaderboard</h3>

            <div className="table-responsive">
              <table className="table table-hover text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {[...data]
                    .sort((a, b) => b.score - a.score)
                    .map((student, index) => (
                      <tr
                        key={index}
                        className={index === 0 ? "table-success fw-bold" : ""}
                      >
                        <td>{index === 0 ? "🥇" : index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.score} / 10</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-3">
              <Link to="/">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={() => dispatch({ type: "RESET" })}
                >
                  ⬅ Back to Home
                </button>
              </Link>
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={clearBoard}
                >
                  Clear Leaderboard
                </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard
