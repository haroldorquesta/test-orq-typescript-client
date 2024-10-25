# UpdatedBy

User model returned from the API

## Example Usage

```typescript
import { UpdatedBy } from "orq-poc-typescript/models/operations";

let value: UpdatedBy = {
  id: "35baedde-4568-4a40-a64f-eda58d1c0dc0",
  email: "Cecelia98@yahoo.com",
  displayName: "Zachery45",
  logoUrl: "https://obvious-convection.com/",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `email`                  | *string*                 | :heavy_check_mark:       | Email of the user        |
| `displayName`            | *string*                 | :heavy_check_mark:       | Display name of the user |
| `logoUrl`                | *string*                 | :heavy_check_mark:       | URL of the user logo     |