function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome To THe React Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;