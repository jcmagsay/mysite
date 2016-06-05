import React, {Component} from 'react';
import {render} from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import NavMenu from './Tabs';

const muiTheme = getMuiTheme({});

class Nav extends Component {

  constructor(props) {
    super(props);
  }

  handleTouchTap() {
    alert('onTouchTap triggered on the title component');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar className={this.props.class}/>
      </MuiThemeProvider>
    );
  }
}

export default Nav;
