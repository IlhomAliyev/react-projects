import React from 'react';
import { questions } from '../data/questions';

const Game = ({ question, onClickVariant, step }) => {
  const percentage = Math.round(step / questions.length * 100);
  
  return (
    <div>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClickVariant(index)} key={variant}>
            {variant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
