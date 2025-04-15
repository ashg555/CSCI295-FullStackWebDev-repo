import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Question from "../components/Question";

const URL="https://opentdb.com/api.php?amount=3&category=19&difficulty=easy&type=multiple"
//"https://opentdb.com/api.php?amount=10";

export default function ApiPage0(){

    const [questions, setQuestions] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userAnswers, setAnswers] = useState([]);


    useEffect(()=>{

       async function getQuestion(){
        const timestamp = Date.now();
    console.log(timestamp);
            setIsLoaded(false);
            console.log('fetching data')
           const res= await fetch(`${URL}&t=${timestamp}`);
            const data= await res.json();
          
            console.log(data);
            setQuestions(data.results)
            setIsLoaded(true);
        }
        getQuestion();

    },[])
   

    return <> <h1> This is the Api Page  </h1>
        
        { questions ? 
            questions.map((question, index) => 
            <Question count={index+1} question={question} />) 
            : 
            <h1>Loading...</h1>
            
            }

    <Link to="/" > Go to Homepage</Link>    
    </>
}