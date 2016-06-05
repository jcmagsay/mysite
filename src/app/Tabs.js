import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
const muiTheme = getMuiTheme({
  palette: {
  },
});

function handleActive(tab) {
  console.info('init handleActive');
}

const NavMenu = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Tabs>
      <Tab label="about"></Tab>
      <Tab label="projects"></Tab>
      <Tab label="contact" route="/home" onActive={handleActive}></Tab>
    </Tabs>
  </MuiThemeProvider>
);

export default NavMenu;
