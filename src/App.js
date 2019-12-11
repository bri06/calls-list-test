import React, { Fragment } from 'react';

import List from './components/List/List';

import styles from './App.module.css';


function App() {
  return (
    <Fragment>
      <h1 className={styles.title_app}>Listado de convocatorias</h1>
      <div className="App">
        <List />
      </div>
    </Fragment>
  );
}

export default App;
