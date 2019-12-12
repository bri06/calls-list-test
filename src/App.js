import React, { Fragment } from 'react';

import { GlobalStyles } from './GlobalStyles';

import { Header } from './styles/commons';

import List from './components/List/List';

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header>Listado de convocatorias</Header>
      <List />
    </Fragment>
  );
}

export default App;
