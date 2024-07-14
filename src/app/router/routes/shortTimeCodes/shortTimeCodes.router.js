import { Router, json } from 'express';
import { generateShortTimeCode } from '../../../models/shortTimeCodes/shortTimeCodes.model.js';

export const shortTimeCodesRouter = Router();

shortTimeCodesRouter.post('/',
    json(),
    async (req, res) => {
        const sessionId = req.body.sessionId;
        try {
            const shortTimeCode = await generateShortTimeCode(sessionId);
            res.json(shortTimeCode);
        } catch (e) {
            res.status(500);
            res.json({ error: e.message });
        }
    }
);
