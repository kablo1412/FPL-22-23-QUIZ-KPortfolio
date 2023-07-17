function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.opcije.map((opcija, index) => (
        <button
          className={`btn btn-opcija ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === question.tocanOdgovor
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={opcija}
          disabled={hasAnswered}
        >
          {opcija}
        </button>
      ))}
    </div>
  );
}

export default Options;
