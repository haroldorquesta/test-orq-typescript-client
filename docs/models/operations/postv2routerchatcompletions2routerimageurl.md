# PostV2RouterChatCompletions2RouterImageUrl

## Example Usage

```typescript
import { PostV2RouterChatCompletions2RouterImageUrl } from "orq-node-client/models/operations";

let value: PostV2RouterChatCompletions2RouterImageUrl = {
  url: "https://musty-mountain.net",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `url`                                                        | *string*                                                     | :heavy_check_mark:                                           | Either a URL of the image or the base64 encoded image data.  |
| `detail`                                                     | [operations.TwoDetail](../../models/operations/twodetail.md) | :heavy_minus_sign:                                           | Specifies the detail level of the image.                     |