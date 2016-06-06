import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

export class Projects extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <h3>Coming Soon</h3>
      </div>
    );
  }
}

export default Projects;
