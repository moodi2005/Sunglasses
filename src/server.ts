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

    if (url === "favicon.ico") {
      // favoicon
      return;
    } else if (staticRegex.test(url)) {
      // serve static files
      serveStatic(req, resp);
    } else if (regexSetProfileApi.test(url)) {
      // api/
      CreateProfile(req, resp);
    } else if (regexGetProfileApi.test(url)) {
      // profile
      getProfile(req, resp);
    } else if (url === "") {
      // homa page
      serveHtml(req, resp, "./static/home.html", 200);
    } else if (regexGetProfile.test(url)) {
      // if profile exist
      if (await checkUsernameExist(url)) {
        serveHtml(req, resp, "./static/profile.html", 200);
      } else {
        // if profile not exist
        serveHtml(req, resp, "./static/404.html", 404);
      }
    } else {
      // 404 page
      serveHtml(req, resp, "./static/404.html", 404);
    }
  }
);

server.listen(port, hostName);
