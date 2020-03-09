import React from 'react';
import MainLayout from './containers/MainLayout/MainLayout';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/HeaderNavigation/HeaderNavigation';
import ChatBotLayout from './containers/ChatBotLayout/ChatBotLayout';

const navItems = [
  { name: 'Artikler', url: '/artikler' },
  { name: 'Chat', url: '/app' }
];

const app = () => {
  return (
    <Router>
      <div className="App">
        {/* <Nav navItems={navItems} /> */}
        <Switch>
          {/* <Route path="/" exact component={MainLayout} /> */}
          <Route path="/" component={ChatBotLayout} />
        </Switch>
      </div>
    </Router>
  );
};

export default app;
