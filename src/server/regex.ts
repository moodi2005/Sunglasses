import { Result, profileDB } from "./types/type";

// regexs
const urlRegex = new RegExp(
  `^api\/createProfile\\?(?=.*username=[a-zA-Z0-9_]+(&|$))(?=.*email=[a-zA-Z0-9\\.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]+(&|$))((?=.*twitter=[a-zA-Z0-9-]+(&|$)))?((?=.*github=[a-zA-Z0-9-]+(&|$)))?`
);
const usernameRegex = new RegExp(`(?<=username=)[a-zA-Z0-9_]+(?=&*)`);
const emailRegex = new RegExp(
  `(?<=email=)[a-zA-Z0-9\\.]+@[a-zA-Z0-9.]+\\.[a-zA-Z]+(?=&*)`
);
const twitterRegex = new RegExp(`(?<=twitter=)[a-zA-Z0-9-]+(?=&*)`);
const githubRegex = new RegExp(`(?<=github=)[a-zA-Z0-9-]+(?=&*)`);

// check valid url and return result as boolean
export function testRequest(url: string): boolean {
  if (urlRegex.test(url)) {
    return true;
  }
  return false;
}

export function parseURL(url: string): Result | null {
  const username = usernameRegex.exec(url);
  const email = emailRegex.exec(url);
  const twitter = twitterRegex.exec(url);
  const github = githubRegex.exec(url);

  if (email != null && username != null && twitter != null && github != null) {
    const data: Result = {
      username: username[0],
      email: email[0],
      twitter: twitter[0],
      github: github[0],
    };
    return data;
  } else if (email != null && username != null) {
    const data: Result = {
      username: username[0],
      email: email[0],
    };
    return data;
  }

  return null;
}

// parse user name from url | get profile
export function getUsername(url: string) {
  const username = usernameRegex.exec(url);
  if (username === null) return;
  return username[0];
}

export async function checkUsernameExist(username: string): Promise<boolean> {
  const exist = await profileDB.get(username);
  if (exist != undefined) {
    return true;
  }
  return false;
}
