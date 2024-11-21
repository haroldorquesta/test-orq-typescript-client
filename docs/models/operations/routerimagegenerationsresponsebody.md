# RouterImageGenerationsResponseBody

A response body that follows the official OpenAI schema

## Example Usage

```typescript
import { RouterImageGenerationsResponseBody } from "orq-poc-typescript/models/operations";

let value: RouterImageGenerationsResponseBody = {
  id: "<id>",
  created: 7263.42,
  choices: [
    {
      index: 5369.23,
    },
  ],
  model: "Accord",
  object: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The unique identifier of the created image                                                             |
| `created`                                                                                              | *number*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `choices`                                                                                              | [operations.RouterImageGenerationsChoices](../../models/operations/routerimagegenerationschoices.md)[] | :heavy_check_mark:                                                                                     | The list of create image choices the model generated for the prompt.                                   |
| `model`                                                                                                | *string*                                                                                               | :heavy_check_mark:                                                                                     | The model used for the image creation.                                                                 |
| `object`                                                                                               | *string*                                                                                               | :heavy_check_mark:                                                                                     | The object type                                                                                        |