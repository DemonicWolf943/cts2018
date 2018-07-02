import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className = "home">
        { Header() }
        <Card />
      </div>
    );
  }
}

// TODO
// placeholder
// gray and green number labels
// genereate btn space/cand-height
// content labels

export default Home;
