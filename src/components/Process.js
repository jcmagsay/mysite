import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const muiTheme = getMuiTheme({});

export class Process extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper id="process" zDepth={1}>
          <div className="process__design"></div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default Process;
