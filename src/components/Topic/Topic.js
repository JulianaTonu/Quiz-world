import React from 'react';
import './Topic.css'
const Topic = ({topic}) => {
const {name,logo}=topic
    return (
        <div className='topic row'>
            <div className='col-6'>
            <h1>hey topic {topic.id}</h1>

<img src={logo} alt="" />
<h3>Name:{name}</h3>
<button>Start Quiz</button>
            </div>
        </div>
    );
};

export default Topic;