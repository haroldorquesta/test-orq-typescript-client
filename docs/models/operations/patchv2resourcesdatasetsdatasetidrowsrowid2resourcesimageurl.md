# PatchV2ResourcesDatasetsDatasetIdRowsRowId2ResourcesImageUrl

## Example Usage

```typescript
import { PatchV2ResourcesDatasetsDatasetIdRowsRowId2ResourcesImageUrl } from "orq-node-client/models/operations";

let value: PatchV2ResourcesDatasetsDatasetIdRowsRowId2ResourcesImageUrl = {
  url: "https://well-to-do-pigpen.org/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | The orq.ai id of the image                                                           |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |