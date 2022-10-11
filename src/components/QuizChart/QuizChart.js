import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import ChartDetails from '../ChartDetails/ChartDetails';

const QuizChart = () => {
    const topics = useLoaderData()
    console.log('topic',topics.data)
    return (
        <div>
            <h1>hey chart</h1>

            {
    topics.data.map(topic=>
        <ChartDetails
        key={topic.id}
        topic ={topic}

        >
        </ChartDetails>
        
    )
}

        </div>
    );
};

export default QuizChart;