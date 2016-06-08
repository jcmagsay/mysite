import React, {Component} from 'react';
import Tabs from './Tabs';
import NavDrawer from './NavDrawer';

class Navigation extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <nav id="nav">
          <NavDrawer class="nav__mobile" />
          <Tabs class="nav__desktop" />
        </nav>
    );
  }
}
export default Navigation;
