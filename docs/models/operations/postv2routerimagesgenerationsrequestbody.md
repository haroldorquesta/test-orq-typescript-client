# PostV2RouterImagesGenerationsRequestBody

A request body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterImagesGenerationsRequestBody } from "orq-node-client/models/operations";

let value: PostV2RouterImagesGenerationsRequestBody = {
  prompt: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `prompt`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The prompt to generate an image                                        |
| `model`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | The model to use for generation                                        |
| `n`                                                                    | *number*                                                               | :heavy_minus_sign:                                                     | The number of images to generate                                       |
| `quality`                                                              | [operations.Quality](../../models/operations/quality.md)               | :heavy_minus_sign:                                                     | The quality of the image                                               |
| `responseFormat`                                                       | [operations.ResponseFormat](../../models/operations/responseformat.md) | :heavy_minus_sign:                                                     | The format of the image                                                |
| `size`                                                                 | [operations.Size](../../models/operations/size.md)                     | :heavy_minus_sign:                                                     | The size of the image                                                  |
| `style`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | The style of the image                                                 |
| `user`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | The user who created the image                                         |