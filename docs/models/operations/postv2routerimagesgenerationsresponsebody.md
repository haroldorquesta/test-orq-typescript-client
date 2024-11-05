# PostV2RouterImagesGenerationsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { PostV2RouterImagesGenerationsResponseBody } from "orq-poc-typescript/models/operations";

let value: PostV2RouterImagesGenerationsResponseBody = {
  id: "<id>",
  created: 7730.84,
  choices: [
    {
      index: 9587.41,
    },
  ],
  model: "Alpine",
  object: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The unique identifier of the created image                                                                           |
| `created`                                                                                                            | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `choices`                                                                                                            | [operations.PostV2RouterImagesGenerationsChoices](../../models/operations/postv2routerimagesgenerationschoices.md)[] | :heavy_check_mark:                                                                                                   | The list of create image choices the model generated for the prompt.                                                 |
| `model`                                                                                                              | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The model used for the image creation.                                                                               |
| `object`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The object type                                                                                                      |