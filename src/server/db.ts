import { ResultDB, Result, profileDB } from "./types/type";

// save profile in DB
export function saveProfileDB(data: Result) {
  profileDB.set(data.username, {
    username: data.username,
    email: data.email,
    github: data.github,
    twitter: data.twitter,
  });
}

export async function getProfileDB(
  username: string
): Promise<ResultDB | undefined> {
  const data = await profileDB.get<ResultDB>(username);
  return data;
}
