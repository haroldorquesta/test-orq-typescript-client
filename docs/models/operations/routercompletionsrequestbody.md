# RouterCompletionsRequestBody

A request body that follows the official OpenAI schema

## Example Usage

```typescript
import { RouterCompletionsRequestBody } from "orq-poc-typescript/models/operations";

let value: RouterCompletionsRequestBody = {
  model: "Cruze",
  prompt: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                       | Type                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `model`                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                                                          | ID of the model to use                                                                                                                                                                                                                      |
| `prompt`                                                                                                                                                                                                                                    | *operations.Prompt*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                          | The prompt(s) to generate completions for, encoded as a string, array of strings, array of tokens, or array of token arrays.                                                                                                                |
| `echo`                                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                          | Echo back the prompt in addition to the completion                                                                                                                                                                                          |
| `frequencyPenalty`                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.                                                  |
| `maxTokens`                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | The maximum number of tokens that can be generated in the completion.                                                                                                                                                                       |
| `presencePenalty`                                                                                                                                                                                                                           | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.                                                               |
| `seed`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.                                                                  |
| `stop`                                                                                                                                                                                                                                      | *operations.Stop*                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                          | Up to 4 sequences where the API will stop generating further tokens. The returned text will not contain the stop sequence.                                                                                                                  |
| `stream`                                                                                                                                                                                                                                    | *boolean*                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                          | Whether to stream back partial progress.                                                                                                                                                                                                    |
| `temperature`                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.                                                        |
| `topP`                                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. |
| `user`                                                                                                                                                                                                                                      | *string*                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                          | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse.                                                                                                                                          |