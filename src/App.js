import React from 'react';
import {Grid} from '@material-ui/core';
import Header from './components/Header'
import MainScreen from './components/MainScreen'

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <MainScreen />
    </Grid>
  );
}

export default App;
