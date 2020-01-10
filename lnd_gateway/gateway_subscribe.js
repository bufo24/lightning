const EventEmitter = require('events');

const {encode} = require('cbor');

const emitEvent = require('./emit_event');
const wsUrl = require('./ws_url');

/** Subscribe to a gateway stream response

  {
    bearer: <Bearer Authentication Token String>
    call: {
      arguments: <Call Arguments Object>
      method: <Call Method String>
      server: <Call Server String>
    }
    websocket: <WebSocket Constructor Function>
    url: <LND Gateway URL String>
  }

  @throws
  <Error>

  @returns
  {
    cancel: <Terminate Subscription Function>
    on: <Event Listener Function>
  }
*/
module.exports = ({bearer, call, websocket, url}) => {
  const emitter = new EventEmitter();

  const bytes = encode({
    arguments: call.arguments,
    macaroon: bearer,
    method: call.method,
    server: call.server,
  });

  const ws = new websocket(wsUrl({url}).url);

  ws.on('close', () => {});
  ws.on('error', err => emitter.emit('error', err));
  ws.on('message', message => emitEvent({emitter, message}))
  ws.on('open', () => ws.send(new Uint8Array(bytes)));

  emitter.cancel = () => ws.close();

  return emitter;
};