# Messages1

## Example Usage

```typescript
import { Messages1 } from "orq-poc-typescript/models/operations";

let value: Messages1 = {
  role: "system",
  content: [
    {
      type: "image_url",
      imageUrl: {
        url: "https://nifty-eggplant.net/",
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `role`                                                                                                                       | [operations.MessagesRole](../../models/operations/messagesrole.md)                                                           | :heavy_check_mark:                                                                                                           | The role of the messages author, in this case **system**.                                                                    |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | An optional name for the participant. Provides the model information to differentiate between participants of the same role. |
| `content`                                                                                                                    | *operations.MessagesContent*                                                                                                 | :heavy_check_mark:                                                                                                           | The contents of a particular role's message.                                                                                 |