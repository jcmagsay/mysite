import React from 'react';
import {render} from 'react-dom';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import NavMenu from './Tabs';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Nav = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <AppBar
      title={NavMenu()}
      iconElementLeft={<IconButton></IconButton>}
    >
    <div id="navmenu"></div>
    </AppBar>
  </MuiThemeProvider>
);

export default Nav;
