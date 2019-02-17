import React, { Component } from 'react';

import Sidebar  from '../Sidebar/Sidebar';

class Main extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  ComponentWillReceiveProps(nextProps) {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Sidebar logOut={this.props.logOut}/>
    );
  }
}

export default Main;
