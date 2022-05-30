import React from 'react'
import './style.css';
import McqOptions from './McqOptions';
import {nanoid} from "nanoid";

export default function Mcqs(props) {

   console.log(props.correct_answer);
   const [isSafeToLoad,setSafeToLoad] = React.useState(props.incorrect_answers[0]!==null);
   const [optionsArr,setOptionsArr] = React.useState(isSafeToLoad && createNewArr);
  // const [buttonEnable,setButtonEnable] = React.useState(false);
  // const [selectedOption,setSelectedOption]  = React.useState(props.correct_answer);
    

    function createNewArr(){
      const newArr = [];
      let i=0;
      if(props.incorrect_answers[i])
      for(;i<props.incorrect_answers.length;i++){
        newArr.push({
          mcqText:props.incorrect_answers[i],
          isActive:false,
          id:nanoid(),
         });
      }
      newArr.push({
        mcqText:props.correct_answer,
        isActive:false,
        id:nanoid(),
       });
      //  i = newArr.length-1;

      // shuffle array 
      const rndm =  Math.ceil(Math.random() * 3);
      const shuffle = newArr[newArr.length-1];
      newArr[newArr.length-1] = newArr[rndm];
      newArr[rndm] = shuffle;

      return newArr;
    }
  
  
     
  function holdOptionId(id){
    // console.log(id);

    // setOptionsArr(oldState => oldState.map(option => {
    //   return option.id === id ? 
    //       {...option, isActive: true} :
    //       {...option, isActive:false}
    // }));
    
    const helperArr = [...optionsArr];
    for(let i = 0;i<helperArr.length;i++){
      if(id===helperArr[i].id){
       props.selected_answer(props.idx,helperArr[i].mcqText===props.correct_answer?2:1);
       helperArr[i].isActive = true; 
      }else{
        helperArr[i].isActive = false;
      }
    }
    setOptionsArr(helperArr);
   
  }  

  const optionsMem = optionsArr.map(options => (
        <McqOptions 
          key= {options.id} 
          optionsText={options.mcqText} 
          isActive={options.isActive} 
          holdOptionId={()=>holdOptionId(options.id)}
        />)
  );
    
    return ( 
      <div className="mcqComp">  
       <h3>{props.question}</h3>         
     <div>  
       <div className="mcq-cont">
       {optionsMem} 
      </div>
      <hr className="hrStyles"/>
      </div>
      </div>
    )
}
