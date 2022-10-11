import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import QuizDetails from '../QuizDetails/QuizDetails';
import QuizDetails from './../QuizDetails/QuizDetails';
import './Quiz.css'

const Quiz = ({name}) => {

    const topic = useLoaderData()
   console.log('topic',topic.data.questions)


    return (
        <div className='container'>
          
           
            <h1 className='my-5 topic-name'>{topic.data.name}  
               Quiz</h1>
            {
                topic.data.questions.map(quiz=><QuizDetails
                key ={quiz.id}
                quiz ={quiz}
                ></QuizDetails>   )
            }
        </div>
        
    );
};

export default Quiz;