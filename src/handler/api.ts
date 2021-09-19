import { IncomingMessage, ServerResponse } from "http";
import {
  statusCodeBadRequest,
  statusCodeOK,
  responseBadRequest,
  RequestResponse,
} from "../types/type";
import { testRequest } from "../regex";

export function CreateProfile(req: IncomingMessage, resp: ServerResponse) {
  const url = req.url?.replace("/", "");
  if (url === undefined) return;
  if (testRequest(url)) {
    parseRequest(req, resp);
  } else {
    badRequest(req, resp);
  }
}

// status code wqu
function parseRequest(req: IncomingMessage, resp: ServerResponse) {
  if (req.url === undefined) return;
  const result: RequestResponse = {
    statusCode: statusCodeOK,
    message: "ok",
  };
  resp.statusCode = statusCodeOK;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(result));
  console.log(req.url, "200");
  resp.end();
}

// send 400 status code if req not valid
function badRequest(req: IncomingMessage, resp: ServerResponse) {
  resp.statusCode = statusCodeBadRequest;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(responseBadRequest));
  console.log(req.url, "400");
  resp.end();
}
