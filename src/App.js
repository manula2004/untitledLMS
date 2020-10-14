import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/layout/Dashboard'
import NavBar from './components/layout/NavBar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Chat from './components/Chat'
import Profile from './components/Profile'
import Events from './components/Events'
import Forum from './components/Forum'
import Resources from './components/Resources'
import Settings from './components/Settings'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
      <Route path='/profile' component={Profile} />
      <Route path='/events' component={Events} />
      <Route path='/forum' component={Forum} />
      <Route path='/resources' component={Resources} />
      <Route path='/settings' component={Settings} />
      <Route path='/chat' component={Chat} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
