import { getShortTimeCode } from '../shortTimeCodes/shortTimeCodes.model.js';
import { getSession } from '../sessions/sessions.model.js';
import { getSocketIOInstance } from '../../instances/socket-io-instance/socketIo.instance.js';

export function sendMessage(shortTimeCode, message) {
    const codeObject = getShortTimeCode(shortTimeCode);
    if (!codeObject) {
        throw new Error('Invalid code');
    }
    const session = getSession(codeObject.sessionId);
    if (!session) {
        throw new Error('Count not find a session for code');
    }

    if (session.websocketId) {
        getSocketIOInstance()?.to(session.websocketId).emit('message', message);
        console.log(`Message sent to websocket ${session.websocketId}`);
    } else {
        throw new Error('Could not find message transport for session');
    }

    return true;
}
