import React from 'react';
import './style.css';
// import QuizPage from './QuizPage';
import {Link} from 'react-router-dom';

export default function HomePage(){
    
    return (
    <div className="App">
        <div className='shape1'></div>
        <div className="mid-cont">
         <h1 className='logo-text'>Quizzical</h1>
         <h2 className='description'>Ready to check your knowledge</h2>
         <Link to="/QuizPage"><button className="customButton" >Start quiz</button></Link>
        </div>
        <div className='shape2'></div>  
    </div>
    );
}