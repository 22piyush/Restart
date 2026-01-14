function Timer({ time, current, total }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h5 className="mb-0">
        Question {current + 1} / {total}
      </h5>
      <span className="badge bg-danger fs-6">⏱ {time}</span>
    </div>
  );
}

export default Timer;
