import {
  HTTPResponseClientErrorCode,
  HTTPResponseClientErrorLabel,
  HTTPResponseInfoCode,
  HTTPResponseInfoLabel,
  HTTPResponseRedirectCode,
  HTTPResponseRedirectLabel,
  HTTPResponseServerErrorCode,
  HTTPResponseServerErrorLabel,
  HTTPResponseSuccessfulCode,
  HTTPResponseSuccessfulLabel,
  HTTPReturns,
} from "./definitions/foundations";

export const patterns = {
  email: `^[^\s@]+@[^\s@]+\.[^\s@]+$`,
  countryCode: "^\\+[0-9]{2,4}s?$",
  ddd: `^[0-9]{2,}$`,
  age: `^[0-9]{1,3}$`,
};
export const limits = {
  tiny: {
    MAX_UTF_16_SIGNED_SURROGATE: 63,
    MAX_UTF_16_SIGNED_NOTSURROGATE: 127,
  },
  small: {
    MAX_UTF_16_SIGNED_SURROGATE: 16383,
  },
  medium: {
    MAX_UTF_16_SIGNED_SURROGATE: 4194303,
  },
};
export const HTTPResInfoMap = new Map<
  HTTPResponseInfoCode,
  HTTPResponseInfoLabel
>([
  [100, "Continue"],
  [101, "Switching Protocols"],
  [102, "Processing"],
  [103, "Early Hints"],
]);
export const HTTPResSuccessfulMap = new Map<
  HTTPResponseSuccessfulCode,
  HTTPResponseSuccessfulLabel
>([
  [200, "OK"],
  [201, "Created"],
  [202, "Accepted"],
  [203, "Non-Authoritative Information"],
  [204, "No Content"],
  [205, "Reset Content"],
  [206, "Partial Content"],
  [207, "Multi-Status"],
  [208, "Already Reported"],
  [226, "IM Used"],
]);
export const HTTPResRedirectMap = new Map<
  HTTPResponseRedirectCode,
  HTTPResponseRedirectLabel
>([
  [300, "Multiple Choices"],
  [301, "Moved Permanently"],
  [302, "Found"],
  [303, "See Other"],
  [304, "Not Modified"],
  [306, "Unused"],
  [307, "Temporary Redirect"],
  [308, "Permanent Redirect"],
]);
export const HTTPResClientErrorMap = new Map<
  HTTPResponseClientErrorCode,
  HTTPResponseClientErrorLabel
>([
  [400, "Bad Request"],
  [401, "Unauthorized"],
  [402, "Payment Required"],
  [403, "Forbidden"],
  [404, "Not Found"],
  [405, "Method Not Allowed"],
  [406, "Not Acceptable"],
  [407, "Proxy Authentication Required"],
  [408, "Request Timeout"],
  [409, "Conflict"],
  [410, "Gone"],
  [411, "Length Required"],
  [412, "Preconditional Failed"],
  [413, "Content Too Large"],
  [414, "URI Too Long"],
  [415, "Unsupported Media Type"],
  [416, "Range Not Satisfiable"],
  [417, "Expectation Failed"],
  [418, "I'm a teapot"],
  [421, "Misdirected Request"],
  [422, "Unprocessable Content"],
  [423, "Locked"],
  [424, "Failed Dependendcy"],
  [425, "Too Early"],
  [426, "Upgrade Required"],
  [428, "Precondition Required"],
  [429, "Too Many Requests"],
  [431, "Request Header Fields Too Large"],
  [451, "Unavailable For Legal Reasons"],
]);
export const HTTPResServerErrorMap = new Map<
  HTTPResponseServerErrorCode,
  HTTPResponseServerErrorLabel
>([
  [500, "Internal Server Error"],
  [501, "Not Implemented"],
  [502, "Bad Gateway"],
  [503, "Service Unavailable"],
  [504, "Gateway Timeout"],
  [505, "HTTP Version Not Supported"],
  [506, "Variant Also Negotiates"],
  [507, "Insufficient Storage"],
  [508, "Loop Detected"],
  [510, "Not Extended"],
  [511, "Network Authentication Required"],
]);
export const HTTPRes: Readonly<{
  [K in HTTPReturns]:
    | typeof HTTPResInfoMap
    | typeof HTTPResSuccessfulMap
    | typeof HTTPResRedirectMap
    | typeof HTTPResClientErrorMap
    | typeof HTTPResServerErrorMap;
}> = {
  info: HTTPResInfoMap,
  successful: HTTPResSuccessfulMap,
  redirect: HTTPResRedirectMap,
  clientError: HTTPResClientErrorMap,
  serverError: HTTPResServerErrorMap,
} as const;
