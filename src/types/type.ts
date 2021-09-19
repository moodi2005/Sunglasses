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

interface Result {}
