import React, { Fragment } from 'react';

import { Header } from './styles/commons';

import List from './components/List/List';


function App() {
  return (
    <Fragment>
      <Header>Listado de convocatorias</Header>
      <div className="App">
        <List />
      </div>
    </Fragment>
  );
}

export default App;
