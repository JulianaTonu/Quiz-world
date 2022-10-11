import React from 'react';
import './QuizDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { faEye } from '@fortawesome/free-solid-svg-icons'
const QuizDetails = ({quiz}) => {
    const {correctAnswer,id, options, question} =quiz


    return (
        <div className='text-center'>
            
           <div className='quiz-card'>

           <div className='d-flex qustionicon'>
           <h4 className=''><small>{question}</small></h4>
           
           <div className=''><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></div>
           </div>

            <div className='options'>

            <p><small>1. {options[0]}</small></p>
            <p><small>2. {options[1]}</small></p>
            <p><small>3. {options[2]}</small></p>
            <p><small>4. {options[3]}</small></p>

            </div>
            
           </div>
        </div>
    );
};

export default QuizDetails;