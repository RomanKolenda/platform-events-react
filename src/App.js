import React, { Component } from 'react';
import { configureCometD } from './cometdConnection'
import axios from 'axios';

class App extends Component {
  state = {};
  componentDidMount() {
    const url = 'https://login.salesforce.com/services/oauth2/token';
    let config = {
      grant_type: 'password',
      client_id: '3MVG9G9pzCUSkzZs6gQAyEhzXht1PG5hjagVBPLI7uBwGiXyj_odQVvdto1kKb0xkYahA6NeBWI.2hzvQAaI9',
      client_secret: 'B68825DDF943DE888D1FB6109E43A1F2167ACEE10B4A123F5BC5AC3D51ABCB6E',
      username: 'roman.kolenda@itech.art.group',
      password: 'Kain2896'
    }
    /* configureCometD(
      this.refs.app,
      'https:',
      'roman-kolenda-itechart-dev-ed.lightning.force.com',
      '00D2v000000R3WR!AQcAQFOHEgLnofgBVE5GiCY7eTtOWwWMQNkoYgUOj8nBBAPC2adyFRXh5RhMV_hZ8jSZtoj9zGzigllGOKriYCbY2O.GQbhv'
    ) */

      /* axios.post('https://login.salesforce.com/services/oauth2/token', config)
        .then(Response => {
          console.log(Response);
        })
        .catch(error => {
          console.log(error);
        });
 */

      axios({
        method: 'post',
        url: `${url}?grant_type=${config.grant_type}&client_id=${config.client_id}&client_secret=${config.client_secret}&username=${config.username}&password=${config.password}`,
        data: {},
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      })
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div ref="app">

      </div>
    );
  }
}


export default App;
