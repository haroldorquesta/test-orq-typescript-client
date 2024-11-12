# ResponseBodyFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { ResponseBodyFinishReason } from "orq-poc-typescript/models/operations";

let value: ResponseBodyFinishReason = "content_filter";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```