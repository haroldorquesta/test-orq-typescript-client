# PromptConfig

## Example Usage

```typescript
import { PromptConfig } from "orq-poc-typescript/models/operations";

let value: PromptConfig = {
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
  model: "Golf",
  modelType: "rerank",
  modelParameters: {},
  provider: "nvidia",
  messages: [
    {
      role: "assistant",
      content: [
        {
          type: "text",
          text: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `tools`                                                                                      | [operations.GetV2DeploymentsTools](../../models/operations/getv2deploymentstools.md)[]       | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `model`                                                                                      | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `modelType`                                                                                  | [operations.ModelType](../../models/operations/modeltype.md)                                 | :heavy_check_mark:                                                                           | The type of the model                                                                        |
| `modelParameters`                                                                            | [operations.ModelParameters](../../models/operations/modelparameters.md)                     | :heavy_check_mark:                                                                           | Model Parameters: Not all parameters apply to every model                                    |
| `provider`                                                                                   | [operations.GetV2DeploymentsProvider](../../models/operations/getv2deploymentsprovider.md)   | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `messages`                                                                                   | [operations.GetV2DeploymentsMessages](../../models/operations/getv2deploymentsmessages.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |