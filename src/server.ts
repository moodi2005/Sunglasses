import { createServer, IncomingMessage, ServerResponse } from "http";
import { hostName, port } from "../config/config.json";
import { CreateProfile } from "./handler/api";

const regex = new RegExp(`^api\/`);

const server = createServer((req: IncomingMessage, resp: ServerResponse) => {
  // get sub dir
  const url = req.url?.replace("/", "");
  if (url === undefined) return;

  // api/
  if (regex.test(url)) {
    CreateProfile(req, resp);
  }
});

server.listen(port, hostName);
