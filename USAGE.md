<!-- Start SDK Example Usage [usage] -->
```typescript
import { Orq } from "orq-poc-typescript";

const orq = new Orq({
  bearer: process.env["ORQ_BEARER"] ?? "",
});

async function run() {
  const result = await orq.contacts.create({
    externalId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->