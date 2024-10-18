# PostV2ResourcesDatasetsDatasetIdRowsBulk2ResourcesImageUrl

## Example Usage

```typescript
import { PostV2ResourcesDatasetsDatasetIdRowsBulk2ResourcesImageUrl } from "orq-node-client/models/operations";

let value: PostV2ResourcesDatasetsDatasetIdRowsBulk2ResourcesImageUrl = {
  url: "https://strange-morbidity.name/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |