import { createMessageProtocol } from "./lib/protocol";
import { z } from 'zod';

const messageProtocol = createMessageProtocol({
    events: {
        LOG_IN: {
            username: z.string(),
            password: z.string(),
        },
        LOG_OUT: {}
    }
});

const send = messageProtocol.createHandler(window.postMessage);

send({
    type: "LOG_IN",
    password: "123",
    username: "test"
});