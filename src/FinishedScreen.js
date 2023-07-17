function FinishedScreen({ points, maxPossiblePoints, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "👌";
  if (percentage >= 30 && percentage < 50) emoji = "🤕";
  if (percentage >= 10 && percentage < 30) emoji = "❌";
  if (percentage === 0) emoji = "🤐";

  return (
    <div className="finish">
      <p className="finishPara">
        <span className="emoji">{emoji}</span>You scored{" "}
        <strong>{points} </strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>

      <button
        className="btn btn-reset"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishedScreen;
