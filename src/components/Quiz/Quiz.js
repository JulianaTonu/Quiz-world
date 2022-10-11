import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import QuizDetails from '../QuizDetails/QuizDetails';
import QuizDetails from './../QuizDetails/QuizDetails';

const Quiz = () => {

    const topic = useLoaderData()
   console.log('topic',topic.data.questions)


    return (
        <div className='container'>
          
            <h1>hey quiz :{topic.data.quetions}</h1>
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