import React from 'react';
import { Button } from './components';
import { Header } from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Button primary color="green">
        Yeap
      </Button>
      <Button primary color="red">
        Nope
      </Button>
      <Button>Listen</Button>
    </>
  );
};

export default App;
