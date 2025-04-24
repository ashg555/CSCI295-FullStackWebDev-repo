import { useEffect, useState } from "react";
import QuestionOptions from "./QuestionOptions";

export default function Question(props){
    const count= props.count;
    const question=props.question;

    // Function to decode HTML entities
    const decodeHtml = (html) => {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };
    
    return <>

        <h1> Question {count}  </h1>

        <h2> {decodeHtml(question.question)} </h2>

        {/* Display the embeded components by calling the props.children */}
        {props.children}
       
        <h4>correct answer {decodeHtml(question.correct_answer)}. </h4>
    </>

}