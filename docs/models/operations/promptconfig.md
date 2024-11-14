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
  model: "Model 3",
  modelType: "vision",
  modelParameters: {},
  provider: "anthropic",
  messages: [
    {
      role: "system",
      content: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `tools`                                                                                  | [operations.DeploymentListTools](../../models/operations/deploymentlisttools.md)[]       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `model`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `modelType`                                                                              | [operations.ModelType](../../models/operations/modeltype.md)                             | :heavy_check_mark:                                                                       | The type of the model                                                                    |
| `modelParameters`                                                                        | [operations.ModelParameters](../../models/operations/modelparameters.md)                 | :heavy_check_mark:                                                                       | Model Parameters: Not all parameters apply to every model                                |
| `provider`                                                                               | [operations.DeploymentListProvider](../../models/operations/deploymentlistprovider.md)   | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `messages`                                                                               | [operations.DeploymentListMessages](../../models/operations/deploymentlistmessages.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |