import React from 'react';
import { MeritCard, MeritHeader, Score, Calculator, ScoreTitle } from './styles';
import { Input } from '../../styles/commons';

const Merit = ({ name, score }) => {
  return (
    <MeritCard>
      <MeritHeader>
        <h1>{name}</h1>
        <span>{score} puntos</span>
      </MeritHeader>
      <Score>
        <ScoreTitle>TotalScore</ScoreTitle>
        <div><span> = </span></div>
        <Calculator>
          <span>2</span> <span>*</span> <Input type="text" placeholder="User score " />
        </Calculator>
      </Score>
    </MeritCard>
  );
}

export default Merit;
