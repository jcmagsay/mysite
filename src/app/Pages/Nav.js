import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from './Tabs';
import NavDrawer from './NavDrawer';

const muiTheme = getMuiTheme({});

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
