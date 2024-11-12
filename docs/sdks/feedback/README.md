# Feedback
(*feedback*)

## Overview

### Available Operations

* [create5](#create5) - Submit feedback

## create5

Submit feedback for the LLM transaction via the API

### Example Usage

```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.feedback.create5({
    property: "rating",
    value: [
      "good",
    ],
    traceId: "67HTZ65Z9W91HSF51CW68KK1QH",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "orq-poc-typescript/core.js";
import { feedbackCreate5 } from "orq-poc-typescript/funcs/feedbackCreate5.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const res = await feedbackCreate5(orq, {
    property: "rating",
    value: [
      "good",
    ],
    traceId: "67HTZ65Z9W91HSF51CW68KK1QH",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostV2FeedbackRequestBody](../../models/operations/postv2feedbackrequestbody.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostV2FeedbackResponseBody](../../models/operations/postv2feedbackresponsebody.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |