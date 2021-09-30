import { IncomingMessage, ServerResponse } from "http";
import { Result, statusCodeBadRequest, statusCodeOK } from "../types/type";
import { getUsername, parseURL, testRequest } from "../regex";
import { getProfileDB, saveProfileDB } from "../db";
import { serveJson } from "./serve";

export function CreateProfile(req: IncomingMessage, resp: ServerResponse) {
  const url = req.url?.replace("/", "");
  if (url === undefined) return;

  // if valid url
  if (testRequest(url)) {
    const data = parseURL(url);
    if (data != null) {
      // save in DB
      saveProfileDB(data);

      // send result to user
      serveJson(req, resp, statusCodeOK, "OK", data);
      return;
    }
  }
  serveJson(req, resp, statusCodeBadRequest, "ERROR");
}

// get profile
// if exist: serve it as json
// else: return NOT EXIST error
export async function getProfile(req: IncomingMessage, resp: ServerResponse) {
  const url = req.url?.replace("/", "");
  if (url === undefined) return;

  // parse username from url
  const username = getUsername(url);

  if (username === undefined) return;
  const userData = await getProfileDB(username);
  // if user profile not created
  if (userData === undefined) {
    serveJson(req, resp, 404, "NOT EXIST");
    return;
  }

  // save data in Result
  const data: Result = {
    username: userData.username,
    email: userData.email,
    twitter: userData.twitter,
    github: userData.github,
  };

  // send result to user
  serveJson(req, resp, statusCodeOK, "OK", data);
}
