import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs from './Tabs'
import Nav from './AppBar'

const muiTheme = getMuiTheme({});

class Navigation extends Component {

  constructor() {
    super();
  }

  render() {
    return (
        <nav id="nav">
          <Tabs class="nav__desktop" />
          <Nav class="nav__mobile" />
        </nav>
    );
  }
}
export default Navigation;
