import { IncomingMessage, ServerResponse } from "http";
import {
  statusCodeBadRequest,
  statusCodeOK,
  responseBadRequest,
  RequestResponse,
  Result,
} from "../types/type";
import { parseURL, testRequest } from "../regex";

export function CreateProfile(req: IncomingMessage, resp: ServerResponse) {
  const url = req.url?.replace("/", "");
  if (url === undefined) return;

  // if valid url
  if (testRequest(url)) {
    const data = parseURL(url);
    console.log(data);
    if (data != null) {
      parseRequest(req, resp, data);
      return;
    }
  }
  badRequest(req, resp);
}

// status code wqu
function parseRequest(
  req: IncomingMessage,
  resp: ServerResponse,
  data: Result
) {
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
function badRequest(req: IncomingMessage, resp: ServerResponse) {
  console.log(req.url);
  resp.statusCode = statusCodeBadRequest;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(responseBadRequest));
  resp.end();
}
