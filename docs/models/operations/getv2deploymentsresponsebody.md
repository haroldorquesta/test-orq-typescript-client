# GetV2DeploymentsResponseBody

List of deployments

## Example Usage

```typescript
import { GetV2DeploymentsResponseBody } from "orq-poc-typescript/models/operations";

let value: GetV2DeploymentsResponseBody = {
  object: "list",
  data: [
    {
      id: "831dffec-5163-420b-90c2-11a368db4204",
      created: "<value>",
      updated: "<value>",
      key: "<key>",
      description: "and first inside nearly creaking impish",
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
        model: "Taurus",
        modelType: "tts",
        modelParameters: {},
        provider: "perplexity",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "image_url",
                imageUrl: {
                  url: "https://cute-secrecy.org/",
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

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `object`                                                                               | [operations.GetV2DeploymentsObject](../../models/operations/getv2deploymentsobject.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [operations.GetV2DeploymentsData](../../models/operations/getv2deploymentsdata.md)[]   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `hasMore`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |