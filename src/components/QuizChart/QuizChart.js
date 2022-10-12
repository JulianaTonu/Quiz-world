import React from 'react';
import {  useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const QuizChart = () => {
    const topics = useLoaderData().data
    // console.log('topic',topics.data)
    return (
        <div>
            <h1 className='my-5'>Simple LineChart of Total Quiz</h1>
            <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={topics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
           <CartesianGrid strokeDasharray="3 3" />
          {/* <div>{total}</div> */}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      

        </div>
    );
};

export default QuizChart;