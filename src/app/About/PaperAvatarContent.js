import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';

const muiTheme = getMuiTheme({});

export class PaperAvatarContent extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    let url = `img ${this.props.title.replace(" ", "")}`;
    return (
        <Paper className="about__section" zDepth={1}>
          <Avatar
            className={url}
            size={150}
          />
          <div className="body">
            <div className="header">{this.props.title}</div>
            <div className="description"></div>
          </div>
        </Paper>
    );
  }
}

export default PaperAvatarContent;
