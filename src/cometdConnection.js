import ReactDOM from 'react-dom';
import cometdLib from 'cometd';

export const configureCometD = (refElement, protocol, hostname, sessionId) => {
  let cometd = new cometdLib.CometD();

  let componentsToUpdate = ['myComponent1', 'myComponent2'];

  cometd.configure({
    // url: `${protocol}//${hostname}/cometd/45.0`,
    url: 'https://roman-kolenda-itechart-dev-ed.lightning.force.com/cometd/42.0/',
    requestHeaders: { Authorization: `Bearer ${sessionId}` },
    logLevel: 'debug',
    appendMessageTypeToURL: false
  });
  cometd.websocketEnabled = false;

  cometd.handshake(
    handshakerReply => {
      if (handshakerReply.successful) {
        cometd.subscribe(
          '/event/Cloud_News__e',
          platformEvent => {
            if (platformEvent && platformEvent.data.payload) {
              let customEvent = new CustomEvent(
                'updateComponent',
                {
                  detail: {
                    componentsToUpdate,
                    data: {}
                  },
                  bubbles: true
                }
              );
              ReactDOM.findDOMNode(refElement).dispatchEvent(customEvent);
            }
          }
        );
      }
      else {
        console.error('Failed to connect to CometD.', handshakerReply);
      }
    }
  );



}