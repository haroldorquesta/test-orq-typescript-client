# Public
(*public*)

## Overview

### Available Operations

* [deleteV2DeploymentsInvalidateDeploymentId](#deletev2deploymentsinvalidatedeploymentid) - Invalidates cache

## deleteV2DeploymentsInvalidateDeploymentId

Explicitly invalidate a cache of a deployment

### Example Usage

```typescript
import { Orq } from "orq-poc-typescript2";

const orq = new Orq({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  await orq.public.deleteV2DeploymentsInvalidateDeploymentId("2f8f323e-7a21-40c4-8729-612ffe6e2dcb");


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { OrqCore } from "orq-poc-typescript2/core.js";
import { publicDeleteV2DeploymentsInvalidateDeploymentId } from "orq-poc-typescript2/funcs/publicDeleteV2DeploymentsInvalidateDeploymentId.js";

// Use `OrqCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const orq = new OrqCore({
  apiKey: process.env["ORQ_API_KEY"] ?? "",
});

async function run() {
  const res = await publicDeleteV2DeploymentsInvalidateDeploymentId(orq, "2f8f323e-7a21-40c4-8729-612ffe6e2dcb");

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `deploymentId`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |