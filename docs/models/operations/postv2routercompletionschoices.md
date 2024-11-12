# PostV2RouterCompletionsChoices

## Example Usage

```typescript
import { PostV2RouterCompletionsChoices } from "orq-poc-typescript/models/operations";

let value: PostV2RouterCompletionsChoices = {
  finishReason: "stop",
  index: 9077.33,
  text: "<value>",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `finishReason`                                                     | [operations.FinishReason](../../models/operations/finishreason.md) | :heavy_check_mark:                                                 | The reason the model stopped generating tokens.                    |
| `index`                                                            | *number*                                                           | :heavy_check_mark:                                                 | The index of the choice in the list of choices.                    |
| `text`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |