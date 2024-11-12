# PostV2RouterEmbeddingsRequestBody

## Example Usage

```typescript
import { PostV2RouterEmbeddingsRequestBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterEmbeddingsRequestBody = {
  input: "<value>",
  model: "Taurus",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `input`                                                                | *operations.Input*                                                     | :heavy_check_mark:                                                     | Input text to embed, encoded as a string or array of tokens.           |
| `model`                                                                | *string*                                                               | :heavy_check_mark:                                                     | ID of the model to use                                                 |
| `encodingFormat`                                                       | [operations.EncodingFormat](../../models/operations/encodingformat.md) | :heavy_minus_sign:                                                     | Type of the document element                                           |
| `dimensions`                                                           | *number*                                                               | :heavy_minus_sign:                                                     | The number of dimensions the resulting output embeddings should have.  |
| `user`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | A unique identifier representing your end-user                         |