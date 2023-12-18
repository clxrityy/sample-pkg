# `sample-pkg`

Gives you type-safe message passing (using zod) between two different environments.

```ts
// protocol.ts

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

// type safe sender

const sendToParent = protocol.createHandler(window.parent.postMessage);

// type safe receiver

const handledParentEvent = protocol.createHandler((event) => {
    console.log(event)
})

window.addEventListener("message", (event) => {
    handledParentEvent(event.data);
});
```

## installation

```node
npm i @clxrity/sample-pkg
```

```node
pnpm add @clxrity/sample-pkg
```

```node
yarn add @clxrity/sample-pkg
```
