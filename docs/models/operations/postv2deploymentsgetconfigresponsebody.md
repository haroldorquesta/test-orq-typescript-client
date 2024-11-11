# PostV2DeploymentsGetConfigResponseBody

The deployment configuration

## Example Usage

```typescript
import { PostV2DeploymentsGetConfigResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2DeploymentsGetConfigResponseBody = {
  id: "<id>",
  provider: "<value>",
  model: "Ranchero",
  version: "<value>",
  messages: [
    {
      role: "system",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    },
  ],
  parameters: {},
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                   | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | A unique identifier for the response. Can be used to add metrics to the transaction.                                                                                   |
| `provider`                                                                                                                                                             | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The provider of the model                                                                                                                                              |
| `model`                                                                                                                                                                | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The model of the configuration                                                                                                                                         |
| `type`                                                                                                                                                                 | [operations.PostV2DeploymentsGetConfigDeploymentsPublicType](../../models/operations/postv2deploymentsgetconfigdeploymentspublictype.md)                               | :heavy_minus_sign:                                                                                                                                                     | The type of the model. Current `chat`,`completion` and `image` are supported                                                                                           |
| `version`                                                                                                                                                              | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | The current version of the deployment                                                                                                                                  |
| `messages`                                                                                                                                                             | [operations.PostV2DeploymentsGetConfigMessages](../../models/operations/postv2deploymentsgetconfigmessages.md)[]                                                       | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |
| `parameters`                                                                                                                                                           | [operations.PostV2DeploymentsGetConfigParameters](../../models/operations/postv2deploymentsgetconfigparameters.md)                                                     | :heavy_check_mark:                                                                                                                                                     | Model Parameters: Not all parameters apply to every model                                                                                                              |
| `tools`                                                                                                                                                                | [operations.PostV2DeploymentsGetConfigTools](../../models/operations/postv2deploymentsgetconfigtools.md)[]                                                             | :heavy_minus_sign:                                                                                                                                                     | A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. |