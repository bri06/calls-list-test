import React from 'react';
import Merit from '../Merit/Merit';
import { CallCard, CallHeader, Merits } from './styles';


const Call = ({ id, title, description, merits = [] }) => {

  return(
    <CallCard data-cy={`call-${id}`}>
      <CallHeader>
        <h1>{title}</h1>
        <p>{description}</p>
      </CallHeader>
      <Merits data-cy={`merits-${id}`}>
        { merits && (
            merits.filter(({ callId }) => callId === id)
            .map(({ name, score }, index) => (
              <Merit key={index} id={`${id}-${index}`} name={name} score={score} />
        )))}
      </Merits>
    </CallCard>
  );
}

export default Call;
