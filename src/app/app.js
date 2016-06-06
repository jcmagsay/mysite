import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, IndexRoute, hashHistory } from 'react-router'
import Navigation from './Pages/Nav';
import About from './Pages/About';
import Process from './Pages/Process';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<Main />, document.getElementById('app'));
// render(<Navigation />, document.getElementById('navigation'));
// render(<Container />, document.getElementById('about'));

const app = document.getElementById("app");

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
