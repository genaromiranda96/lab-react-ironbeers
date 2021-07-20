import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import Homepage from './views/Homepage';
import Allbeers from './components/Allbeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';


import { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/beers' component={Allbeers}></Route>
        <Route exact path='/random-beer' component={RandomBeer}></Route>
        <Route exact path='/beers/:dynamicId' component={SingleBeer}></Route>

      </Switch>
    </div>
  );
}

export default App;
