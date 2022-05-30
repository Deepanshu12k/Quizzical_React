import React from 'react';
import './App.css';
import HomePage from'./components/HomePage';
import QuizPage from './components/QuizPage';
import Error from './components/Error';
import {BrowserRouter,Routes, Route} from "react-router-dom";

export default function App() {
  
    return (
       <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage/>} />
         <Route path="/QuizPage" element={<QuizPage/>} />
         <Route  path="*" element={<Error/>}/> {/* when nothing matches-> Good practice */}
        </Routes>
       </BrowserRouter>
    );
}


