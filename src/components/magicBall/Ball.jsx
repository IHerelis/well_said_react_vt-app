import React from 'react';
import './Ball.css';
import {animatedBall} from './functional.js';


const Ball = ({message, updateAnswer}) => {

  return (
    <div className='ball' 
      onClick={(e)=>{
        updateAnswer();
        animatedBall(e);
      }}>
      <div className='ball-board'>
        <div className='ball-board__message'>{message}</div>
      </div>
    </div>
  );
}

export default Ball;
