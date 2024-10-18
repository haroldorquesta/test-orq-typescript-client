# ResponseBodyFinishReason

The reason the model stopped generating tokens.

## Example Usage

```typescript
import { ResponseBodyFinishReason } from "orq-node-client/models/operations";

let value: ResponseBodyFinishReason = "stop";
```

## Values

```typescript
"stop" | "length" | "content_filter" | "tool_calls"
```