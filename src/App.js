import React from 'react';

import styles from './styles/main.scss';
import FullCmp from './containers/full-cmp';
import Home from './components/Home/Home';
import Auxi from './hoc/Auxi';

function App() {
  return (
    <Auxi>
      <Home />
    </Auxi>
  );
}

export default App;
