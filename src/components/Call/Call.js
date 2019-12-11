import React from 'react';
import styles from './Call.module.css';
import Merit from '../Merit/Merit';


const Call = ({ id, title, description, merits = [] }) => {

  return(
    <div className={styles.calls}>
      <div className={styles.info}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className={styles.merit_container}>
        {
          merits && (
            merits.filter(({ callId }) => callId === id)
            .map(({  name, score }, index) => (
              <Merit key={index} name={name} score={score} />
            ))
          )}
      </div>
    </div>
  );
}

export default Call;
