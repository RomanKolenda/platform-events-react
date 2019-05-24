import React, { Component } from 'react';
import { configureCometD } from './cometdConnection'
import axios from 'axios';

class App extends Component {
  state = {};
  componentDidMount() {
    /* configureCometD(
      this.refs.app,
      'https:',
      'roman-kolenda-itechart-dev-ed.lightning.force.com',
      '00D2v000000R3WR!AQcAQGmR0h6hVao9SHL.xqYAF7HChalChDF7ZOnALPyBmRBTkdw_5gAMp8uMJz2Fzm6GxyLvcLY3MGHDmx.P36eVTxcpgVdv'
    ) */
      axios.get('https://login.salesforce.com')
        .then(Response => {
          console.log(Response);
        });
  }

  render() {
    return (
      <div ref="app">

      </div>
    );
  }
}


export default App;
