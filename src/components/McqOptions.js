import React from 'react'
import './style.css';

export default function McqOptions(props){
  const styles = {backgroundColor:props.isActive?'#D6DBF5':'#F5F7FB'};
 
  return  ( 
   <div className="mcq" style ={styles} onClick={props.holdOptionId}>
    {props.optionsText}
   </div>
  );
}

/* 



*/