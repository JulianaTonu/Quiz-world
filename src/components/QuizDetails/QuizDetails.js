import React from 'react';


const QuizDetails = ({quiz}) => {
    const {correctAnswer,id, options, question} =quiz

    return (
        <div>
            <h1>{question}</h1>
            
            <p>{options[0]}</p>
        </div>
    );
};

export default QuizDetails;