import React from 'react';
import { MeritCard, MeritHeader, Score } from './styles';


const Merit = ({ name, score }) => {
  return (
    <MeritCard>
      <MeritHeader>
        <h1>{name}</h1>
        <span>{score} puntos</span>
      </MeritHeader>
      <Score>
        <p>TotalScore</p>
        <div>
          <span>2</span> * <input type="text" placeholder="User score " />
        </div>
      </Score>
    </MeritCard>
  );
}

export default Merit;
