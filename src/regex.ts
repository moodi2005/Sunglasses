// regexs
const regexs = new RegExp(
  `^api\/createProfile\\?(?=.*username=[a-zA-Z0-9_]+(&|$))(?=.*email=[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]+(&|$))(?=.*twitter=[a-zA-Z0-9-]+(&|$))(?=.*github=[a-zA-Z0-9-]+(&|$))`
);

// check valid url and return result as boolean
export function testRequest(url: string): boolean {
  if (regexs.test(url)) {
    console.log(url);
    return true;
  }
  return false;
}
