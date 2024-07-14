const shortTimeCodesRegistry = new Map();

const SHORT_TIME_CODE_TTL = 60 * 1000;

export function generateShortTimeCode(sessionId, { ttl } = {}) {
    let randomCode;

    do {
        randomCode = Math.ceil(Math.random() * 999999999).toString();
    } while (shortTimeCodesRegistry.has(randomCode));

    const codeObject = {
        code: randomCode,
        createdAt: Date.now(),
        ttl: ttl || SHORT_TIME_CODE_TTL,
        sessionId,
    }

    shortTimeCodesRegistry.set(randomCode, codeObject);

    setTimeout(() => {
        shortTimeCodesRegistry.delete(randomCode);
    }, codeObject.ttl);

    return codeObject;
}

export function getShortTimeCode(code) {
    return shortTimeCodesRegistry.get(code);
}
