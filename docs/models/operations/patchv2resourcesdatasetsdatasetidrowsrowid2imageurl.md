# PatchV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl

## Example Usage

```typescript
import { PatchV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl } from "orq-poc-typescript/models/operations";

let value: PatchV2ResourcesDatasetsDatasetIdRowsRowId2ImageUrl = {
  url: "https://oblong-hepatitis.net/",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `url`                                                                                | *string*                                                                             | :heavy_check_mark:                                                                   | Either a URL of the image or the base64 encoded data URI.                            |
| `detail`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Specifies the detail level of the image. Currently only supported with OpenAI models |