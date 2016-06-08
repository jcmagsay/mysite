import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';


export class PaperAvatarContent extends Component {

  constructor(props) {
    super(props);

  }

  _showBtnGroup() {
    if (!this.props.showBtnGroup) return;
    return (
      <div className="btn-group">
        <FlatButton label="Process" primary={true} />
        <FlatButton label="Projects" secondary={true} />
      </div>
    );
  }

  render() {
    let url = `img ${this.props.title.replace(' ', '')}`;
    return (
      <Paper className="about__section" zDepth={1}>
        <Avatar
        className={url}
        size={150}
        />
        <div className="body">
        <div className="header">{this.props.title}</div>
        <div className="description">
          {this.props.body}
          {this._showBtnGroup(this)}
        </div>
        </div>
      </Paper>
    );
  }
}

export default PaperAvatarContent;
