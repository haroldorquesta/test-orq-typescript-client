# PostV2RouterChatCompletions2RouterChatCompletionsRequestImageUrl

## Example Usage

```typescript
import { PostV2RouterChatCompletions2RouterChatCompletionsRequestImageUrl } from "orq-poc-typescript/models/operations";

let value: PostV2RouterChatCompletions2RouterChatCompletionsRequestImageUrl = {
  url: "https://curly-ostrich.info",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                          | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Either a URL of the image or the base64 encoded image data.                                                    |
| `detail`                                                                                                       | [operations.PostV2RouterChatCompletions2Detail](../../models/operations/postv2routerchatcompletions2detail.md) | :heavy_minus_sign:                                                                                             | Specifies the detail level of the image.                                                                       |