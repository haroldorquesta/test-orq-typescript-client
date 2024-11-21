# DeploymentsResponseBody

List of deployments

## Example Usage

```typescript
import { DeploymentsResponseBody } from "orq-poc-typescript2/models/operations";

let value: DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "82b69227-5fcb-4e18-99f4-310eac4917fe",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description:
        "frank now lashes save shakily hence bitterly considering barring above",
      promptConfig: {
        tools: [
          {
            type: "function",
            function: {
              name: "<value>",
              parameters: {
                type: "object",
                properties: {
                  "key": "<value>",
                },
              },
            },
          },
        ],
        model: "PT Cruiser",
        modelType: "chat",
        modelParameters: {},
        provider: "azure",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://another-horst.name",
                },
              },
            ],
          },
        ],
      },
      version: "<value>",
    },
  ],
  hasMore: false,
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `object`                                                                     | [operations.DeploymentsObject](../../models/operations/deploymentsobject.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [operations.DeploymentsData](../../models/operations/deploymentsdata.md)[]   | :heavy_check_mark:                                                           | N/A                                                                          |
| `hasMore`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |