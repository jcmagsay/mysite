import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({});

export class Contact extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Contact</h2>
        <h3>
          While this page is under construction, you can reach me at <a href="mailto:jcmagsay@gmail.com">jcmagsay@gmail.com</a>. Thank you for your patience.
        </h3>
      </div>
    );
  }
}

export default Contact;
