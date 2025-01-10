import { Mapper } from "@/lib/definitions/foundations";
export default class FormMapper implements Mapper {
  #form: HTMLFormElement;
  constructor(form: HTMLFormElement) {
    this.#form = form;
  }
  public map(data: FormData) {
    console.log(this.#form);
    return data;
  }
}
export function syncAriaStates(
  els: Array<Element> | NodeListOf<Element>
): void {
  if (els instanceof NodeList) els = Array.from(els);
  els = els.filter(el => el instanceof Element);
  if (
    Array.isArray(els) &&
    els.length > 0 &&
    Array.from(els).every(el => el instanceof Element)
  ) {
    els.forEach(el => {
      if (
        el instanceof HTMLHtmlElement ||
        el instanceof HTMLHeadElement ||
        el instanceof HTMLMetaElement ||
        el instanceof HTMLLinkElement ||
        el instanceof HTMLScriptElement ||
        el.tagName === "NOSCRIPT" ||
        el instanceof HTMLBaseElement ||
        el instanceof HTMLStyleElement ||
        (el.parentElement && el.parentElement instanceof HTMLHeadElement) ||
        el.classList.contains("watcher") ||
        el.classList.contains("spinner")
      )
        return;
      if (el instanceof HTMLElement) {
        el.hidden && !el.focus
          ? (el.ariaHidden = "true")
          : (el.ariaHidden = "false");
        el.addEventListener("click", () => {
          el.hidden && !el.focus
            ? (el.ariaHidden = "true")
            : (el.ariaHidden = "false");
        });
        if (el.classList.contains("poCaller")) {
          el.ariaHasPopup = "menu";
        }
        if (
          el instanceof HTMLSelectElement ||
          el instanceof HTMLInputElement ||
          el instanceof HTMLTextAreaElement
        ) {
          if (el instanceof HTMLSelectElement) {
            if (el.querySelectorAll("option").length > 0) {
              el.querySelectorAll("option").forEach(option => {
                option.selected
                  ? (option.ariaSelected = "true")
                  : (option.ariaSelected = "false");
              });
              el.addEventListener("change", () => {
                el.querySelectorAll("option").forEach(option => {
                  option.selected
                    ? (option.ariaSelected = "true")
                    : (option.ariaSelected = "false");
                });
              });
            }
            el.addEventListener("click", () => {
              if (el.ariaExpanded === "false") el.ariaExpanded = "true";
              if (el.ariaExpanded === "true") el.ariaExpanded = "false";
            });
          }
          if (
            el instanceof HTMLInputElement ||
            el instanceof HTMLTextAreaElement
          ) {
            if (el.placeholder && el.placeholder !== "")
              el.ariaPlaceholder = el.placeholder;
            if (el.type !== "radio") {
              el.required
                ? (el.ariaRequired = "true")
                : (el.ariaRequired = "false");
              !el.checkValidity()
                ? (el.ariaInvalid = "true")
                : (el.ariaInvalid = "false");
              el.closest("form")?.addEventListener("submit", () => {
                !el.checkValidity()
                  ? (el.ariaInvalid = "true")
                  : (el.ariaInvalid = "false");
              });
            }
            if (
              el instanceof HTMLTextAreaElement ||
              (el instanceof HTMLInputElement &&
                (el.type === "text" ||
                  el.type === "tel" ||
                  el.type === "email" ||
                  el.type === "number" ||
                  el.type === "date" ||
                  el.type === "time" ||
                  el.type === "password" ||
                  el.type === "search" ||
                  el.type === "month" ||
                  el.type === "week"))
            ) {
              if (
                el instanceof HTMLInputElement &&
                el.list &&
                el.list.id !== ""
              )
                el.ariaAutoComplete = "list";
              if (
                el instanceof HTMLInputElement &&
                (el.type === "number" ||
                  el.type === "date" ||
                  el.type === "time")
              ) {
                el.ariaValueMax = (el as HTMLInputElement).max;
                el.ariaValueMin = (el as HTMLInputElement).min;
              }
              if (el instanceof HTMLInputElement && el.type === "range") {
                el.addEventListener("change", () => {
                  el.ariaValueNow = el.value;
                  el.ariaValueText = el.value;
                });
              }
            } else if (
              el instanceof HTMLInputElement &&
              (el.type === "radio" || el.type === "checkbox")
            ) {
              el.checked
                ? (el.ariaChecked = "true")
                : (el.ariaChecked = "false");
              el.disabled
                ? (el.ariaDisabled = "true")
                : (el.ariaDisabled = "false");
              el.addEventListener("change", () => {
                el.checked
                  ? (el.ariaChecked = "true")
                  : (el.ariaChecked = "false");
                el.disabled
                  ? (el.ariaDisabled = "true")
                  : (el.ariaDisabled = "false");
              });
            } else if (
              el instanceof HTMLInputElement &&
              (el.type === "button" ||
                el.type === "submit" ||
                el.type === "reset")
            ) {
              el.addEventListener("mousedown", click => {
                if (click.button === 0) el.ariaPressed = "true";
              });
              el.addEventListener("mouseup", release => {
                if (release.button === 0) el.ariaPressed = "false";
              });
            }
          }
        }
        if (el instanceof HTMLLabelElement) {
          if (el.hasChildNodes() && el.firstChild instanceof Text) {
            el.ariaLabel = el.firstChild.nodeValue;
          }
        }
        if (el instanceof HTMLButtonElement) {
          el.addEventListener("mousedown", click => {
            if (click.button === 0) el.ariaPressed = "true";
          });
          el.addEventListener("mouseup", release => {
            if (release.button === 0) el.ariaPressed = "false";
          });
          if (el.textContent?.match(/consultar/gi)) {
            el.ariaHasPopup = "dialog";
          }
        }
        if (el instanceof HTMLDialogElement) el.ariaModal = "true";
      }
    });
  }
}
// export function checkForReset(ev: rMouseEvent): void {
//   try {
//     if (!(ev.currentTarget instanceof Element))
//       throw new Error(`Failed to validate current target instance`);
//     const res = prompt("Digite CONFIRMAR para resetar o formulário");
//     if (res === "CONFIRMAR") {
//       const form = ev.currentTarget.closest("form");
//       if (!form) {
//         navigatorVars.pt
//           ? toast.error("Não foi possível localizar o formulário")
//           : toast.error("Failed to locate the formulary");
//         return;
//       }
//       resetForm(form);
//     }
//   } catch (e) {
//     return;
//   }
// }
// export function resetForm(form: nlFm): void {
//   try {
//     if (!(form instanceof HTMLFormElement)) return;
//     [
//       ...form.querySelectorAll("input"),
//       ...form.querySelectorAll("textarea"),
//     ].forEach(inp => {
//       try {
//         if (
//           inp instanceof HTMLTextAreaElement ||
//           (inp instanceof HTMLInputElement &&
//             (inp.type === "text" ||
//               inp.type === "date" ||
//               inp.type === "datetime-local" ||
//               inp.type === "email" ||
//               inp.type === "file" ||
//               inp.type === "hidden" ||
//               inp.type === "month" ||
//               inp.type === "number" ||
//               inp.type === "password" ||
//               inp.type === "search" ||
//               inp.type === "tel" ||
//               inp.type === "time" ||
//               inp.type === "url" ||
//               inp.type === "week" ||
//               inp.type === "datetime"))
//         )
//           inp.value = "";
//         else if (
//           inp.type === "button" ||
//           inp.type === "reset" ||
//           inp.type === "submit" ||
//           inp.type === "image"
//         )
//           return;
//         else if (inp.type === "checkbox" || inp.type === "radio") {
//           if (inp.role === "switch") return;
//           inp.checked = false;
//         } else if (inp.type === "color") {
//           if (inp.dataset.default) inp.value = inp.dataset.default;
//           else inp.value = "#0000";
//         } else if (inp.type === "range") {
//           if (inp.dataset.default) inp.value = inp.dataset.default;
//           else if (inp.min) inp.value = inp.min;
//           else inp.value = "0";
//         }
//       } catch (e) {
//         return;
//       }
//     });
//     form.querySelectorAll("select").forEach(s => {
//       try {
//         if (s.options.length === 0)
//           throw new Error(
//             `No option in the select ${
//               s.id || s.name || s.className || s.tagName
//             }`
//           );
//         if (s.dataset.default) s.value = s.dataset.default;
//         else s.value = s.options[0].value;
//       } catch (e) {
//         return;
//       }
//     });
//     [
//       document.getElementById("astDigtBtn"),
//       document.querySelectorAll("[id$=AstDigtBtn]"),
//     ].forEach(b => {
//       try {
//         if (
//           !(
//             b instanceof HTMLButtonElement ||
//             (b instanceof HTMLInputElement && b.type === "button")
//           )
//         )
//           return;
//         if (b.innerText.toLowerCase() === "retornar") b.click();
//       } catch (e) {
//         return;
//       }
//     });
//   } catch (e) {
//     return;
//   }
// }
// const borderColors: { [k: string]: string } = {};
// export async function validateForm(
//   ev: FormEvent | SubmitEvent | rMouseEvent | HTMLFormElement,
//   scope: queryableNode = document,
//   submit: boolean = true
// ): Promise<[boolean, string[], Array<[string, string | File]>]> {
//   let targ;
//   if (!(ev instanceof HTMLFormElement || "currentTarget" in ev))
//     throw new Error(`Invalid form reference`);
//   if (ev instanceof HTMLFormElement) targ = ev;
//   else if (
//     ev.currentTarget instanceof HTMLFormElement ||
//     ((ev.currentTarget instanceof HTMLButtonElement ||
//       ev.currentTarget instanceof HTMLInputElement) &&
//       ev.currentTarget.type === "submit")
//   ) {
//     ev.preventDefault();
//     targ = ev.currentTarget;
//   }
//   const arrValidity: boolean[] = [];
//   const invalidEntries: string[] = [];
//   const validEntries: Array<[string, string | File]> = [];
//   let form;
//   (() => {
//     try {
//       if (
//         !(
//           targ instanceof HTMLFormElement ||
//           targ instanceof HTMLButtonElement ||
//           (targ instanceof HTMLInputElement && targ.type === "submit")
//         )
//       )
//         return;
//       if (targ instanceof HTMLFormElement) form = targ;
//       else form = targ.closest("form");
//       if (!(form instanceof HTMLFormElement)) scope?.querySelector("form");
//       if (!(form instanceof HTMLFormElement)) return;
//       [
//         ...form.querySelectorAll("input"),
//         ...form.querySelectorAll("textarea"),
//         ...form.querySelectorAll("select"),
//         ...form.querySelectorAll("canvas"),
//       ].forEach(entry => {
//         const displayInvalidity = (valid: boolean = true): void => {
//           if (!valid && !(entry instanceof HTMLCanvasElement)) {
//             entry.scrollIntoView({ behavior: "smooth" });
//             if (!/border-color/g.test(getComputedStyle(entry).transition))
//               entry.style.transition =
//                 (getComputedStyle(entry).transition || "") +
//                 "border-color ease-in-out 1s";
//             if (
//               !borderColors[
//                 entry.id ||
//                   entry.name ||
//                   entry.classList.toString().replaceAll(" ", "_")
//               ]
//             )
//               borderColors[
//                 entry.id ||
//                   entry.name ||
//                   entry.classList.toString().replaceAll(" ", "_")
//               ] =
//                 getComputedStyle(entry).borderColor ||
//                 getComputedStyle(entry).borderBottomColor;
//             entry.style.borderColor = "red";
//             setTimeout(
//               () =>
//                 (entry.style.borderColor =
//                   borderColors[
//                     entry.id ||
//                       entry.name ||
//                       entry.classList.toString().replaceAll(" ", "_")
//                   ] || "rgb(222, 226, 230)"),
//               1000
//             );
//             if (
//               (entry instanceof HTMLInputElement &&
//                 !(
//                   entry.type === "checkbox" ||
//                   entry.type === "radio" ||
//                   entry.type === "file" ||
//                   entry.type === "submit" ||
//                   entry.type === "button" ||
//                   entry.type === "reset"
//                 )) ||
//               entry instanceof HTMLTextAreaElement
//             ) {
//               const prevPlaceholder = entry.placeholder;
//               entry.placeholder = `Entrada inválida`;
//               setTimeout(() => {
//                 entry.placeholder = prevPlaceholder;
//               }, 2000);
//             }
//           }
//         };
//         let isValid = true;
//         if (entry instanceof HTMLSelectElement) {
//           if (entry.value === "") {
//             isValid = false;
//             invalidEntries.push(
//               entry.name || entry.id || entry.dataset.title || entry.tagName
//             );
//             displayInvalidity(isValid);
//           }
//         } else if (
//           entry instanceof HTMLInputElement ||
//           entry instanceof HTMLTextAreaElement
//         ) {
//           if (!entry.checkValidity()) {
//             isValid = false;
//             invalidEntries.push(
//               entry.id || entry.name || entry.dataset.title || entry.tagName
//             );
//             displayInvalidity(isValid);
//           }
//           if (entry instanceof HTMLInputElement && entry.type === "date") {
//             if (entry.classList.contains("minCurrDate")) {
//               const currDate = new Date()
//                 .toISOString()
//                 .split("T")[0]
//                 .replaceAll("-", "")
//                 .trim();
//               if (currDate.length < 8) return;
//               const currNumDate = Math.abs(parseNotNaN(currDate));
//               if (
//                 !Number.isFinite(currNumDate) ||
//                 currNumDate
//                   .toString()
//                   .slice(0, currNumDate.toString().indexOf(".")).length < 8
//               )
//                 return;
//               const entryNumDateValue = parseNotNaN(
//                 entry.value.replaceAll("-", "")
//               );
//               if (
//                 !Number.isFinite(entryNumDateValue) ||
//                 entryNumDateValue
//                   .toString()
//                   .slice(0, entryNumDateValue.toString().indexOf(".")).length <
//                   8
//               )
//                 return;
//               if (entryNumDateValue < currNumDate) {
//                 isValid = false;
//                 invalidEntries.push(
//                   entry.id || entry.name || entry.dataset.title || entry.tagName
//                 );
//                 displayInvalidity(isValid);
//               }
//             }
//             if (entry.classList.contains("maxCurrDate")) {
//               const currDate = new Date()
//                 .toISOString()
//                 .split("T")[0]
//                 .replaceAll("-", "")
//                 .trim();
//               if (currDate.length < 8) return;
//               const currNumDate = Math.abs(parseNotNaN(currDate));
//               if (
//                 !Number.isFinite(currNumDate) ||
//                 currNumDate
//                   .toString()
//                   .slice(0, currNumDate.toString().indexOf(".")).length < 8
//               )
//                 return;
//               const entryNumDateValue = parseNotNaN(
//                 entry.value.replaceAll("-", "")
//               );
//               if (
//                 !Number.isFinite(entryNumDateValue) ||
//                 entryNumDateValue
//                   .toString()
//                   .slice(0, entryNumDateValue.toString().indexOf(".")).length <
//                   8
//               )
//                 return;
//               if (entryNumDateValue > currNumDate) {
//                 isValid = false;
//                 invalidEntries.push(
//                   entry.id || entry.name || entry.dataset.title || entry.tagName
//                 );
//                 displayInvalidity(isValid);
//               }
//             }
//           } else if (
//             entry instanceof HTMLInputElement &&
//             entry.type === "radio"
//           ) {
//             (() => {
//               try {
//                 let parent = entry.parentElement;
//                 if (!(parent instanceof Element)) return;
//                 if (parent.querySelectorAll('input[type="radio"]').length < 2)
//                   parent = parent.closest(".divAdd") ?? parent.parentElement;
//                 if (!(parent instanceof Element)) return;
//                 const radioGroupList = parent.querySelectorAll(
//                   'input[type="radio"]'
//                 );
//                 if (radioGroupList.length === 0) return;
//                 if (
//                   Array.from(radioGroupList)
//                     .filter(
//                       radio =>
//                         radio instanceof HTMLInputElement &&
//                         radio.type === "radio"
//                     )
//                     .some(
//                       radio =>
//                         radio instanceof HTMLInputElement &&
//                         radio.type === "radio" &&
//                         (radio.dataset.required === "true" || radio.required)
//                     ) &&
//                   !Array.from(radioGroupList)
//                     .filter(
//                       radio =>
//                         radio instanceof HTMLInputElement &&
//                         radio.type === "radio"
//                     )
//                     .some(
//                       radio =>
//                         radio instanceof HTMLInputElement &&
//                         radio.type === "radio" &&
//                         radio.checked
//                     )
//                 ) {
//                   isValid = false;
//                   displayInvalidity(isValid);
//                 }
//                 const cbGrpL = parent.querySelectorAll(
//                   'input[type="checkbox"]'
//                 );
//                 if (cbGrpL.length === 0)
//                   throw new Error(
//                     `Error populating list of checkboxes from parent`
//                   );
//                 if (
//                   Array.from(cbGrpL)
//                     .filter(
//                       checkbox =>
//                         checkbox instanceof HTMLInputElement &&
//                         checkbox.type === "checkbox"
//                     )
//                     .some(
//                       checkbox =>
//                         checkbox instanceof HTMLInputElement &&
//                         checkbox.type === "checkbox" &&
//                         (checkbox.dataset.required === "true" ||
//                           checkbox.required)
//                     ) &&
//                   !Array.from(cbGrpL)
//                     .filter(
//                       checkbox =>
//                         checkbox instanceof HTMLInputElement &&
//                         checkbox.type === "checkbox"
//                     )
//                     .some(
//                       checkbox =>
//                         checkbox instanceof HTMLInputElement &&
//                         checkbox.type === "checkbox" &&
//                         checkbox.checked
//                     )
//                 ) {
//                   isValid = false;
//                   displayInvalidity(isValid);
//                 }
//               } catch (e) {
//                 return;
//               }
//             })();
//           } else if (
//             entry instanceof HTMLInputElement &&
//             entry.type === "file"
//           ) {
//             if (!(entry.files && entry.files[0])) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.name || entry.id || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//           } else {
//             if (
//               entry.classList.contains("minText") &&
//               entry.value.length < parseNotNaN(entry.dataset.reqlength || "3")
//             ) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.id || entry.name || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//             if (
//               entry.classList.contains("maxText") &&
//               entry.value.length > parseNotNaN(entry.dataset.maxlength || "3")
//             ) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.id || entry.name || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//             if (
//               entry.classList.contains("minNum") &&
//               parseNotNaN(entry.value) <
//                 parseNotNaN(entry.dataset.minnum || "3")
//             ) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.id || entry.name || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//             if (
//               entry.classList.contains("maxNum") &&
//               parseNotNaN(entry.value) >
//                 parseNotNaN(entry.dataset.maxnum || "3")
//             ) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.id || entry.name || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//             if (
//               entry.classList.contains("patternText") &&
//               entry.dataset.pattern &&
//               !new RegExp(
//                 entry.dataset.pattern,
//                 entry.dataset.flags || ""
//               ).test(entry.value)
//             ) {
//               isValid = false;
//               invalidEntries.push(
//                 entry.id || entry.name || entry.dataset.title || entry.tagName
//               );
//               displayInvalidity(isValid);
//             }
//           }
//           arrValidity.push(isValid);
//           if (isValid) {
//             if (
//               entry instanceof HTMLInputElement &&
//               entry.type === "checkbox" &&
//               entry.role !== "switch"
//             )
//               validEntries.push([
//                 entry.name || entry.id || entry.dataset.title || entry.tagName,
//                 `${entry.checked}`,
//               ]);
//             else if (
//               entry instanceof HTMLInputElement &&
//               entry.type === "radio"
//             ) {
//               (() => {
//                 try {
//                   let parent = entry.parentElement;
//                   if (!(parent instanceof Element)) return;
//                   if (parent.querySelectorAll('input[type="radio"]').length < 2)
//                     parent = parent.closest(".divAdd") ?? parent.parentElement;
//                   if (!(parent instanceof Element)) return;
//                   const radioGroupList = parent.querySelectorAll(
//                     'input[type="radio"]'
//                   );
//                   if (radioGroupList.length === 0) return;
//                   if (
//                     radioGroupList.length === 1 &&
//                     radioGroupList[0] instanceof HTMLInputElement &&
//                     radioGroupList[0].type === "radio"
//                   ) {
//                     radioGroupList[0].checked
//                       ? validEntries.push([
//                           radioGroupList[0].name ||
//                             radioGroupList[0].id ||
//                             radioGroupList[0].dataset.title ||
//                             radioGroupList[0].tagName,
//                           `true`,
//                         ])
//                       : validEntries.push([
//                           radioGroupList[0].name ||
//                             radioGroupList[0].id ||
//                             radioGroupList[0].dataset.title ||
//                             radioGroupList[0].tagName,
//                           `false`,
//                         ]);
//                   } else {
//                     const opChecked = Array.from(radioGroupList).filter(
//                       radio =>
//                         radio instanceof HTMLInputElement &&
//                         radio.type === "radio" &&
//                         radio.checked
//                     )[0];
//                     if (
//                       !(
//                         opChecked instanceof HTMLInputElement &&
//                         opChecked.type === "radio"
//                       )
//                     ) {
//                       validEntries.push([
//                         opChecked.id || opChecked.tagName,
//                         `undefined`,
//                       ]);
//                       return;
//                     } else {
//                       if (radioGroupList.length === 2) {
//                         if (
//                           opChecked.id.endsWith("No") ||
//                           opChecked.id.endsWith("-no") ||
//                           opChecked.id.endsWith("-No") ||
//                           opChecked.classList.contains("radNo")
//                         )
//                           validEntries.push([
//                             opChecked.name ||
//                               opChecked.id ||
//                               opChecked.dataset.title ||
//                               opChecked.tagName,
//                             `false`,
//                           ]);
//                         else
//                           validEntries.push([
//                             opChecked.name ||
//                               opChecked.id ||
//                               opChecked.dataset.title ||
//                               opChecked.tagName,
//                             `true`,
//                           ]);
//                       } else if (radioGroupList.length > 2) {
//                         validEntries.push([
//                           opChecked.name ||
//                             opChecked.id ||
//                             opChecked.dataset.title ||
//                             opChecked.tagName,
//                           opChecked.dataset.value || `true`,
//                         ]);
//                       }
//                     }
//                   }
//                 } catch (e) {
//                   return;
//                 }
//               })();
//             } else if (
//               entry instanceof HTMLInputElement &&
//               entry.type === "file" &&
//               entry.files
//             ) {
//               validEntries.push([
//                 entry.name || entry.id || entry.dataset.title || entry.tagName,
//                 entry.files[0],
//               ]);
//             } else if (entry instanceof HTMLCanvasElement) {
//               (async (): Promise<File> => {
//                 return new Promise((res, rej) => {
//                   entry.toBlob(blob => {
//                     if (blob) {
//                       res(
//                         new File(
//                           [blob],
//                           entry.name ||
//                             entry.id ||
//                             entry.dataset.title ||
//                             entry.tagName,
//                           {
//                             type: blob.type,
//                           }
//                         )
//                       );
//                     } else rej(new Error(`Failed to extract file.`));
//                   });
//                 });
//               })().then(file =>
//                 validEntries.push([
//                   entry.name ||
//                     entry.id ||
//                     entry.dataset.title ||
//                     entry.tagName,
//                   file,
//                 ])
//               );
//             } else
//               validEntries.push([
//                 entry.name || entry.id || entry.dataset.title || entry.tagName,
//                 entry.value,
//               ]);
//           }
//         }
//       });
//     } catch (e) {
//       return;
//     }
//   })();
//   const formValidated = arrValidity.some(validity => validity === false)
//     ? false
//     : true;
//   if (form instanceof HTMLFormElement) {
//     if (formValidated && form.checkValidity()) {
//       form.noValidate = false;
//       submit &&
//         submitForm(
//           form,
//           (form.dataset.ep ||
//             form.action
//               .replace("submit_", "")
//               .replace("_form", "")) as formCases
//         );
//     } else form.noValidate = true;
//   }
//   return [
//     formValidated,
//     invalidEntries.map(invalidIdf => `${invalidIdf} \n`),
//     validEntries,
//   ];
// }
// export async function submitForm(form: nlFm, ep: formCases): Promise<void> {
//   try {
//     if (!(form instanceof HTMLFormElement)) return;
//     if (typeof ep !== "string")
//       throw new Error(`Incorret type for ep argument in submitForm`);
//     const fd = new FormData();
//     [
//       ...form.querySelectorAll("input"),
//       ...form.querySelectorAll("textarea"),
//       ...form.querySelectorAll("select"),
//       ...form.querySelectorAll("canvas"),
//     ]
//       .filter(
//         el =>
//           el instanceof HTMLInputElement &&
//           (el.type === "hidden" ||
//             el.type === "reset" ||
//             el.type === "button" ||
//             el.type === "submit" ||
//             el.type === "image")
//       )
//       .forEach(el => {
//         try {
//           if (el instanceof HTMLCanvasElement) {
//             const idf =
//               el.dataset.name || el.id || el.dataset.title || el.tagName;
//             (async (): Promise<File> => {
//               return new Promise((res, rej) => {
//                 el.toBlob(blob => {
//                   blob
//                     ? res(
//                         new File(
//                           [blob],
//                           `${idf}_${
//                             (fd.get("name") &&
//                               regularToSnake(fd.get("name")!.toString())) ||
//                             `${
//                               fd.get("first_name")
//                                 ? regularToSnake(
//                                     fd.get("first_name")!.toString()
//                                   )
//                                 : ""
//                             }__${
//                               fd.get("additional_name")
//                                 ? regularToSnake(
//                                     fd.get("additional_name")!.toString()
//                                   )
//                                 : ""
//                             }__${
//                               fd.get("family_name")
//                                 ? regularToSnake(
//                                     fd.get("family_name")!.toString()
//                                   )
//                                 : ""
//                             }__${new Date().getFullYear()}${
//                               new Date().getMonth() + 1
//                             }${new Date().getDate()}`
//                           }.jpeg`,
//                           { type: "image/jpeg" }
//                         )
//                       )
//                     : rej(new Error(`Failed to extract file.`));
//                 });
//               });
//             })().then(file => fd.append(idf, file));
//           } else {
//             const idf =
//               el.name ||
//               el.id ||
//               el.dataset.title ||
//               el.className ||
//               el.tagName;
//             if (el instanceof HTMLInputElement) {
//               if (el.type === "radio") {
//                 const appendRad = (el: HTMLInputElement): void => {
//                   el.checked && el.dataset.value && el.dataset.value !== ""
//                     ? fd.append(idf, el.dataset.value)
//                     : fd.append(idf, el.checked.toString());
//                 };
//                 const checkGroup = (refAncestral: HTMLElement): void => {
//                   let group = refAncestral.querySelectorAll(
//                     'input[type="radio"]'
//                   );
//                   if (group.length === 1) {
//                     const parentOfAncestral = refAncestral.parentElement;
//                     if (parentOfAncestral) {
//                       group = parentOfAncestral.querySelectorAll(
//                         'input[type="radio"]'
//                       );
//                       if (group.length === 1) {
//                         appendRad(el);
//                         return;
//                       } else {
//                         const checked = Array.from(group).find(
//                           rad =>
//                             rad instanceof HTMLInputElement &&
//                             rad.type === "radio" &&
//                             rad.checked
//                         ) as HTMLInputElement;
//                         if (!checked) {
//                           if (fd.get(idf)) return;
//                           fd.append(idf, "false");
//                         }
//                         appendRad(checked);
//                         return;
//                       }
//                     }
//                     appendRad(el);
//                     return;
//                   } else {
//                     const checked = Array.from(group).find(
//                       rad =>
//                         rad instanceof HTMLInputElement &&
//                         rad.type === "radio" &&
//                         rad.checked
//                     ) as HTMLInputElement;
//                     if (!checked) {
//                       if (fd.get(idf)) return;
//                       fd.append(idf, "false");
//                     }
//                     appendRad(checked);
//                   }
//                 };
//                 const checkParent = (
//                   refAncestral: nlHtEl,
//                   group: string = 'input[type="radio"]'
//                 ): void => {
//                   if (el.dataset.parent && el.dataset.parent !== "") {
//                     refAncestral = document.querySelector(el.dataset.parent);
//                     if (refAncestral) {
//                       checkGroup(refAncestral);
//                       return;
//                     }
//                     refAncestral = el.parentElement;
//                     if (!refAncestral) {
//                       appendRad(el);
//                       return;
//                     }
//                     let groupQueried = refAncestral.querySelectorAll(group);
//                     if (
//                       groupQueried.length === 0 &&
//                       group !== 'input[type="radio"]' &&
//                       group !== "input[type=radio]"
//                     )
//                       groupQueried = refAncestral.querySelectorAll(
//                         'input[type="radio"]'
//                       );
//                     if (groupQueried.length <= 1 && el.parentElement) {
//                       refAncestral = el.parentElement.parentElement;
//                       if (!refAncestral) {
//                         appendRad(el);
//                         return;
//                       }
//                       checkGroup(refAncestral);
//                       return;
//                     }
//                     checkGroup(refAncestral);
//                     return;
//                   }
//                   if (refAncestral) {
//                     checkGroup(refAncestral);
//                     return;
//                   }
//                   appendRad(el);
//                   return;
//                 };
//                 const refAncestral = el.parentElement;
//                 el.dataset.group && el.dataset.group !== ""
//                   ? checkParent(
//                       refAncestral,
//                       `[data-group="${el.dataset.group}"]`
//                     )
//                   : checkParent(refAncestral);
//                 return;
//               }
//               if (el.type === "checkbox") {
//                 fd.append(idf, el.checked.toString());
//                 return;
//               }
//               if (el.type === "file") {
//                 if (!el.multiple) {
//                   fd.append(idf, el.files?.[0] ?? "null");
//                   return;
//                 } else {
//                   if (el.files)
//                     for (const file of el.files) fd.append(idf, file);
//                   else fd.append(idf, "null");
//                   return;
//                 }
//               }
//             } else if (el instanceof HTMLSelectElement) {
//               if (!el.multiple) {
//                 fd.append(idf, el.value);
//                 return;
//               } else
//                 for (const opt of el.selectedOptions) fd.append(idf, opt.value);
//             } else {
//               fd.append(idf, el.value);
//               return;
//             }
//           }
//         } catch (e) {
//           return;
//         }
//       });
//     handleSubmit(ep, fd, true);
//   } catch (e) {
//     return;
//   }
// }
// const validities: Map<string, { valid: boolean }> = new Map(),
//   timers: Map<string, NodeJS.Timeout> = new Map();
// export function indicateValidities(el: HTMLInputElement, valid: boolean): void {
//   try {
//     if (!(el instanceof HTMLInputElement))
//       throw new Error(`Invalid input instance`);
//     if (
//       (el.type !== "text" &&
//         el.type !== "url" &&
//         el.type !== "tel" &&
//         el.type !== "search" &&
//         el.type !== "password" &&
//         el.type !== "email" &&
//         el.type !== "number" &&
//         el.type !== "date" &&
//         el.type !== "month") ||
//       (el.id === "" && el.name === "") ||
//       !el.parentElement ||
//       el.parentElement.style.position === "absolute"
//     )
//       return;
//     const bgImg = getComputedStyle(el).backgroundImage;
//     const iconized =
//       el.type === "url" ||
//       el.type === "search" ||
//       el.type === "tel" ||
//       el.type === "email" ||
//       el.type === "number" ||
//       el.type === "date" ||
//       el.type === "month" ||
//       bgImg.includes("image/svg+xml")
//         ? true
//         : false;
//     if (document.body.dataset.indicating !== "true") {
//       const removeIcons = (): void =>
//         document
//           .querySelectorAll(".validationIcon")
//           .forEach(icon => icon.remove());
//       for (const ev of ["resize", "scroll"]) addEventListener(ev, removeIcons);
//       document.body.dataset.indicating = "true";
//     }
//     const idf = el.id || el.name,
//       previous = validities.get(idf),
//       prevIcon = el.parentElement.querySelector(".validationIcon");
//     if (prevIcon) prevIcon.remove();
//     if (!previous)
//       validities.set(idf, {
//         valid,
//       });
//     const curr = validities.get(idf);
//     if (!curr) return;
//     const icon = document.createElement("span"),
//       rect = el.getBoundingClientRect(),
//       transform = `translateY(${
//         parseNotNaN(compProp(el, "height")) * 0.125
//       }px)`;
//     let iconW =
//       ((): number => {
//         try {
//           const m = bgImg.match(/viewBox='\.*'/g);
//           if (!m) return 0;
//           const measures = m[0].split(" ");
//           if (measures.length < 4) return 0;
//           return parseNotNaN(m[3].trim());
//         } catch (e) {
//           return 0;
//         }
//       })() || 16;
//     Object.assign(icon.style, {
//       position: "absolute",
//       top: `${scrollY * 0.99 + rect.top * 0.985}px`,
//       left: `${
//         scrollX +
//         rect.right * 0.935 -
//         parseNotNaN(compProp(el, "borderLeftWidth")) -
//         parseNotNaN(compProp(el, "paddingLeft")) -
//         (iconized ? iconW : 0)
//       }px`,
//       transition: "opacity 0.3s ease-in-out, transform 0.5s ease-in-out",
//       transform,
//       margin: "0",
//       padding: "0",
//     });
//     icon.classList.add("validationIcon");
//     if (valid) {
//       icon.style.transform = `scale(1.2) rotateZ(0.03turn) translateY ${transform}`;
//       setTimeout(() => {
//         if (icon instanceof HTMLElement && icon.isConnected)
//           icon.style.transform = `scale(1.2) rotateZ(0) ${transform}`;
//       }, 200);
//       setTimeout(() => {
//         if (icon instanceof HTMLElement && icon.isConnected)
//           icon.style.transform = `scale(1) rotateZ(0) ${transform}`;
//       }, 1000);
//     }
//     valid
//       ? (icon.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#54b457ad" class="bi bi-check" viewBox="0 0 16 16">
//         <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
//       </svg>`)
//       : (icon.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#e5b800" class="bi bi-exclamation" viewBox="0 0 16 16">
//         <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z"/>
//       </svg>`);
//     el.after(icon);
//     const inputRect = el.getBoundingClientRect();
//     icon.style.top = `${
//       inputRect.top +
//       inputRect.height * 0.5 -
//       icon.getBoundingClientRect().height * 0.5 +
//       scrollY -
//       parseNotNaN(compProp(el, "paddingBottom")) -
//       parseNotNaN(compProp(el, "borderBottomWidth"))
//     }px`;
//     icon.style.left = `${
//       inputRect.left -
//       inputRect.width * 0.9 +
//       icon.getBoundingClientRect().width * 0.9 -
//       scrollX +
//       parseNotNaN(compProp(el, "paddingLeft")) +
//       parseNotNaN(compProp(el, "borderLeftWidth"))
//     }`;
//     if (timers.get(idf)) clearTimeout(idf);
//     timers.set(
//       idf,
//       setTimeout(() => {
//         const icon = el?.parentElement?.querySelector(".validationIcon");
//         if (icon && icon.isConnected) icon.remove();
//       }, 10000)
//     );
//   } catch (e) {
//     return;
//   }
// }
// export function cleanStorageName(): void {
//   if (!window) return;
//   ["name", "secondName", "lastName"].forEach(n => {
//     try {
//       localStorage.setItem(n, "");
//     } catch (e) {
//       return;
//     }
//   });
// }
// export function registerPersistInputs({
//   f,
//   selects = true,
//   textareas = true,
//   inputTypes = ["text", "number", "date"],
//   queriesToExclude,
// }: {
//   f: nlFm;
//   selects: boolean;
//   textareas: boolean;
//   inputTypes?: string[];
//   queriesToExclude?: string[];
// }): void {
//   try {
//     if (!(f instanceof HTMLElement))
//       throw new Error(`Failed to validate Form Reference in the DOM`);
//     f.dataset.start = "true";
//     if (!Array.isArray(inputTypes))
//       throw new Error(`Error validating type of inputTypes argument`);
//     inputTypes = inputTypes.filter(t => typeof t === "string");
//     if (typeof selects !== "boolean") selects = false;
//     if (typeof textareas !== "boolean") textareas = false;
//     if (selects)
//       f.querySelectorAll("select").forEach(
//         s => !s.classList.contains("ssPersist") && s.classList.add("ssPersist")
//       );
//     if (textareas)
//       f.querySelectorAll("textarea").forEach(
//         ta =>
//           !ta.classList.contains("ssPersist") && ta.classList.add("ssPersist")
//       );
//     inputTypes.forEach(t =>
//       f
//         .querySelectorAll(`input[type=${t}]`)
//         .forEach(
//           inp =>
//             !inp.classList.contains("ssPersist") &&
//             inp.classList.add("ssPersist")
//         )
//     );
//     if (queriesToExclude) {
//       queriesToExclude.forEach(q => {
//         const queried = f.querySelector(q);
//         if (!queried) return;
//         queried.classList.contains("ssPersist") &&
//           queried.classList.remove("ssPersist");
//       });
//     }
//   } catch (e) {
//     return;
//   }
// }
// export function regularToSnake(str: string): string {
//   return str
//     .trim()
//     .replace(/([a-z])([A-Z])/g, "$1-$2")
//     .replace(/[\s_]+/g, "-")
//     .toLowerCase();
// }
// export function compProp(
//   el: nlEl,
//   prop: keyof CSSStyleDeclaration,
//   measure: CSSMeasure = "px"
// ): string {
//   try {
//     if (!(el instanceof Element)) return "";
//     if (typeof prop !== "string") return "";
//     if (typeof measure !== "string")
//       return (getComputedStyle(el) as any)[prop]?.trim() ?? "";
//     return (
//       (getComputedStyle(el) as any)[prop]?.replace(measure, "").trim() ?? ""
//     );
//   } catch (e) {
//     return el instanceof Element && typeof prop === "string"
//       ? (getComputedStyle(el) as any)[prop]?.trim() ?? ""
//       : "";
//   }
// }
// export const providers: { [k: string]: DataProvider | voidVal } = {
//   globalDataProvider: undefined,
// };
// const clearFlags: { [k: string]: boolean } = {};
// export class DataProvider {
//   #sessionDataState: { [key: string]: any };
//   constructor(_dataSessionState: { [key: string]: any }) {
//     this.#sessionDataState = _dataSessionState;
//     addEventListener("beforeunload", () => {
//       this.#sessionDataState = {};
//       [
//         "formSched",
//         "formAddStud",
//         "formAddProf",
//         "regstPacDlg",
//         "CPFFillerDiv",
//         "formAnamGId",
//         "formOdont",
//         "formEdFis",
//       ].forEach(form => {
//         if (sessionStorage.getItem(form)) {
//           const prevPath = location.pathname;
//           setTimeout(
//             () =>
//               !location.pathname.includes(prevPath) &&
//               sessionStorage.removeItem(form),
//             1000
//           );
//         }
//       });
//     });
//   }
//   public initPersist(
//     element: HTMLElement,
//     provider: DataProvider | voidVal = providers.globalDataProvider,
//     userClass: privilege = "student"
//   ): void {
//     const checkTimer = 500;
//     provider ??= new DataProvider(element);
//     setTimeout(() => {
//       provider ??= new DataProvider(element);
//       const storageTimeout = setTimeout(() => {
//         if (!(document.getElementById(`${element.id}`) || !element)) {
//           clearTimeout(storageTimeout);
//           return;
//         }
//         clearFlags[`${element.id}`] = true;
//         this.#evaluatePersistence(element);
//         const persistInterv = setInterval(interv => {
//           if (
//             !clearFlags[`${element.id}`] ||
//             !this.#checkForm(element.id, interv)
//           )
//             setTimeout(() => {
//               clearInterval(interv);
//               return;
//             }, 200);
//           else this.#evaluatePersistence(element);
//         }, 1000);
//         if (
//           element.id === "formSched" ||
//           element.id === "formAddStud" ||
//           element.id === "formAddProf" ||
//           element.id === "regstPacDlg" ||
//           element.id === "CPFFillerDiv"
//         ) {
//           (() => {
//             try {
//               const panelSelect = document.getElementById("coordPanelSelect");
//               if (!(panelSelect instanceof HTMLSelectElement)) return;
//               let isTargPanelRendered = true;
//               const handleSessionPanelChange = (elementId: string): void => {
//                 try {
//                   const scope = document.getElementById(elementId);
//                   if (!(scope instanceof HTMLElement)) {
//                     clearInterval(persistInterv);
//                     return;
//                   }
//                   const persisters = sessionStorage.getItem(elementId);
//                   if (!persisters) return;
//                   this.#initSelectParsing(
//                     document.getElementById(elementId)!,
//                     elementId
//                   );
//                 } catch (err) {
//                   return;
//                 }
//                 !this.#checkForm(elementId)
//                   ? (isTargPanelRendered = false)
//                   : (isTargPanelRendered = true);
//                 !isTargPanelRendered &&
//                   ((): void => {
//                     panelSelect.removeEventListener("change", () =>
//                       handleSessionPanelChange(elementId)
//                     );
//                   })();
//               };
//               panelSelect.addEventListener("change", () =>
//                 handleSessionPanelChange(element.id)
//               );
//             } catch (err) {
//               return;
//             }
//           })();
//         }
//       }, checkTimer);
//       setTimeout(() => {
//         if (sessionStorage[element.id]) {
//           provider ??= new DataProvider(element);
//           provider.#parseSessionStorage(element, element.id, userClass);
//         }
//       }, checkTimer * 2);
//     }, 300);
//   }
//   #checkForm(elementId: string, storageInterval?: NodeJS.Timer): boolean {
//     if (!document.getElementById(elementId)) {
//       //@ts-ignore
//       storageInterval && clearInterval(storageInterval);
//       clearFlags[`${elementId}`] = false;
//       return false;
//     }
//     return true;
//   }
//   #evaluatePersistence(scope: queryableNode = document): {
//     [key: string]: string;
//   } {
//     if (
//       scope instanceof HTMLElement &&
//       sessionStorage.getItem(scope.id) &&
//       scope.dataset.start === "true"
//     ) {
//       this.#parseSessionStorage(scope, scope.id);
//       delete scope.dataset.start;
//     }
//     this.#sessionDataState = DataProvider.#persistSessionEntries(
//       scope as HTMLElement | Document | undefined
//     );
//     if (scope instanceof HTMLElement)
//       sessionStorage.setItem(
//         `${scope.id}`,
//         JSON.stringify(this.#sessionDataState)
//       );
//     return this.#sessionDataState;
//   }
//   static #persistSessionEntries(scope: queryableNode = document): {
//     [k: string]: string;
//   } {
//     const persisters = [
//       ...(scope?.querySelectorAll(".ssPersist") ?? []),
//       ...(scope?.querySelectorAll(".lcPersist") ?? []),
//     ];
//     const sessionData: { [key: string]: string } = {};
//     for (const persister of persisters) {
//       if (
//         (persister instanceof HTMLInputElement &&
//           !(
//             persister.type === "radio" ||
//             persister.type === "checkbox" ||
//             persister.type === "button" ||
//             persister.type === "reset" ||
//             persister.type === "submit"
//           )) ||
//         persister instanceof HTMLTextAreaElement ||
//         persister instanceof HTMLSelectElement
//       )
//         sessionData[`${persister.id || persister.name}`] = persister.value;
//       else if (
//         persister instanceof HTMLInputElement &&
//         (persister.type === "radio" || persister.type === "checkbox")
//       )
//         sessionData[`${persister.id || persister.name}`] =
//           persister.checked.toString();
//       else if (persister instanceof HTMLElement) {
//         sessionData[
//           `${
//             persister.id ||
//             (persister instanceof HTMLSlotElement && persister.name)
//           }`
//         ] = persister.innerHTML;
//       }
//     }
//     return sessionData;
//   }
//   #parseSessionStorage(
//     scope: queryableNode = document,
//     scopeRef: string,
//     userClass: string = "student"
//   ): void {
//     const persisters =
//       sessionStorage.getItem(scopeRef) ||
//       JSON.stringify(this.#sessionDataState);
//     if (persisters) {
//       Object.entries(JSON.parse(persisters)).forEach(entry => {
//         const fetchedEl =
//           scope?.querySelector(`#${entry[0]}`) ||
//           document.querySelector(`#${entry[0]}`);
//         if (
//           (fetchedEl instanceof HTMLInputElement &&
//             !(
//               fetchedEl.type === "radio" ||
//               fetchedEl.type === "checkbox" ||
//               fetchedEl.type === "button" ||
//               fetchedEl.type === "reset" ||
//               fetchedEl.type === "submit"
//             )) ||
//           fetchedEl instanceof HTMLTextAreaElement ||
//           fetchedEl instanceof HTMLSelectElement
//         ) {
//           fetchedEl.value = entry[1] as string;
//         } else if (
//           fetchedEl instanceof HTMLInputElement &&
//           (fetchedEl.type === "radio" || fetchedEl.type === "checkbox")
//         ) {
//           entry[1] === "true" || entry[1] === true
//             ? (fetchedEl.checked = true)
//             : (fetchedEl.checked = false);
//         } else if (fetchedEl instanceof HTMLElement) {
//           fetchedEl.innerHTML = entry[1] as string;
//           const monthSelector = document.getElementById("monthSelector");
//           (monthSelector instanceof HTMLSelectElement ||
//             monthSelector instanceof HTMLInputElement) &&
//             userClass &&
//             handleScheduleChange(
//               monthSelector,
//               document.getElementById("tbSchedule"),
//               userClass,
//               panelFormsVariables.isAutoFillMonthOn
//             );
//         }
//       });
//     }
//   }
//   #initSelectParsing(scope: queryableNode = document, scopeRef: string): void {
//     const persisters = sessionStorage.getItem(scopeRef);
//     if (persisters) {
//       Object.entries(JSON.parse(persisters)).forEach(entry => {
//         const fetchedEl =
//           scope?.querySelector(`#${entry[0]}`) ||
//           document.querySelector(`#${entry[0]}`);
//         if (
//           (fetchedEl instanceof HTMLInputElement &&
//             !(
//               fetchedEl.type === "radio" ||
//               fetchedEl.type === "checkbox" ||
//               fetchedEl.type === "button" ||
//               fetchedEl.type === "reset" ||
//               fetchedEl.type === "submit"
//             )) ||
//           fetchedEl instanceof HTMLTextAreaElement ||
//           fetchedEl instanceof HTMLSelectElement
//         ) {
//           fetchedEl.value = entry[1] as string;
//         } else if (
//           fetchedEl instanceof HTMLInputElement &&
//           (fetchedEl.type === "radio" || fetchedEl.type === "checkbox")
//         ) {
//           entry[1] === "true" || entry[1] === true
//             ? (fetchedEl.checked = true)
//             : (fetchedEl.checked = false);
//         } else if (fetchedEl instanceof HTMLElement) {
//           fetchedEl.innerHTML = entry[1] as string;
//           if (fetchedEl.classList.contains("consSlot")) {
//             const aptBtn = fetchedEl.querySelector(".appointmentBtn");
//             if (aptBtn) {
//               aptBtn.addEventListener("click", ev =>
//                 handleAptBtnClick(ev as MouseEvent, user.userClass)
//               );
//             }
//             const user = localStorage.getItem("activeUser")
//               ? JSON.parse(localStorage.getItem("activeUser")!)
//               : defUser;
//             if (
//               user.userClass === "coordenador" ||
//               user.userClass === "supervisor"
//             ) {
//               const eraser = fetchedEl.querySelector(".btn-close");
//               if (eraser) {
//                 eraser.addEventListener("click", () => {
//                   const relCel = eraser.closest("slot");
//                   if (
//                     relCel instanceof HTMLElement &&
//                     eraser instanceof HTMLElement
//                   )
//                     replaceBtnSlot(
//                       relCel.querySelector("[id*=appointmentBtn]"),
//                       relCel
//                     );
//                 });
//               }
//               const dayCheck = fetchedEl.querySelector(".apptCheck");
//               if (dayCheck) {
//                 dayCheck.addEventListener("change", () => {
//                   if (
//                     dayCheck instanceof HTMLInputElement &&
//                     (dayCheck.type === "checkbox" || dayCheck.type === "radio")
//                   )
//                     checkConfirmApt(dayCheck);
//                 });
//                 verifyAptCheck(dayCheck);
//               }
//             }
//           }
//         }
//       });
//     }
//   }
// }
