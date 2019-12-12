import React from 'react';

import { AppWrapper } from './styles';

import { Header } from './styles/commons';
import List from './components/List/List';
import Button from './components/Button/Button';

import { GlobalStyles } from './GlobalStyles';



function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header>Listado de convocatorias</Header>
      <List />
      <Button>Guardar</Button>
    </AppWrapper>
  );
}

export default App;
