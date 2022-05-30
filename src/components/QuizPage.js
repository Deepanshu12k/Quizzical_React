import React from 'react'
import './style.css';
import Mcqs from './Mcqs';
// import {withRouter} from "react-router-dom";

export default function QuizPage() { 
  const [quizData,setQuizData] = React.useState([]);
  const [loading,setloadingState] = React.useState(false);
  const [selectedAnswers,setSelectedAnswersArr] = React.useState(setCounterArray);
  const [allSelected, setAllSelected] = React.useState(false);
  const [rightAnswerCount,setRightAnswerCount] = React.useState(0);
  const [toggle,setToggle] = React.useState(false);
  const right_answerArr = [];

    React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => {
             setQuizData(data.results);
             setloadingState(true);
            }).catch(error => console.log(error))
    }, [])
   
   function setCounterArray(){
     const counterArr = [];
     for(let i=0;i<quizData.length;i++){
      counterArr.push(3);
     }  
    return counterArr;
   }
   
   function getDataArr(){
    const arr = [];
    
    if(loading)
    for(let i=0;i<quizData.length;i++){
      right_answerArr.push(quizData[i].correct_answer);

      arr.push({
       id:i,
       questions:quizData[i].question,
       incorrect_answers:quizData[i].incorrect_answers,
       correct_answer:quizData[i].correct_answer,
      });
    }
    
    return arr;
   }
  
   function fillSelectedAnswersArr(idx,check){
      console.log(idx,check);
      const answerArr = [...selectedAnswers];
      answerArr[idx] = check;
      setSelectedAnswersArr(answerArr);
      // const allFilled =false;
      let count = 0;

      for(let i = 0;i<answerArr.length;i++){
        if(answerArr[i]!==3){
         count++;
        }
      }
        
      if(loading && count===quizData.length) 
       setAllSelected(true);
   }

   function handleClick(){
     console.log("Yeaaah I am checking!");
     let count = 0;
     for(let i=0;i<selectedAnswers.length;i++){
       if(selectedAnswers[i]===2) count++;
     }
    setRightAnswerCount(count);
    setToggle(true);
   }
   
   const optionsData = getDataArr();
    const compArr =  optionsData.map(data => (
      <Mcqs 
        key={data.id}
        idx = {data.id}
        question = {data.questions}
        incorrect_answers = {data.incorrect_answers}
        correct_answer = {data.correct_answer}
        selected_answer = {fillSelectedAnswersArr}
        />
    ))
     
    function resetGame() {
      console.log("reset game");
      window.history.back()
    } 

  return loading===false?<h1>Loading......</h1>:(
      <div className="quizPage">
       {compArr}
       {toggle===false?<button className="customButton" disabled={!allSelected} onClick={handleClick}>Check answers</button>
       :<div className='gameOver'>
         <h3>You scored {rightAnswerCount}/{quizData.length} correct answers</h3>
         <button className="resetButton" onClick={resetGame}>Play again</button>
       </div>}
      </div>
    )
}
// return 