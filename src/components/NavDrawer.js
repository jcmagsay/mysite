import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const muiTheme = getMuiTheme({});

class NavDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle() {
    this.setState({open: !this.state.open})
  }

  handleClose() {
    window.location.href = `#${this.route}`;
    this.setState({open: false})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <section className={this.props.class}>
          <AppBar
            className={this.props.class}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
          />
          <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
            <MenuItem ref={this.route = '/about'} onTouchTap={this.handleClose.bind(this)}>ABOUT</MenuItem>
            <MenuItem ref={this.route = '/about'} onTouchTap={this.handleClose.bind(this)}>PROJECTS</MenuItem>
            <MenuItem ref={this.route = '/about'} onTouchTap={this.handleClose.bind(this)}>CONTACT</MenuItem>
          </Drawer>
        </section>
      </MuiThemeProvider>
    );
  }
}
export default NavDrawer;
