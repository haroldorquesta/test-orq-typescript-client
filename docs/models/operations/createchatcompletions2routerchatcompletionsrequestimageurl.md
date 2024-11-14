# CreateChatCompletions2RouterChatCompletionsRequestImageUrl

## Example Usage

```typescript
import { CreateChatCompletions2RouterChatCompletionsRequestImageUrl } from "orq-poc-typescript/models/operations";

let value: CreateChatCompletions2RouterChatCompletionsRequestImageUrl = {
  url: "https://curly-ostrich.info",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Either a URL of the image or the base64 encoded image data.                                        |
| `detail`                                                                                           | [operations.CreateChatCompletions2Detail](../../models/operations/createchatcompletions2detail.md) | :heavy_minus_sign:                                                                                 | Specifies the detail level of the image.                                                           |