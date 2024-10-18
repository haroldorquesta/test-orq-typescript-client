# UpdatedBy

User model returned from the API

## Example Usage

```typescript
import { UpdatedBy } from "orq-node-client/models/operations";

let value: UpdatedBy = {
  id: "b64b5bd3-f242-4578-ade3-917557b1eb2f",
  email: "Clifton59@hotmail.com",
  displayName: "Quinten49",
  logoUrl: "https://earnest-safe.com",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `email`                  | *string*                 | :heavy_check_mark:       | Email of the user        |
| `displayName`            | *string*                 | :heavy_check_mark:       | Display name of the user |
| `logoUrl`                | *string*                 | :heavy_check_mark:       | URL of the user logo     |