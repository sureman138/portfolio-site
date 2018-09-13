import React from 'react';
import Index from './indexpage';
import { Switch, Route } from 'react-router-dom';

import Contact from './contact';
import Projects from './projects';


const Main = () => (
  <Switch>
    <Route exact path='/' component={Index} />

    <Route path='/contact' component={Contact} />
    <Route path='/projects' component={Projects} />
  </Switch>
)

export default Main;
