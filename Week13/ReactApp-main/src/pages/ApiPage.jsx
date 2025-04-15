import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Question from "../components/Question";
import QuestionOptions from "../components/QuestionOptions";

const URL =
  "https://opentdb.com/api.php?amount=5&category=19&difficulty=easy&type=multiple";

export default function ApiPage() {
  //state to holds the questions from the api
  const [questions, setQuestions] = useState([]);
  //state to hold the user's selected answers as a dictionary e.g {0:'answer1', 1:'answer2'}
  const [userAnswers, setAnswers] = useState({});

  //state to hold the final calcuated quiz score
  const [finalScore, setFinalScore] = useState("");

  //function to randomize the options
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    async function getQuestion() {
      const timestamp = Date.now();
      console.log(timestamp);
      console.log("fetching data");
      const res = await fetch(`${URL}&t=${timestamp}`);
      const data = await res.json();
      console.log(data);
      setQuestions(data.results);
    }

    getQuestion();
  }, []);

  //function to compute the total score
  function gradeQuiz() {
    var score = 0;
    questions.map((question, index) => {
      const key = index.toString();
      if (question.correct_answer == userAnswers[key]) {
        score++;
        console.log("question ", index, "is correct");
      } else {
        console.log("question ", index, "is incorrect");
      }
    });

    setFinalScore(score);
  }

  return (
    <>
      <h1> This is the Api Page </h1>
     
      {questions ? (
        questions.map((question, index) => (
          <Question count={index + 1} question={question}>
            {/* Embeded component that displays the options for each questions */}
            <QuestionOptions
              questionNumber={index}
              options={shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
              ])}
              userAnswers={userAnswers}
              setAnswers={setAnswers}
            />
          </Question>
        ))
      ) : (
        <h1>Loading...</h1>
      )}

      <button onClick={gradeQuiz}> Grade </button>
      
      {finalScore == "" ? "" : <h1>You scored {finalScore}</h1>}
      <hr />
      <Link to="/"> Go to Homepage</Link>
    </>
  );
}
