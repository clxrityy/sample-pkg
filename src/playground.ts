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

const handler = messageProtocol.createHandler((event) => {});
