# PostV2RouterCompletionsChoices

## Example Usage

```typescript
import { PostV2RouterCompletionsChoices } from "orq-node-client/models/operations";

let value: PostV2RouterCompletionsChoices = {
  finishReason: "length",
  index: 2586.84,
  text: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `finishReason`                                                     | [operations.FinishReason](../../models/operations/finishreason.md) | :heavy_check_mark:                                                 | The reason the model stopped generating tokens.                    |
| `index`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The index of the choice in the list of choices.                    |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |