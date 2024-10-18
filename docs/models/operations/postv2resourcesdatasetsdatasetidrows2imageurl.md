# PostV2ResourcesDatasetsDatasetIdRows2ImageUrl

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRows2ImageUrl } from "orq-node-client/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRows2ImageUrl = {
  url: "https://wordy-straw.info",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |