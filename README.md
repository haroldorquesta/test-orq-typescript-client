# orq-node-client

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *orq-node-client* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=orq-node-client&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/orq/orq). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

[Dev] orq.ai API: The Orquesta API

For more information about the API: [orq.ai Documentation](https://docs.orq.ai)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Server-sent event streaming](#server-sent-event-streaming)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [contacts](docs/sdks/contacts/README.md)

* [postContacts](docs/sdks/contacts/README.md#postcontacts) - Update user information

### [deployments](docs/sdks/deployments/README.md)

* [postV2DeploymentsGetConfig](docs/sdks/deployments/README.md#postv2deploymentsgetconfig) - Get config
* [postV2DeploymentsInvoke](docs/sdks/deployments/README.md#postv2deploymentsinvoke) - Invoke
* [postV2DeploymentsIdMetrics](docs/sdks/deployments/README.md#postv2deploymentsidmetrics) - Add metrics

### [feedback](docs/sdks/feedback/README.md)

* [postFeedback](docs/sdks/feedback/README.md#postfeedback) - Submit feedback

### [files](docs/sdks/files/README.md)

* [postV2Files](docs/sdks/files/README.md#postv2files) - Upload file
* [postV2FilesBulk](docs/sdks/files/README.md#postv2filesbulk) - Bulk upload file


### [public](docs/sdks/public/README.md)

* [postV2DeploymentsGetConfig](docs/sdks/public/README.md#postv2deploymentsgetconfig) - Get config
* [postV2DeploymentsInvoke](docs/sdks/public/README.md#postv2deploymentsinvoke) - Invoke
* [postV2DeploymentsIdMetrics](docs/sdks/public/README.md#postv2deploymentsidmetrics) - Add metrics
* [postV2Files](docs/sdks/public/README.md#postv2files) - Upload file
* [postV2FilesBulk](docs/sdks/public/README.md#postv2filesbulk) - Bulk upload file
* [postV2RouterEmbeddings](docs/sdks/public/README.md#postv2routerembeddings) - Embeddings
* [postV2RouterChatCompletions](docs/sdks/public/README.md#postv2routerchatcompletions) - Chat
* [postV2RouterCompletions](docs/sdks/public/README.md#postv2routercompletions) - legacy completions route
* [postV2RouterRerank](docs/sdks/public/README.md#postv2routerrerank) - rerank route
* [postV2RouterImagesGenerations](docs/sdks/public/README.md#postv2routerimagesgenerations)
* [postV2ResourcesDatasets](docs/sdks/public/README.md#postv2resourcesdatasets) - Create a dataset
* [getV2ResourcesDatasets](docs/sdks/public/README.md#getv2resourcesdatasets) - Get all datasets
* [deleteV2ResourcesDatasetsDatasetId](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetid) - Delete a dataset
* [getV2ResourcesDatasetsDatasetId](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetid) - Get one  dataset
* [patchV2ResourcesDatasetsDatasetId](docs/sdks/public/README.md#patchv2resourcesdatasetsdatasetid) - Update a dataset
* [postV2ResourcesDatasetsDatasetIdRowsBulk](docs/sdks/public/README.md#postv2resourcesdatasetsdatasetidrowsbulk) - Create a list of dataset rows
* [deleteV2ResourcesDatasetsDatasetIdRowsBulk](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetidrowsbulk) - Delete a list of dataset rows
* [postV2ResourcesDatasetsDatasetIdRows](docs/sdks/public/README.md#postv2resourcesdatasetsdatasetidrows) - Create a dataset row
* [getV2ResourcesDatasetsDatasetIdRows](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetidrows) - Retrieve all dataset rows
* [deleteV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetidrowsrowid) - Delete a dataset row
* [getV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetidrowsrowid) - Get one dataset row
* [patchV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/public/README.md#patchv2resourcesdatasetsdatasetidrowsrowid) - Update a dataset row

### [resources](docs/sdks/resources/README.md)

* [postV2ResourcesDatasets](docs/sdks/resources/README.md#postv2resourcesdatasets) - Create a dataset
* [getV2ResourcesDatasets](docs/sdks/resources/README.md#getv2resourcesdatasets) - Get all datasets
* [deleteV2ResourcesDatasetsDatasetId](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetid) - Delete a dataset
* [getV2ResourcesDatasetsDatasetId](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetid) - Get one  dataset
* [patchV2ResourcesDatasetsDatasetId](docs/sdks/resources/README.md#patchv2resourcesdatasetsdatasetid) - Update a dataset
* [postV2ResourcesDatasetsDatasetIdRowsBulk](docs/sdks/resources/README.md#postv2resourcesdatasetsdatasetidrowsbulk) - Create a list of dataset rows
* [deleteV2ResourcesDatasetsDatasetIdRowsBulk](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetidrowsbulk) - Delete a list of dataset rows
* [postV2ResourcesDatasetsDatasetIdRows](docs/sdks/resources/README.md#postv2resourcesdatasetsdatasetidrows) - Create a dataset row
* [getV2ResourcesDatasetsDatasetIdRows](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetidrows) - Retrieve all dataset rows
* [deleteV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetidrowsrowid) - Delete a dataset row
* [getV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetidrowsrowid) - Get one dataset row
* [patchV2ResourcesDatasetsDatasetIdRowsRowId](docs/sdks/resources/README.md#patchv2resourcesdatasetsdatasetidrowsrowid) - Update a dataset row

### [router](docs/sdks/router/README.md)

* [postV2RouterEmbeddings](docs/sdks/router/README.md#postv2routerembeddings) - Embeddings
* [postV2RouterChatCompletions](docs/sdks/router/README.md#postv2routerchatcompletions) - Chat
* [postV2RouterCompletions](docs/sdks/router/README.md#postv2routercompletions) - legacy completions route
* [postV2RouterRerank](docs/sdks/router/README.md#postv2routerrerank) - rerank route
* [postV2RouterImagesGenerations](docs/sdks/router/README.md#postv2routerimagesgenerations)

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`contactsPostContacts`](docs/sdks/contacts/README.md#postcontacts) - Update user information
- [`deploymentsPostV2DeploymentsGetConfig`](docs/sdks/deployments/README.md#postv2deploymentsgetconfig) - Get config
- [`deploymentsPostV2DeploymentsIdMetrics`](docs/sdks/deployments/README.md#postv2deploymentsidmetrics) - Add metrics
- [`deploymentsPostV2DeploymentsInvoke`](docs/sdks/deployments/README.md#postv2deploymentsinvoke) - Invoke
- [`feedbackPostFeedback`](docs/sdks/feedback/README.md#postfeedback) - Submit feedback
- [`filesPostV2Files`](docs/sdks/files/README.md#postv2files) - Upload file
- [`filesPostV2FilesBulk`](docs/sdks/files/README.md#postv2filesbulk) - Bulk upload file
- [`publicDeleteV2ResourcesDatasetsDatasetId`](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetid) - Delete a dataset
- [`publicDeleteV2ResourcesDatasetsDatasetIdRowsBulk`](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetidrowsbulk) - Delete a list of dataset rows
- [`publicDeleteV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/public/README.md#deletev2resourcesdatasetsdatasetidrowsrowid) - Delete a dataset row
- [`publicGetV2ResourcesDatasets`](docs/sdks/public/README.md#getv2resourcesdatasets) - Get all datasets
- [`publicGetV2ResourcesDatasetsDatasetId`](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetid) - Get one  dataset
- [`publicGetV2ResourcesDatasetsDatasetIdRows`](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetidrows) - Retrieve all dataset rows
- [`publicGetV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/public/README.md#getv2resourcesdatasetsdatasetidrowsrowid) - Get one dataset row
- [`publicPatchV2ResourcesDatasetsDatasetId`](docs/sdks/public/README.md#patchv2resourcesdatasetsdatasetid) - Update a dataset
- [`publicPatchV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/public/README.md#patchv2resourcesdatasetsdatasetidrowsrowid) - Update a dataset row
- [`publicPostV2DeploymentsGetConfig`](docs/sdks/public/README.md#postv2deploymentsgetconfig) - Get config
- [`publicPostV2DeploymentsIdMetrics`](docs/sdks/public/README.md#postv2deploymentsidmetrics) - Add metrics
- [`publicPostV2DeploymentsInvoke`](docs/sdks/public/README.md#postv2deploymentsinvoke) - Invoke
- [`publicPostV2Files`](docs/sdks/public/README.md#postv2files) - Upload file
- [`publicPostV2FilesBulk`](docs/sdks/public/README.md#postv2filesbulk) - Bulk upload file
- [`publicPostV2ResourcesDatasets`](docs/sdks/public/README.md#postv2resourcesdatasets) - Create a dataset
- [`publicPostV2ResourcesDatasetsDatasetIdRows`](docs/sdks/public/README.md#postv2resourcesdatasetsdatasetidrows) - Create a dataset row
- [`publicPostV2ResourcesDatasetsDatasetIdRowsBulk`](docs/sdks/public/README.md#postv2resourcesdatasetsdatasetidrowsbulk) - Create a list of dataset rows
- [`publicPostV2RouterChatCompletions`](docs/sdks/public/README.md#postv2routerchatcompletions) - Chat
- [`publicPostV2RouterCompletions`](docs/sdks/public/README.md#postv2routercompletions) - legacy completions route
- [`publicPostV2RouterEmbeddings`](docs/sdks/public/README.md#postv2routerembeddings) - Embeddings
- [`publicPostV2RouterImagesGenerations`](docs/sdks/public/README.md#postv2routerimagesgenerations)
- [`publicPostV2RouterRerank`](docs/sdks/public/README.md#postv2routerrerank) - rerank route
- [`resourcesDeleteV2ResourcesDatasetsDatasetId`](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetid) - Delete a dataset
- [`resourcesDeleteV2ResourcesDatasetsDatasetIdRowsBulk`](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetidrowsbulk) - Delete a list of dataset rows
- [`resourcesDeleteV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/resources/README.md#deletev2resourcesdatasetsdatasetidrowsrowid) - Delete a dataset row
- [`resourcesGetV2ResourcesDatasets`](docs/sdks/resources/README.md#getv2resourcesdatasets) - Get all datasets
- [`resourcesGetV2ResourcesDatasetsDatasetId`](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetid) - Get one  dataset
- [`resourcesGetV2ResourcesDatasetsDatasetIdRows`](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetidrows) - Retrieve all dataset rows
- [`resourcesGetV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/resources/README.md#getv2resourcesdatasetsdatasetidrowsrowid) - Get one dataset row
- [`resourcesPatchV2ResourcesDatasetsDatasetId`](docs/sdks/resources/README.md#patchv2resourcesdatasetsdatasetid) - Update a dataset
- [`resourcesPatchV2ResourcesDatasetsDatasetIdRowsRowId`](docs/sdks/resources/README.md#patchv2resourcesdatasetsdatasetidrowsrowid) - Update a dataset row
- [`resourcesPostV2ResourcesDatasets`](docs/sdks/resources/README.md#postv2resourcesdatasets) - Create a dataset
- [`resourcesPostV2ResourcesDatasetsDatasetIdRows`](docs/sdks/resources/README.md#postv2resourcesdatasetsdatasetidrows) - Create a dataset row
- [`resourcesPostV2ResourcesDatasetsDatasetIdRowsBulk`](docs/sdks/resources/README.md#postv2resourcesdatasetsdatasetidrowsbulk) - Create a list of dataset rows
- [`routerPostV2RouterChatCompletions`](docs/sdks/router/README.md#postv2routerchatcompletions) - Chat
- [`routerPostV2RouterCompletions`](docs/sdks/router/README.md#postv2routercompletions) - legacy completions route
- [`routerPostV2RouterEmbeddings`](docs/sdks/router/README.md#postv2routerembeddings) - Embeddings
- [`routerPostV2RouterImagesGenerations`](docs/sdks/router/README.md#postv2routerimagesgenerations)
- [`routerPostV2RouterRerank`](docs/sdks/router/README.md#postv2routerrerank) - rerank route

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.deployments.postV2DeploymentsInvoke({
    key: "<key>",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();

```

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `getV2ResourcesDatasetsDatasetId` method may throw the following errors:

| Error Type                                         | Status Code                                        | Content Type                                       |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| errors.GetV2ResourcesDatasetsDatasetIdResponseBody | 404                                                | application/json                                   |
| errors.SDKError                                    | 4XX, 5XX                                           | \*/\*                                              |

```typescript
import { Orq } from "orq-node-client";
import {
  GetV2ResourcesDatasetsDatasetIdResponseBody,
  SDKValidationError,
} from "orq-node-client/models/errors";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  let result;
  try {
    result = await orq.public.getV2ResourcesDatasetsDatasetId({
      datasetId: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof GetV2ResourcesDatasetsDatasetIdResponseBody): {
        // Handle err.data$: GetV2ResourcesDatasetsDatasetIdResponseBodyData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://my.dev.orq.ai` | None |

```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  serverIdx: 0,
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  serverURL: "https://my.dev.orq.ai",
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Orq } from "orq-node-client";
import { HTTPClient } from "orq-node-client/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Orq({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                 | Type                 | Scheme               | Environment Variable |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `bearer`             | http                 | HTTP Bearer          | `ORQ_BEARER`         |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Orq } from "orq-node-client";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.postContacts({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Orq } from "orq-node-client";

const sdk = new Orq({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ORQ_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=orq-node-client&utm_campaign=typescript)
