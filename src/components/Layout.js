import React, {Component} from 'react';
import Navigation from './Nav';

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
