import { IncomingMessage, ServerResponse } from "http";
import {
  statusCodeBadRequest,
  statusCodeOK,
  responseBadRequest,
  RequestResponse,
  Result,
} from "../types/type";
import { parseURL, testRequest } from "../regex";
import { saveProfile } from "../store";

export function CreateProfile(req: IncomingMessage, resp: ServerResponse) {
  const url = req.url?.replace("/", "");
  if (url === undefined) return;

  // if valid url
  if (testRequest(url)) {
    const data = parseURL(url);
    if (data != null) {
      // save in DB
      saveProfile(data);
      // send result to user
      sendResult(req, resp, data);
      return;
    }
  }
  badRequest(req, resp);
}

// send result to user
function sendResult(req: IncomingMessage, resp: ServerResponse, data: Result) {
  if (req.url === undefined) return;
  const result: RequestResponse = {
    statusCode: statusCodeOK,
    message: "ok",
    result: data,
  };

  resp.statusCode = statusCodeOK;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(result));
  resp.end();
}

// send 400 status code if req not valid
function badRequest(_: IncomingMessage, resp: ServerResponse) {
  resp.statusCode = statusCodeBadRequest;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(responseBadRequest));
  resp.end();
}
