export default class ExceptionHandler {
  static classify(exception: Error | DOMException): {
    type: string;
    status: number;
  } {
    try {
      if (
        exception instanceof TypeError ||
        exception instanceof SyntaxError ||
        exception instanceof ReferenceError ||
        exception instanceof RangeError
      ) {
        return {
          type: exception.constructor.name,
          status: 500,
        };
      } else if (exception instanceof URIError) {
        return {
          type: exception.constructor.name,
          status: 400,
        };
      } else if (exception instanceof DOMException) {
        const name = exception.name.toLowerCase().replace("error", "").trim();

        switch (name) {
          case "indexsize":
          case "hierarchyrequest":
          case "encoding":
          case "namespace":
          case "syntax":
            return {
              type: exception.name,
              status: 400,
            };
          case "security":
          case "invalidaccess":
            return {
              type: exception.name,
              status: 401,
            };
          case "wrongdocument":
          case "notfound":
          case "network":
          case "urlmismatch":
          case "transactioninactive":
            return {
              type: exception.name,
              status: 404,
            };

          case "quotaexceeded":
          case "timeout":
          case "abort":
          case "version":
            return {
              type: exception.name,
              status: 400,
            };

          case "notsupported":
          case "invalidstate":
          case "invalidmodification":
          case "invalidcharacter":
          case "typemismatch":
            return {
              type: exception.name,
              status: 422,
            };

          case "dataclone":
          case "notreadable":
          case "constraint":
          case "readonly":
          case "operation":
            return {
              type: exception.name,
              status: 403,
            };
          default:
            return {
              type: "Unknown Error",
              status: 500,
            };
        }
      } else {
        return {
          type: "Internal Error",
          status: 500,
        };
      }
    } catch (e) {
      console.error(
        `An unexpected error has occurred and could not be classified.`,
        e
      );
      return {
        type: "Unhandled Exception",
        status: 500,
      };
    }
  }
}
