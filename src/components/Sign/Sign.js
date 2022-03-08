import React from 'react';
import './sign.css';
export default function Sign(props) {
  return (
    <div className='sign'>
      <img src={`${process.env.PUBLIC_URL}./zodiac-images/${props.sign}.png`}/>
    </div>
  );
}
