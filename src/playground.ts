import { createMessageProtocol } from "./lib/protocol";
import { z } from 'zod';

const protocol = createMessageProtocol({
    events: {
        LOG_IN: {
            username: z.string(),
            password: z.string(),
        },
        LOG_OUT: {}
    }
});

// iframe.ts

const sendToParent = protocol.createHandler(window.parent.postMessage);

const handledParentEvent = protocol.createHandler((event) => {
    console.log(event)
})

window.addEventListener("message", (event) => {
    handledParentEvent(event.data);
});

// parent.ts

const iframe = document.querySelector("iframe");

const sendToChild = protocol.createHandler(iframe!.contentWindow!.postMessage);