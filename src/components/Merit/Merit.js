import React from 'react';
import styles from './Merit.module.css';

const Merit = ({ name, score }) => {
  return (
    <div className={styles.merit}>
      <div className={styles.title}>
        <h1>{name}</h1>
        <span>{score} puntos</span>
      </div>
      <div className={styles.score}>
        <p>TotalScore</p>
        <div className={styles.userscore}>
          <span>2</span> * <input type="text" placeholder="User score " />
        </div>
      </div>
    </div>
  );
}

export default Merit;
