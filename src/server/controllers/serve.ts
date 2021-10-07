import { createReadStream, readFile } from "fs";
import { RequestResponse, Result, message } from "../types/type";
import { IncomingMessage, ServerResponse } from "http";
import { join } from "path";

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

export function serveStatic(req: IncomingMessage, resp: ServerResponse) {
  var path = req.url;
  if (path === undefined) return;
  path = path.replace("public/", "");
  const fileExtension = path.split(".").pop();
  var contentType: string;
  var staticPath = "./src/public/";

  switch (fileExtension) {
    case "ico":
      contentType = "image/x-icon";
      staticPath = "./src/public/img";
      break;
    case "svg":
      contentType = "image/svg+xml";
      break;
    case "css":
      contentType = "text/css";
      break;
    case "png":
      contentType = "image/png";
      break;
    case "jpg":
      contentType = "image/jpeg";
      break;
    case "ts":
      contentType = "text/x.typescript";
      break;
    default:
      staticPath = "./src/public";
      contentType = "text/javascript";
  }
  const filePath = join(staticPath, path);
  const files = createReadStream(filePath);
  resp.setHeader("Content-Type", contentType);
  resp.statusCode = 200;
  files.pipe(resp);
}
