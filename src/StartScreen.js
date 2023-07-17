function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="startScreen">
      <h3>{numQuestions} questions to test your FPL mastery</h3>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        START
      </button>
    </div>
  );
}

export default StartScreen;
