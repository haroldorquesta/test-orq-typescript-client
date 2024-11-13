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
* [File uploads](#file-uploads)
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
npm add orq-poc-typescript
```

### PNPM

```bash
pnpm add orq-poc-typescript
```

### Bun

```bash
bun add orq-poc-typescript
```

### Yarn

```bash
yarn add orq-poc-typescript zod

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
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
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

* [create](docs/sdks/contacts/README.md#create) - Update user information

### [deployments](docs/sdks/deployments/README.md)

* [getConfig](docs/sdks/deployments/README.md#getconfig) - Get config
* [invoke](docs/sdks/deployments/README.md#invoke) - Invoke
* [addMetrics](docs/sdks/deployments/README.md#addmetrics) - Add metrics
* [list](docs/sdks/deployments/README.md#list) - List all deployments

### [feedback](docs/sdks/feedback/README.md)

* [create](docs/sdks/feedback/README.md#create) - Submit feedback

### [files](docs/sdks/files/README.md)

* [upload](docs/sdks/files/README.md#upload) - Upload file
* [bulkUpload](docs/sdks/files/README.md#bulkupload) - Bulk upload file


### [remoteconfig](docs/sdks/remoteconfig/README.md)

* [getConfig](docs/sdks/remoteconfig/README.md#getconfig)

### [router](docs/sdks/router/README.md)

* [rerank](docs/sdks/router/README.md#rerank) - rerank route

#### [router.chat](docs/sdks/chat/README.md)


#### [router.chat.completions](docs/sdks/orqcompletions/README.md)

* [create](docs/sdks/orqcompletions/README.md#create) - Chat

#### [router.completions](docs/sdks/completions/README.md)

* [create](docs/sdks/completions/README.md#create) - legacy completions route

#### [router.embeddings](docs/sdks/embeddings/README.md)

* [create](docs/sdks/embeddings/README.md#create) - Embeddings

#### [router.images](docs/sdks/images/README.md)

* [generate](docs/sdks/images/README.md#generate)

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

- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Update user information
- [`deploymentsAddMetrics`](docs/sdks/deployments/README.md#addmetrics) - Add metrics
- [`deploymentsGetConfig`](docs/sdks/deployments/README.md#getconfig) - Get config
- [`deploymentsInvoke`](docs/sdks/deployments/README.md#invoke) - Invoke
- [`deploymentsList`](docs/sdks/deployments/README.md#list) - List all deployments
- [`feedbackCreate`](docs/sdks/feedback/README.md#create) - Submit feedback
- [`filesBulkUpload`](docs/sdks/files/README.md#bulkupload) - Bulk upload file
- [`filesUpload`](docs/sdks/files/README.md#upload) - Upload file
- [`remoteconfigGetConfig`](docs/sdks/remoteconfig/README.md#getconfig)
- [`routerChatCompletionsCreate`](docs/sdks/orqcompletions/README.md#create) - Chat
- [`routerCompletionsCreate`](docs/sdks/completions/README.md#create) - legacy completions route
- [`routerEmbeddingsCreate`](docs/sdks/embeddings/README.md#create) - Embeddings
- [`routerImagesGenerate`](docs/sdks/images/README.md#generate)
- [`routerRerank`](docs/sdks/router/README.md#rerank) - rerank route

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
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.deployments.invoke({
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

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.files.upload({});

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
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
import { Orq } from "orq-poc-typescript";

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
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
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

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `list` method may throw the following errors:

| Error Type          | Status Code | Content Type     |
| ------------------- | ----------- | ---------------- |
| errors.HonoApiError | 500         | application/json |
| errors.SDKError     | 4XX, 5XX    | \*/\*            |

```typescript
import { Orq } from "orq-poc-typescript";
import {
  HonoApiError,
  SDKValidationError,
} from "orq-poc-typescript/models/errors";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  let result;
  try {
    result = await orq.deployments.list({});

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
      case (err instanceof HonoApiError): {
        // Handle err.data$: HonoApiErrorData
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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  serverURL: "https://my.dev.orq.ai",
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
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
import { Orq } from "orq-poc-typescript";
import { HTTPClient } from "orq-poc-typescript/lib/http";

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

| Name     | Type | Scheme      | Environment Variable |
| -------- | ---- | ----------- | -------------------- |
| `openAI` | http | HTTP Bearer | `ORQ_OPEN_AI`        |

To authenticate with the API the `openAI` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  openAI: process.env["ORQ_OPEN_AI"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
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
import { Orq } from "orq-poc-typescript";

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
