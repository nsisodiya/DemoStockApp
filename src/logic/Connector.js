/**
 * Created by narendrasisodiya on 07/03/17.
 */
import { dispatcher } from '@nsisodiya/flux';

const exampleSocket = new WebSocket('ws://stocks.mnet.website');
exampleSocket.onmessage = function onMessage(event) {
  dispatcher.publish('NEW_UPDATE_CAME_FROM_SERVER', JSON.parse(event.data));
};
