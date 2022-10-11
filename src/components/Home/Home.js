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

            <h1>hlwwwwwww quiz: </h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima neque saepe cumque quisquam exercitationem culpa nam incidunt architecto, ex totam.</p>

            </div>
<div className='col-6 data '>

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