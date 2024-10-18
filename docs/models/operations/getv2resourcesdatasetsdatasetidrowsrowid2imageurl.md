# GetV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl

## Example Usage

```typescript
import { GetV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl } from "orq-node-client/models/operations";

let value: GetV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl = {
  url: "https://mysterious-countess.net",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |