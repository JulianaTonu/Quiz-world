import React from 'react';
import { Link} from 'react-router-dom';
// import Quiz from '../Quiz/Quiz';

import './Topic.css'



const Topic = ({topic}) => {

const {name,total,logo,id}=topic

    return (
        <div className='topic row'>
            
<img src={logo} alt="" />
<h3 className='text-white'>{name}</h3>
<p className='text-white fw-semibold'>Number of question:  {total}</p>

<Link to={`/topic/${id}`}><button className='btn btn-white text-white fw-bold quiz-btn'>Start Quiz</button>
           
            </Link>
           

            </div>
    );
};

export default Topic;