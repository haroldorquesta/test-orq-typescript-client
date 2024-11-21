# RouterChatCompletions2RouterChatCompletionsRequestImageUrl

## Example Usage

```typescript
import { RouterChatCompletions2RouterChatCompletionsRequestImageUrl } from "orq-poc-typescript2/models/operations";

let value: RouterChatCompletions2RouterChatCompletionsRequestImageUrl = {
  url: "https://cautious-unit.biz/",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `url`                                                                                              | *string*                                                                                           | :heavy_check_mark:                                                                                 | Either a URL of the image or the base64 encoded image data.                                        |
| `detail`                                                                                           | [operations.RouterChatCompletions2Detail](../../models/operations/routerchatcompletions2detail.md) | :heavy_minus_sign:                                                                                 | Specifies the detail level of the image.                                                           |