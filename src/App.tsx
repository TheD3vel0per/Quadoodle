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
import DummyPage from './pages/DummyPage';
import CombinedPage from './pages/CombinedPage';
import WaitingPage from './pages/WaitingPage';
import AboutUsPage from './pages/AboutUs';

import 'bootstrap/dist/css/bootstrap.min.css';
import JoinPage from './pages/JoinPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  state = {};

  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path='/session/:id' component={SessionPage}></Route>
            <Route path='/game/:id' component={GamePage}></Route>
            <Route path='/waiting/:id' component={WaitingPage}></Route>
            <Route path='/combined/:id' component={CombinedPage}></Route>
            <Route path='/join' component={JoinPage}></Route>
            <Route path='/about-us' component={AboutUsPage}></Route>
            <Route path='/privacy-policy' component={PrivacyPolicyPage}></Route>
            <Route path='/dummy' component={DummyPage}></Route>
            <Route path='/draw' component={Drawer}></Route>
            <Route path='/' component={HomePage}></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
