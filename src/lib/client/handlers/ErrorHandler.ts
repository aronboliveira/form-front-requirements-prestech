import { flags, jsErrorsFriendlyNames } from "../vars";

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
  static describeValidityState(vs: ValidityState, custom?: string): string {
    for (const v of Object.keys(
      ValidityState.prototype
    ) as (keyof ValidityState)[]) {
      if (v === "valid") continue;
      if ((vs as any)[v] === false) {
        switch (v as keyof ValidityState) {
          case "badInput":
            return flags.pt ? "Entrada inadequada" : "Inadequate entry";
          case "patternMismatch":
            return flags.pt ? "Padrão inadequado" : "Inadequate pattern";
          case "valueMissing":
            return flags.pt
              ? "O valor não pôde ser lido"
              : "The value could not be read";
          case "tooShort":
            return flags.pt
              ? "Número de dígitos insuficiente"
              : "Number os digits insufficient";
          case "tooLong":
            return flags.pt
              ? "Número de dígitos excessivo"
              : "Excessive number os digits";
          case "rangeUnderflow":
            return flags.pt
              ? "O valor não atende o número mínimo"
              : "The value is below the mininum accepted";
          case "rangeOverflow":
            return flags.pt
              ? "O valor está além do número máximo"
              : "The value is above the maximum accepted";
          case "typeMismatch":
            return flags.pt
              ? "Tipo de entrada inadequada"
              : "Type of entry inadequate";
          case "stepMismatch":
            return flags.pt
              ? "A entrada não segue a progressão requirida"
              : "The entry does not follow the required step pattern";
          case "customError":
            return custom
              ? custom
              : flags.pt
              ? "Erro personalizado não identificado"
              : "Undefined Custom error";
          default:
            return flags.pt
              ? "Há algo errado com a entrada"
              : "There is something wrong with the entry";
        }
      }
    }
    return "";
  }
  static getFriendlyErrorMessage(errorType: string): string {
    const friendlyNames = flags.pt
      ? jsErrorsFriendlyNames?.PT
      : jsErrorsFriendlyNames?.EN;
    if (!friendlyNames) return errorType;
    const friendlyMessage = friendlyNames.get(errorType);
    return friendlyMessage || errorType;
  }
}
