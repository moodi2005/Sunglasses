import { createServer, IncomingMessage, ServerResponse } from "http";
import { hostName, port } from "../../config/config.json";
import { CreateProfile, getProfile } from "./controllers/profileApi";
import { serveHtml, serveStatic } from "./controllers/serve";
import { checkUsernameExist } from "./regex";

const regexSetProfileApi = new RegExp(`^api\/createProfile\\?`);
const regexGetProfileApi = new RegExp(`^api\/getProfile\\?`);
const regexGetProfile = new RegExp(`[a-zA-Z0-9]+`);
const staticRegex = new RegExp(`^(public\/.*|favicon.ico)$`);
const homeRegex = new RegExp(`^$`);

const server = createServer(
  async (req: IncomingMessage, resp: ServerResponse) => {
    // get sub dir
    const url = req.url?.replace("/", "");

    if (url === undefined) return;

    switch (true) {
      case homeRegex.test(url):
        // serve home page
        serveHtml(req, resp, "./src/public/index.html", 200);
        break;
      case staticRegex.test(url):
        // serve static files | and favoicon
        serveStatic(req, resp);
        break;
      case regexSetProfileApi.test(url):
        // api/createProfile?
        CreateProfile(req, resp);
        break;
      case regexGetProfileApi.test(url):
        // api/getProfile?
        getProfile(req, resp);
        break;
      case regexGetProfile.test(url):
        if (await checkUsernameExist(url)) {
          serveHtml(req, resp, "./src/public/index.html", 200);
        } else {
          // if profile not exist
          serveHtml(req, resp, "./src/public/404.html", 404);
        }
        break;
      default:
        // 404 page
        serveHtml(req, resp, "./src/public/404.html", 404);
    }
  }
);

console.log(`Serve on http://${hostName}:${port} `);
server.listen(port, hostName);
