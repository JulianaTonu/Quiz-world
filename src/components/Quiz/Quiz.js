import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import QuizDetails from '../QuizDetails/QuizDetails';

const Quiz = () => {

    const topic = useLoaderData()
   console.log('topic',topic.data.questions)


    return (
        <div>
          
            <h1>hey quiz :{topic.data.quetions}</h1>
            {
                topic.data.questions.map(quiz=>   <li> tonu : {quiz.id}</li>)
            }
        </div>
        
    );
};

export default Quiz;