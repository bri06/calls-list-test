import React, { useState, useEffect, Fragment } from 'react';
import Call from '../Call/Call';
import { fetchCalls, fetchMerits } from '../../api';


const List = () => {

  const [calls, setCalls] = useState([]);
  const [merits, setMerits] = useState([]);

  useEffect(() => {
    fetchCalls().then(setCalls);
    fetchMerits().then(setMerits);
  }, []);

  return(
    <Fragment>
      {
        calls && calls.map(({ id, name, descriptions }) => (
          <Call key={id} id={id} title={name} description={descriptions} merits={merits}/>
        ))
      }
    </Fragment>
  );
};

export default List;