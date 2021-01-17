import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Homepage/HomePage.component';

const TshirtPage = () => {
  <div>
    <h1>T-Shirts</h1>
  </div>
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/T-shirt' component={TshirtPage} />
      </Switch>
    </div>
  );
}

export default App;
