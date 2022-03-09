import React from 'react';
import Sign from '../Sign/Sign';
import './main.css';
import { zodiac } from '../../data.js';
import background from '../../background.jpg';

export default function Main() {
  return (
    <div className="main" style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((element) => (
        <Sign key={element.name} name={element.name} dates={element.dates} />
      ))}
    </div>
  );
}
