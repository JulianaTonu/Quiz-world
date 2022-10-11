import React from 'react';
import './QuizDetails.css'

const QuizDetails = ({quiz}) => {
    const {correctAnswer,id, options, question} =quiz

    return (
        <div className='quiz-card'>
            <h3>{question}</h3>
            
            <p>1.{options[0]}</p>
            <p>2.{options[1]}</p>
            <p>3.{options[2]}</p>
            <p>4.{options[3]}</p>
        </div>
    );
};

export default QuizDetails;