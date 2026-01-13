import React from "react";

function LeaderBoard() {
  const students = [
    { id: 1, name: "Piyush", score: 9 },
    { id: 2, name: "Rahul", score: 7 },
    { id: 3, name: "Sneha", score: 10 },
    { id: 4, name: "Amit", score: 6 },
    { id: 5, name: "Neha", score: 8 },
  ];

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
                  {students
                    .sort((a, b) => b.score - a.score)
                    .map((student, index) => (
                      <tr
                        key={student.id}
                        className={index === 0 ? "table-success fw-bold" : ""}
                      >
                        <td>
                          {index === 0 ? "🥇" : index + 1}
                        </td>
                        <td>{student.name}</td>
                        <td>{student.score} / 10</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-3">
              <button className="btn btn-outline-primary">
                ⬅ Back to Home
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
