import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

const muiTheme = getMuiTheme({});

class NavMenu extends Component{

  constructor(props) {
    super(props);
  }

  handleActive(tab) {
    window.location.href = `#${tab.props.route}`;
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Tabs className={this.props.class}>
          <Tab label="about" route="/" onActive={this.handleActive.bind(this)}></Tab>
          <Tab label="process" route="/process" onActive={this.handleActive.bind(this)}></Tab>
          <Tab label="projects" route="/projects" onActive={this.handleActive.bind(this)}></Tab>
          <Tab label="contact" route="/contact" onActive={this.handleActive.bind(this)}></Tab>
        </Tabs>
      </MuiThemeProvider>
    );
  }
}

export default NavMenu;
