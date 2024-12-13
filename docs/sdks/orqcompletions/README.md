# OrqCompletions
(*router.chat.completions*)

## Overview

### Available Operations

* [create](#create) - Create Chat Completion

## create

For sending requests to chat completion models

### Example Usage

```typescript
import { Orq } from "orq-poc-typescript2";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const result = await orq.router.chat.completions.create({
    model: "Fiesta",
    messages: [
      {
        role: "user",
        content: "<value>",
      },
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "orq-poc-typescript2/core.js";
import { routerChatCompletionsCreate } from "orq-poc-typescript2/funcs/routerChatCompletionsCreate.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await routerChatCompletionsCreate(orq, {
    model: "Fiesta",
    messages: [
      {
        role: "user",
        content: "<value>",
      },
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "text",
            text: "<value>",
          },
          {
            type: "text",
            text: "<value>",
          },
        ],
      },
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RouterChatCompletionsRequestBody](../../models/operations/routerchatcompletionsrequestbody.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RouterChatCompletionsResponse](../../models/operations/routerchatcompletionsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |