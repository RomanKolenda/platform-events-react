import React, { Component } from 'react';
import { configureCometD } from './cometdConnection'
import axios from 'axios';

class App extends Component {
  state = {};
  componentDidMount() {
    configureCometD(
      this.refs.app,
      'https:',
      'roman-kolenda-itechart-dev-ed.lightning.force.com',
      '00D2v000000R3WR!AQcAQFOHEgLnofgBVE5GiCY7eTtOWwWMQNkoYgUOj8nBBAPC2adyFRXh5RhMV_hZ8jSZtoj9zGzigllGOKriYCbY2O.GQbhv'
    )
      /* let config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': '*'
        }
      }
      axios.get('https://qa-chat.equeum.com/api', config)
        .then(Response => {
          console.log(Response);
        })
        .catch(error => {
          console.log(error);
        }); */
  }

  render() {
    return (
      <div ref="app">

      </div>
    );
  }
}


export default App;
