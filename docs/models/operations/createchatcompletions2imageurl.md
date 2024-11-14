# CreateChatCompletions2ImageUrl

## Example Usage

```typescript
import { CreateChatCompletions2ImageUrl } from "orq-poc-typescript/models/operations";

let value: CreateChatCompletions2ImageUrl = {
  url: "https://affectionate-captain.name/",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `url`                                                       | *string*                                                    | :heavy_check_mark:                                          | Either a URL of the image or the base64 encoded image data. |
| `detail`                                                    | [operations.Detail](../../models/operations/detail.md)      | :heavy_minus_sign:                                          | Specifies the detail level of the image.                    |