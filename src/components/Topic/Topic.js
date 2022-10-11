import React from 'react';
import { Link} from 'react-router-dom';
import './Topic.css'


const Topic = ({topic}) => {

const {name,logo,id}=topic
    return (
        <div className='topic row'>
            
<img src={logo} alt="" />
<h3>Name:{name}</h3>

<Link to={`/topic/${id}`}><button className='btn btn-warning'>Start Quiz</button>
           
            </Link>

            </div>
    );
};

export default Topic;