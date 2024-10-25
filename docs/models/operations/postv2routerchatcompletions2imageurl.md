# PostV2RouterChatCompletions2ImageUrl

## Example Usage

```typescript
import { PostV2RouterChatCompletions2ImageUrl } from "orq-poc-typescript/models/operations";

let value: PostV2RouterChatCompletions2ImageUrl = {
  url: "https://excellent-petticoat.biz/",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. |
| `detail`                                                    | [operations.Detail](../../models/operations/detail.md)      | :heavy_minus_sign:                                          | Specifies the detail level of the image.                    |