# CreateChatCompletions2RouterChatCompletionsImageUrl

## Example Usage

```typescript
import { CreateChatCompletions2RouterChatCompletionsImageUrl } from "orq-poc-typescript/models/operations";

let value: CreateChatCompletions2RouterChatCompletionsImageUrl = {
  url: "https://buzzing-underneath.org",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | Either a URL of the image or the base64 encoded image data.  |
| `detail`                                                     | [operations.TwoDetail](../../models/operations/twodetail.md) | :heavy_minus_sign:                                           | Specifies the detail level of the image.                     |