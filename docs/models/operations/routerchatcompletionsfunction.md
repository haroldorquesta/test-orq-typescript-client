# RouterChatCompletionsFunction

## Example Usage

```typescript
import { RouterChatCompletionsFunction } from "orq-poc-typescript/models/operations";

let value: RouterChatCompletionsFunction = {
  name: "<value>",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and dashes, with a maximum length of 64. |
| `description`                                                                                                                 | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | A description of what the function does, used by the model to choose when and how to call the function.                       |
| `parameters`                                                                                                                  | [operations.ParametersT](../../models/operations/parameterst.md)                                                              | :heavy_minus_sign:                                                                                                            | The parameters the functions accepts, described as a JSON Schema object                                                       |
| `strict`                                                                                                                      | *boolean*                                                                                                                     | :heavy_minus_sign:                                                                                                            | Whether to enable strict schema adherence when generating the function call.                                                  |