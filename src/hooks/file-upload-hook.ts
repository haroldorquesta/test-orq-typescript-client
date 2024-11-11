import {
  BeforeRequestContext,
  BeforeRequestHook,
} from "./types";

export class FileUploadHook
  implements BeforeRequestHook
{
  beforeRequest(hookCtx: BeforeRequestContext, request: Request): Request {
    // modify the request object before it is sent, such as adding headers or query parameters, or throw an error to stop the request from being sent
    console.info('hookCtx')
    console.info(JSON.stringify(hookCtx))
    console.info('request')
    console.info(JSON.stringify(request))
    return request;
  }
}