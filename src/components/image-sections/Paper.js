import React from 'react';
import '../../App.css';
import './Paper.css';


function Paper(props) {
    return (
        <div className='paper'>{props.title}</div>
    );
}

export default Paper;