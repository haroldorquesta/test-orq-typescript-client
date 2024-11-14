# ImageGenerationsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { ImageGenerationsResponseBody } from "orq-poc-typescript/models/operations";

let value: ImageGenerationsResponseBody = {
  id: "<id>",
  created: 3433.92,
  choices: [
    {
      index: 5910.27,
    },
  ],
  model: "Malibu",
  object: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `id`                                                                                       | *string*                                                                                   | :heavy_check_mark:                                                                         | The unique identifier of the created image                                                 |
| `created`                                                                                  | *number*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `choices`                                                                                  | [operations.ImageGenerationsChoices](../../models/operations/imagegenerationschoices.md)[] | :heavy_check_mark:                                                                         | The list of create image choices the model generated for the prompt.                       |
| `model`                                                                                    | *string*                                                                                   | :heavy_check_mark:                                                                         | The model used for the image creation.                                                     |
| `object`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | The object type                                                                            |