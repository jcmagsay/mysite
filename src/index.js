import 'core-js/fn/object/assign';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import About from './components/About';
import Process from './components/Process';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Layout from './components/Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const app = document.getElementById('app');

// Render the main component into the dom
render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="process" component={Process}></Route>
      <Route path="projects" component={Projects}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>,
  app
);
