import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


import Drawer from './components/Drawer';
import Aiden from './components/Aiden';
import Vishal from './components/Vishal';

class App extends React.Component {
  state = {};

  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/devam' component={Drawer}></Route>
          <Route path='/aiden' component={Aiden}></Route>
          <Route path='/vishal' component={Vishal}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
