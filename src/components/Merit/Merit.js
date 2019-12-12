import React, { useState } from 'react';
import { MeritCard, MeritHeader, Score, Calculator, ScoreTitle } from './styles';
import { Input } from '../../styles/commons';

const Merit = ({ id, name, score }) => {

  const [total, setTotal] = useState(0);

  const onChangeValue = (evt) => {
    const value = evt.target.value * score;
    setTotal(value);
  };

  return (
    <MeritCard data-cy={`merit-${id}`}>
      <MeritHeader>
        <h1>{name}</h1>
        <span data-cy={`total-score-${id}`}>{total} puntos</span>
      </MeritHeader>
      <Score>
        <ScoreTitle>TotalScore</ScoreTitle>
        <div><span> = </span></div>
        <Calculator>
          <span>{score}</span> <span>*</span> <Input type="text" placeholder="User score " onChange={onChangeValue} />
        </Calculator>
      </Score>
    </MeritCard>
  );
}

export default Merit;
