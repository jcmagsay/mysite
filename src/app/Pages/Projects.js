import React, {Component} from 'react';
import $ from 'jquery';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

export class Projects extends Component {

  constructor() {
    super();
  }

  getData() {
    $.ajax({
      type: "GET",
      url: "http://api.wunderground.com/api/1466b4b934b4e3fe/radar/q/autoip.json?maxlat=39.6&maxlon=-95.78&height=510&width=135&reproj.automerc=1",
      dataType: "jsonp"
    })
  }

  render() {
    this.getData();
    return (
      <div>
        <h2>Projects</h2>
        <h3>Coming Soon</h3>
      </div>
    );
  }
}

export default Projects;
