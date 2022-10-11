import React from 'react';
import './QuizDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { faEye } from '@fortawesome/free-solid-svg-icons'
const QuizDetails = ({quiz}) => {
    const {correctAnswer, options, question} =quiz

const notify =() =>{
    toast(correctAnswer)
}


// const myNotify =() =>{
//     toast('answer is correct')
// }
// const myNotify2 =() =>{
//     toast('answer is wrong')
// }

const myNotify =( ) =>{
    if (correctAnswer === options[0]){
        toast("answer is correct")
    }
    else{
        toast("answer is wrong")
    }
 
}
const myNotify2 =( ) =>{
    if (correctAnswer === options[1]){
        toast("answer is correct")
    }
    else{
        toast("answer is wrong")
    }
 
}
const myNotify3 =( ) =>{
    if (correctAnswer === options[2]){
        toast("answer is correct")
    }
    else{
        toast("answer is wrong")
    }
 
}
const myNotify4 =( ) =>{
    if (correctAnswer=== options[3]){
        toast("answer is correct")
    }
    else{
        toast("answer is wrong")
    }
 
}


    return (
        <div className='text-center'>
            
           <div className='quiz-card'>

           <div className=' qustionicon'>
           <h4 className=''><small>{question}</small></h4>
           
           <div onClick={notify} className=''><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></div>
           <ToastContainer/>
           </div>

            <div className='options'>

            <p onClick={myNotify}><small>1. {options[0] }</small></p>
            <p onClick={myNotify2}><small>2. {options[1]}</small></p>
            <p onClick={myNotify3}><small>3. {options[2]}</small></p>
            <p onClick={myNotify4}><small>4. {options[3]}</small></p>

            </div>
            
           </div>
        </div>
    );
};

export default QuizDetails;