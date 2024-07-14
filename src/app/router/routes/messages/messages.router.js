import { Router, json } from 'express';
import { sendMessage } from '../../../models/messages/messages.model.js';

export const messagesRouter = Router();

messagesRouter.post('/',
    json(),
    async (req, res) => {
        try {
            const { code, message } = req.body;
            const result = await sendMessage(code, message);
            res.json({ result });
        } catch (e) {
            res.status(500);
            res.json({ error: e.message });
        }
    }
);
