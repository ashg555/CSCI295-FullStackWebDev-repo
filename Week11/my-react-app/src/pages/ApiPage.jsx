import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Question from "../components/Question";

export default function ApiPage() {
  
  const URL = "https://opentdb.com/api.php?amount=3"

  const [questions, setQuestions] = useState([{}, {}]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    async function getQuestions() {
      const timestamp = Date.now();
      setIsLoaded(false);
      const res = await fetch(`${URL}&t=${timestamp}`);
      const data = await res.json();
      console.log(data);
      setQuestions(data.results);
      console.log(questions);
      setIsLoaded(true);
    }

    getQuestions();
  }, []);
  
  return <>
  
    <h2>This is the API page</h2>

    {questions ?
    questions.map((question, index) => <Question q={question} count={index+1} />)
    :
    "Loading..."
    }

    <Link to="/">Return Home</Link>

  </>
}