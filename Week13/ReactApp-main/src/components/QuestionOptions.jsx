import { useState } from "react";

export default function QuestionOptions({questionNumber, options, setAnswers, userAnswers}){
    
    //state to hold the selectedAnswer
    const [selectedValue, setSelectedValue]= useState("");
   
    //function to handle the select option change
    const handleChange = (e) => {
        console.log('setting question for index',questionNumber)
        setSelectedValue(e.target.value);
        const key=questionNumber.toString();
        //sets the answer to the dictionary by the question index number
        setAnswers({...userAnswers, [key]:e.target.value});
        console.log(userAnswers) 
      };
    
    
   
    return <>
       
       <select   
        value={selectedValue}
        onChange={(e)=>handleChange(e)} >
            <option value=""> </option>
        {options.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
        ))}
        </select>

    </>

}
