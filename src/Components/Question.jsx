import React from "react";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import { useEffect} from 'react'; 

const questions = {
    question1 : "What is your current mood?", 
    question2 : "How long should the movie be?", 
    question3 : "How old should the movie be?"
}

const question1 = ["Happy", "Sad", "Angry", "Indifferent"]
const question2 = ["Short", "Medium", "Long", "Doesn't matter" ]
const question3 = ["Last 10 years", "Last 20 years", "Last 30 years", "Really old", "Doesn't matter"]

const answers = [question1, question2, question3]

function Question({handleSubmit}){
    const [shake, setShake] = useState("")
    
    const [submitVis,setSubVis] = useState("none")
    const [backVis,setBackVis] = useState("none")
    const [nextVis,setNextVis] = useState("block")
    const [currentQuestion, setQuestion] = useState(0);
    let currentAnswer  = answers[currentQuestion]
    
    const [selectedAnswers, setAnswer] = useState(["","",""])


    const [actionWrapper, setWrapper] = useState("actionWrapper")
   
    const [currentSelected, setSelected] = useState("")
   
 /*   const submitQuestions = () => {
        //submit(currentAnswers)
        if(currentQuestion < answers.length){
            setQuestion(currentQuestion+ 1) ;
           // setAnswer(selectedAnswers[currentQuestion-1]) 
            setSelected("")
            console.log(selectedAnswers)

        }


    }
*/
const submitQuestions = () => {return}
    
const handleNext = () => {
    if (currentSelected !== "" && currentQuestion < answers.length - 1) {
       
        let updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestion] = currentSelected; 
        setAnswer(updatedAnswers); 

        
        setQuestion(prevQuestion => prevQuestion + 1);

       
       
        setSelected(updatedAnswers[currentQuestion + 1] || "");

        
        setBackVis("block"); 
        if (currentQuestion === answers.length - 2) {
            setNextVis("none");
            setSubVis("block");
        }

        console.log(updatedAnswers);
    } else if (currentSelected === "") {
        
        setShake("shake");
        setTimeout(() => setShake(""), 500);
    }
};

const handleBack = () => {
    if (currentQuestion > 0) {
      
        setQuestion(prevQuestion => {
            const newQuestion = prevQuestion - 1;

           
            setSelected(selectedAnswers[newQuestion] || "");

         
            if (newQuestion === 0) {
                setBackVis("none"); 
            }

            setNextVis("block"); 
            setSubVis("none"); 

            return newQuestion;
        });
    }
};

    useEffect(() =>{
        setWrapper("actionWrapperActive")
        return ()=>{


        }

    },[])


    useEffect(() => {
        console.log(currentQuestion)
        return () => {}
    },[currentQuestion])
  




return(
<div className="Question">
    <h1>{questions[`question${String(currentQuestion+1)}`]}</h1>
     <div className={`${actionWrapper} ${shake}`}>
    <ul>
        {currentAnswer.map((answer, index)=>(<li key={index}><button  onClick={()=>setSelected(answer)} className={currentSelected === answer? "selected":""}>{answer}</button></li> //if onclick function has an argument it must be passed as an arrow func

    ))}
    </ul>
   
    <button className="actionButton" style={{display: `${backVis}`}} onClick={handleBack}>Back</button> {/*if there is no parameter it can be passed like so <--*/}
    
    <button className="actionButton" style={{display: `${nextVis}`}} onClick={handleNext}>Next</button>
    <button className="actionButton" style={{display: `${submitVis}`}} onClick={() => {
        let updatedAnswers = [...selectedAnswers];
        updatedAnswers[answers.length - 1] = currentSelected; 
       
         
        handleSubmit(updatedAnswers)}}>Submit</button></div>
</div>

)

}

export default Question 