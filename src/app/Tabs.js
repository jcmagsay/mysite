import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const muiTheme = getMuiTheme({});
class NavMenu extends Component{

  constructor(props) {
    super(props);
  }

  handleActive(tab) {
    console.info('init handleActive');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs className={this.props.class}>
          <Tab label="about"></Tab>
          <Tab label="projects"></Tab>
          <Tab label="contact" route="/home" onActive={this.handleActive}></Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}

export default NavMenu;
