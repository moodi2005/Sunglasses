import { Result, profileDB } from "./types/type";

// save profile in DB
export function saveProfile(data: Result) {
  profileDB.set(data.username, {
    username: data.username,
    email: data.email,
    github: data.github,
    twitter: data.twitter,
  });
}
