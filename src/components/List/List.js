import React, { useState, useEffect } from 'react';
import Call from '../Call/Call';
import { fetchCalls, fetchMerits } from '../../api';
import  { CallList } from './styles';

const List = () => {

  const [calls, setCalls] = useState([]);
  const [merits, setMerits] = useState([]);

  useEffect(() => {
    fetchCalls().then(setCalls);
    fetchMerits().then(setMerits);
  }, []);

  return(
    <CallList>
      {
        calls && calls.map(({ id, name, descriptions }) => (
          <Call key={id} id={id} title={name} description={descriptions} merits={merits}/>
        ))
      }
    </CallList>
  );
};

export default List;