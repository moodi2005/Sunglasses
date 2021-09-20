import { readFile } from "fs";
import { RequestResponse, Result, message } from "../types/type";
import { IncomingMessage, ServerResponse } from "http";

// send result to user
export function serveJson(
  req: IncomingMessage,
  resp: ServerResponse,
  statusCode: number,
  message: message,
  data?: Result
) {
  if (req.url === undefined) return;
  const result: RequestResponse = {
    statusCode: statusCode,
    message: message,
    result: data,
  };

  resp.statusCode = statusCode;
  resp.setHeader("Content-Type", "application/json");
  resp.write(JSON.stringify(result));
  resp.end();
}

export function serveHtml(
  _: IncomingMessage,
  resp: ServerResponse,
  htmlFileName: string,
  statusCode: number
) {
  readFile(htmlFileName, function (_, html) {
    resp.statusCode = statusCode;
    resp.setHeader("Content-Type", "text/html");
    resp.write(html);
    resp.end();
  });
}
