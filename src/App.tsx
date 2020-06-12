import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import HomePage from './pages/HomePage';
import SessionPage from './pages/SessionPage';
import GamePage from './pages/GamePage';
import Drawer from './components/Drawer';

import 'bootstrap/dist/css/bootstrap.min.css';
import DummyPage from './pages/DummyPage';

class App extends React.Component {
  state = {};

  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/session/:id' component={SessionPage}></Route>
          <Route path='/game/:id' component={GamePage}></Route>
          <Route path='/draw' component={Drawer}></Route>
          <Route path='/dummy' component={DummyPage}></Route>
          <Route path='/' component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
