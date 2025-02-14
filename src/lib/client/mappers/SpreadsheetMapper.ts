import {
  queryableNode,
  voidish,
} from "@/lib/definitions/client/helpers";
import { toast } from "react-hot-toast";
import { flags } from "../vars";
import StringHelper from "@/lib/helpers/StringHelper";
import { utils } from "xlsx";
import { writeFile } from "fs";

export default class SpreadsheetMapper {
  #data: Record<string, any>;
  #abortControl: AbortController;
  #exports: number = 0;
  static _instance: SpreadsheetMapper;
  constructor(_data: Record<string, any>) {
    this.#data = _data;
    this.#abortControl = new AbortController();
    this.#exports = 0;
  }
  static construct(
    _data: Record<string, any>
  ): SpreadsheetMapper {
    if (!SpreadsheetMapper._instance)
      SpreadsheetMapper._instance = new SpreadsheetMapper(
        _data
      );
    return SpreadsheetMapper._instance;
  }
  public static extractData(
    scope: queryableNode = document
  ): {
    elsDefs: {
      [k: string]: {
        title: string | undefined;
        v: string | undefined;
        type: "s" | "b" | "n" | "d" | "i" | undefined;
      };
    };
    imageEls: {
      [k: string]: HTMLCanvasElement | HTMLInputElement;
    };
  } {
    let v: string | ArrayBuffer | null = "Não preenchido",
      type: "s" | "b" | "n" | "d" | "i" | undefined;
    const allEntryEls = [
        ...Array.from(
          (scope ?? document).querySelectorAll("input")
        ).filter(
          el =>
            !(
              el instanceof HTMLInputElement &&
              (el.type === "checkbox" ||
                el.type === "radio") &&
              (el.role === "switch" ||
                el.parentElement?.classList.contains(
                  "form-switch"
                ) ||
                el.labels?.[0]?.innerText
                  ?.toLowerCase()
                  .includes("cálculo automático") ||
                el.labels?.[0]?.innerText
                  ?.toLowerCase()
                  .includes("autocorreção"))
            )
        ),
        ...(scope ?? document).querySelectorAll("textarea"),
        ...(scope ?? document).querySelectorAll("select"),
        ...(scope ?? document).querySelectorAll("output"),
        ...(scope ?? document).querySelectorAll("canvas"),
      ],
      elsDefs: {
        [k: string]: {
          title: string | undefined;
          v: string | undefined;
          type: "s" | "b" | "n" | "d" | "i" | undefined;
        };
      } = {},
      imageEls: {
        [k: string]: HTMLCanvasElement | HTMLInputElement;
      } = {};
    let acc = 1;
    for (const el of allEntryEls) {
      const title =
        el?.dataset?.xls
          ?.split("")
          .map((c, i) => (i === 0 ? c.toUpperCase() : c))
          .join("")
          .replace(/_/g, " ") ||
        el?.dataset?.title
          ?.split("")
          .map((c, i) => (i === 0 ? c.toUpperCase() : c))
          .join("")
          .replace(/_/g, " ") ||
        StringHelper.capitalize(
          el?.id
            .replace(/[_\-]/g, " ")
            .replace(/([A-Z])/g, m =>
              m === el?.id.charAt(0) ? m : ` ${m}`
            )
            .split("")
            .map((c, i) => (i === 0 ? c.toUpperCase() : c))
            .join("")
            .replace(/_/g, " ")
        ) ||
        (!(el instanceof HTMLCanvasElement) &&
          StringHelper.capitalize(
            el?.name
              .replace(/[_\-]/g, " ")
              .replace(/([A-Z])/g, m =>
                m === el?.name.charAt(0) ? m : ` ${m}`
              )
              .split("")
              .map((c, i) =>
                i === 0 ? c.toUpperCase() : c
              )
              .join("")
              .replace(/_/g, " ")
          )) ||
        `Sem Título (${
          el?.id ||
          (!(el instanceof HTMLCanvasElement) &&
            el?.name) ||
          el?.className ||
          el?.tagName
        }`;
      if (el instanceof HTMLOutputElement) {
        v = el.innerText || "Não preenchido";
        type = "s";
      } else if (
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement
      ) {
        v = el.value || "Não preenchido";
        type = "s";
      } else if (el instanceof HTMLInputElement) {
        if (el.type === "checkbox" || el.type === "radio") {
          type = "b";
          v = el.checked ? "Sim" : "Não";
        } else if (el.type === "number") {
          type = "n";
          if (v !== "Não preenchido") {
            v =
              v?.replace(/[^0-9]/g, "") ?? "Não preenchido";
            if (v !== "" && !Number.isFinite(Number(v)))
              v = "#ERRO -> Número inválido";
          }
        } else if (el.type === "file") {
          type = "i";
          const file = el.files?.[0];
          if (file) {
            const rd = new FileReader();
            rd.onload = (): string | ArrayBuffer | null =>
              (v = rd.result);
            rd.onerror = (): string => {
              toast?.error(
                flags.pt
                  ? `Erro carregando arquivos para a planilha`
                  : `Error loading files to the spreadsheet`
              );
              return (v = `#ERRO: ${
                rd.error?.name ?? "Nome indefinido"
              } — ${
                rd.error?.message ?? "mensagem indefinida"
              }`);
            };
            rd.onloadend = () => {
              toast?.success(
                flags.pt
                  ? `Sucesso carregando arquivos: ${file.name}`
                  : `Success loading files: ${file.name}`,
                { duration: 1000 }
              );
            };
            rd.readAsDataURL(file);
            imageEls[el.id] = el;
          } else v = "Não preenchido";
        } else if (el.type === "date") type = "d";
        else type = "s";
      } else if (el instanceof HTMLCanvasElement) {
        type = "i";
        v = el.toDataURL("image/png");
        imageEls[el.id] = el;
      }
      elsDefs[
        el.id ||
          (!(el instanceof HTMLCanvasElement) && el.name) ||
          el.dataset.title?.replace(/\s/g, "__") ||
          el.className.replace(/\s/g, "__") ||
          el.tagName
      ] = { title, v, type };
      acc += 1;
    }
    return { elsDefs, imageEls };
  }
  processExportData(
    context: string = "undefined",
    scope: queryableNode = document,
    namer: HTMLElement | string | voidish = ""
  ): void {
    try {
      const wb = utils.book_new(),
        dataJSON = Object.entries(this.#data).map(
          ([k, v], i) => ({
            Campo:
              v.title ||
              k ||
              `#ERRO -> Chave Elemento ${i + 1}`,
            Valor:
              (v.v === ""
                ? "Não preenchido"
                : v.v && v.v.length > 1 && v.type !== "i"
                ? v.v === "avancado"
                  ? "Avançado"
                  : v.v?.includes("avaliacao")
                  ? v.v.replace(/avaliacao/gi, "Avaliação")
                  : `${v.v
                      .charAt(0)
                      .toUpperCase()}${v.v.slice(1)}`
                : v.v) ??
              `#ERRO -> Valor Elemento ${i + 1}`,
            Tipo: (() => {
              switch (v.type) {
                case "b":
                  return "Lógico";
                case "n":
                  return "Número";
                case "d":
                  return "Data";
                case "i":
                  return "Imagem";
                default:
                  return "Texto";
              }
            })(),
          })
        ),
        worksheet = utils.json_to_sheet(dataJSON, {
          skipHeader: false,
          dateNF: "dd/mm/yyyy",
          cellDates: true,
        }),
        maxLengths: { [k: string]: number } = {};
      Object.entries(worksheet).forEach(row => {
        row.forEach((c, i) => {
          const len = c?.toString().length;
          if (len)
            (!maxLengths[i] || maxLengths[i] < len) &&
              (maxLengths[i] = len);
        });
      });
      worksheet["!cols"] = Object.keys(maxLengths).map(
        i => {
          return { width: maxLengths[i] + 50 };
        }
      );
      for (
        let i = 0;
        i < Object.values(this.#data).length;
        i++
      ) {
        const cellAddress = utils.encode_cell({
          r: 0,
          c: i,
        });
        if (worksheet[cellAddress]?.s)
          worksheet[cellAddress].s = {
            font: { bold: true },
          };
      }
      utils.book_append_sheet(
        wb,
        worksheet,
        "Formulário Exportado",
        true
      );
      const date = new Date(),
        fullDate = `d${date.getDate()}m${
          date.getMonth() + 1
        }y${date.getFullYear()}`,
        baseUrl = `${
          !/localhost/g.test(location.origin)
            ? `${location.origin}/.`
            : "/"
        }netlify/functions/processWorkbook`,
        fetchProcess = async (
          wb: WorkBook
        ): Promise<void> => {
          try {
            if (this.#exports > 101) return;
            const res = await fetch(baseUrl, {
              method: "POST",
              mode: "same-origin",
              credentials: "same-origin",
              referrer: location.href,
              referrerPolicy: "same-origin",
              headers: new Headers([
                ["Content-Type", "application/json"],
              ]),
              body: JSON.stringify(wb),
              cache: "no-store",
              keepalive: false,
              signal: this.#abortControl.signal,
            });
            if (this.#exports > 100) {
              exportSignaler.abort();
              this.#abortControl.abort();
            }
            if (!res.ok) return;
          } catch (e) {
            return;
          }
        };
      if (namer) {
        const writeNamedFile = (
          namer: Element | string
        ): void => {
          if (
            namer instanceof HTMLInputElement ||
            namer instanceof HTMLSelectElement ||
            namer instanceof HTMLTextAreaElement
          ) {
            fetchProcess(wb);
            writeFile(
              wb,
              `data_${context}_${
                namer.value
                  .trim()
                  .replaceAll(/[ÁÀÄÂÃáàäâã]/g, "a")
                  .replaceAll(/[ÉÈËÊéèëê]/g, "e")
                  .replaceAll(/[ÓÒÖÔÕóòöôõ]/g, "o")
                  .replaceAll(/[ÚÙÜÛúùüû]/g, "u")
                  .toLowerCase() ?? "noName"
              }_form_${fullDate}.xlsx`,
              {
                bookType: "xlsx",
                bookSST: false,
                compression: false,
                cellStyles: true,
                type: "buffer",
              }
            );
          } else if (namer instanceof HTMLOutputElement) {
            fetchProcess(wb);
            writeFile(
              wb,
              `data_${context}_${
                namer.innerText
                  .trim()
                  .replaceAll(/[ÁÀÄÂÃáàäâã]/g, "a")
                  .replaceAll(/[ÉÈËÊéèëê]/g, "e")
                  .replaceAll(/[ÓÒÖÔÕóòöôõ]/g, "o")
                  .replaceAll(/[ÚÙÜÛúùüû]/g, "u")
                  .toLowerCase() ?? "noName"
              }_form_${fullDate}.xlsx`,
              {
                bookType: "xlsx",
                bookSST: false,
                compression: false,
                cellStyles: true,
                type: "buffer",
              }
            );
          } else if (namer instanceof HTMLElement) {
            fetchProcess(wb);
            writeFile(
              wb,
              `data_${context}_${
                namer.id?.trim() ||
                namer.dataset.xls?.replaceAll(
                  /\s/g,
                  "__"
                ) ||
                namer.dataset.title?.replaceAll(
                  /\s/g,
                  "__"
                ) ||
                namer.tagName
              }form_${fullDate}.xlsx`
            );
          } else if (typeof namer === "string") {
            fetchProcess(wb);
            writeFile(
              wb,
              `data_${context}_${namer
                .trim()
                .replace(
                  /\s/g,
                  "__"
                )}_form_${fullDate}.xlsx`
            );
          }
        };
        if (typeof namer === "string") {
          if ((scope ?? document).querySelector(namer)) {
            fetchProcess(wb);
            writeNamedFile(
              (scope ?? document).querySelector(namer)!
            );
          } else {
            fetchProcess(wb);
            writeNamedFile(namer);
          }
        }
        if (typeof namer === "object") {
          fetchProcess(wb);
          writeNamedFile(namer);
        }
      } else {
        fetchProcess(wb);
        writeFile(
          wb,
          `data_${context}form_${fullDate}.xlsx`,
          {
            bookType: "xlsx",
            bookSST: false,
            compression: false,
            cellStyles: true,
            type: "buffer",
          }
        );
      }
      this.#processImages(imageEls, context);
    } catch (error) {
      return;
    }
  }
}
