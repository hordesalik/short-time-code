import { Router } from 'express';
import { sessionsRouter } from './routes/sessions/session.router.js';
import { shortTimeCodesRouter } from './routes/shortTimeCodes/shortTimeCodes.router.js';
import { messagesRouter } from './routes/messages/messages.router.js';

export const appRouter = new Router();

appRouter.use('/sessions', [
    sessionsRouter,
]);
appRouter.use('/short-time-codes', [
    shortTimeCodesRouter,
]);
appRouter.use('/messages', [
    messagesRouter,
]);
