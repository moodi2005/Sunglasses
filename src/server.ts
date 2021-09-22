import { createServer, IncomingMessage, ServerResponse } from "http";
import { hostName, port } from "../config/config.json";
import { CreateProfile, getProfile } from "./handler/profileApi";
import { serveHtml, serveStatic } from "./handler/serve";
import { checkUsernameExist } from "./regex";

const regexSetProfileApi = new RegExp(`^api\/createProfile\\?`);
const regexGetProfileApi = new RegExp(`^api\/getProfile\\?`);
const regexGetProfile = new RegExp(`[a-zA-Z0-9]+`);
const staticRegex = new RegExp(`^static\/.*`);

const server = createServer(
  async (req: IncomingMessage, resp: ServerResponse) => {
    // get sub dir
    const url = req.url?.replace("/", "");

    if (url === undefined) return;

    if (url === "") {
      serveHtml(req, resp, "./static/home.html", 200);
      return;
    } else if (url === "favicon.ico") {
      serveStatic(req, resp);
      return;
    }

    switch (true) {
      case staticRegex.test(url):
        // serve static files
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
          serveHtml(req, resp, "./static/profile.html", 200);
        } else {
          // if profile not exist
          serveHtml(req, resp, "./static/404.html", 404);
        }
        break;
      default:
        // 404 page
        serveHtml(req, resp, "./static/404.html", 404);
    }
  }
);

server.listen(port, hostName);
