import React from 'react';
import {  useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Home.css'

const Home = () => {
    const topics = useLoaderData()
    console.log('mttopic',topics.data)
    return (
        <div className='container bg-white '>
            <div>
            <h1 className='my-4'>Welcome to Quiz World </h1>
            <div className='container header'>
            <img src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            
            <p>Here you can perticipate Quiz in four different topic.There are some important question about 
            those topic.you can develop and judge your skill by participate this quiz.Hope you enjoy it.Good Luck.</p>
            </div>
            </div>
<div className='col-6 data text-center'>

{
    topics.data.map(topic=><Topic
    key={topic.id}
    topic ={topic}
    ></Topic>)
}

</div>
            
        </div>
    );
};

export default Home;