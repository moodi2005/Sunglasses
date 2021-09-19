// status code
export const statusCodeOK = 200;
export const statusCodeBadRequest = 400;

// response
export const responseBadRequest: RequestResponse = {
  statusCode: statusCodeBadRequest,
  message: "invalid url",
};

// response type
export interface RequestResponse {
  statusCode: number;
  message: string;
  result?: Result;
}

export interface Result {
  username: string;
  email: string;
  twitter: string;
  github: string;
}
