import React from 'react';
import Sign from '../Sign/Sign';
import './main.css';
import { zodiac } from '../../data.js';


export default function Main() {
  return (
    <div className='main'>
      { zodiac.map((element) => (
        <Sign key={element.name} name={element.name} dates={element.dates} />
      ))}
    </div>
  );
}
