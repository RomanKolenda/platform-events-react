import React, { Component } from 'react';
import { configureCometD } from './cometdConnection'

class App extends Component {

  componentDidMount() {
    configureCometD(
      this.refs.app,
      'https:',
      'roman-kolenda-itechart-dev-ed.lightning.force.com',
      '00D2v000000R3WR!AQcAQGmR0h6hVao9SHL.xqYAF7HChalChDF7ZOnALPyBmRBTkdw_5gAMp8uMJz2Fzm6GxyLvcLY3MGHDmx.P36eVTxcpgVdv'
    )
  }

  render() {
    return (
      <div ref="app">

      </div>
    );
  }
}


export default App;
