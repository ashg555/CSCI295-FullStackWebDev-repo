import { useEffect, useState } from "react";
import QuestionOptions from "./QuestionOptions";

export default function Question(props){
    const count= props.count;
    const question=props.question;
    
    return <>

        <h1> Question {count}  </h1>

        <h2> {question.question} </h2>

        {/* Display the embeded components by calling the props.children */}
        {props.children}
       
        <h4>correct answer {question.correct_answer}. </h4>
    </>

}