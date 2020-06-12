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

class App extends React.Component {
  state = {};

  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={HomePage}></Route>
          {/* <Route path='/session/:id' component={SessionPage}></Route>
          <Route path='/game/:id' component={GamePage}></Route> */}
          <Route path='/draw' component={Drawer}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
