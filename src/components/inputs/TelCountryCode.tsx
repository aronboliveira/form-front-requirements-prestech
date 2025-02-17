"use client";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import PhoneInput from "react-phone-input-2";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { TelFragmentOptInput } from "@/lib/definitions/client/interfaces/components";
import {
  classes,
  countingLabels,
  usedNames,
} from "@/lib/client/vars";
import "react-phone-input-2/lib/style.css";
import StringHelper from "@/lib/helpers/StringHelper";
import {
  nlDiv,
  nlHtEl,
  nlInp,
  voidish,
} from "@/lib/definitions/client/helpers";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import useCountedEntry from "@/lib/client/hooks/useCountedEntry";
import MathHandler from "@/lib/client/handlers/MathHandler";
import DOMValidator from "@/lib/client/validators/DOMValidator";
export default function TelCountryCode({
  required,
  id,
}: TelFragmentOptInput) {
  id ||= "countryCode";
  const drId = `div__${id}`;
  const [v, setV] = useState<string>(""),
    dr = useRef<nlDiv>(null),
    r = useRef<nlHtEl>(null),
    [ref, setRef] = useState<boolean>(true),
    [k, setK] = useState<number>(0),
    linkedTo = useRef<nlHtEl>(null),
    checkOrder = useCallback((): {
      updated: boolean;
      newValue: string;
    } => {
      let updated = false;
      if (!r.current) return { updated, newValue: "" };
      let isFromNext = false,
        isFromPrevious = false,
        order =
          r.current.dataset.idacc ||
          dr.current?.dataset.idacc ||
          (r.current.closest(".telBlock") as HTMLElement)
            ?.dataset?.idacc;
      if (!order) {
        isFromNext = true;
        const sibling = r.current?.closest(".telBlock")
          ?.nextElementSibling as HTMLElement | voidish;
        if (
          sibling instanceof HTMLElement &&
          sibling?.classList.contains(".telBlock")
        )
          order =
            sibling?.dataset.idacc ||
            sibling?.querySelector("input")?.dataset.idacc;
        order =
          sibling?.dataset.idacc ||
          sibling?.querySelector("input")?.dataset.idacc;
      }
      if (!order) {
        isFromNext = false;
        isFromPrevious = true;
        const sibling =
          r.current?.closest(
            ".telBlock"
          )?.previousElementSibling;
        if (
          sibling instanceof HTMLElement &&
          sibling.classList.contains(".telBlock")
        )
          order =
            sibling?.dataset.idacc ||
            sibling?.querySelector("input")?.dataset.idacc;
      }
      if (!order) return { updated, newValue: "" };
      let repetition = MathHandler.parseNotNaN(
        order,
        1,
        "int"
      );
      if (!repetition) return { updated, newValue: "" };
      if (isFromNext) repetition -= 1;
      else if (isFromPrevious) repetition += 1;
      const newValue = repetition.toString();
      updated = true;
      r.current.setAttribute("data-idacc", newValue);
      return { updated, newValue };
    }, [r, dr]),
    { name, setName } = useCountedEntry(
      r,
      StringHelper.camelToSnake(id),
      ref,
      setK
    );
  useEffect(() => {
    if (!id || !dr.current) return;
    r.current = dr.current.querySelector(".cc");
    if (!(r.current instanceof HTMLInputElement)) return;
    linkedTo.current =
      r.current
        .closest(".telBlock")
        ?.querySelector(".ddd") ??
      document.getElementById(
        r.current.id.replace("cc", "ddd")
      );
    if (
      !(
        linkedTo.current instanceof HTMLInputElement ||
        linkedTo.current instanceof HTMLTextAreaElement
      )
    )
      return;
    if (r.current.value.length > 3) {
      IOHandler.moveCursorFocus(
        r.current,
        linkedTo.current,
        4
      );
      r.current.blur();
      dr.current.click();
      linkedTo.current.focus();
    }
    IOHandler.syncLabel(r.current as nlInp);
    required && StyleHandler.alarmBorder(r.current);
    setRef(true);
  }, [r, v]);
  useEffect(() => {
    if (!ref) return;
    setK(prev => prev + 1);
  }, [ref]);
  useEffect(() => {
    if (
      !r.current ||
      r.current.dataset.repitiontracked === "true"
    )
      return;
    setInterval(() => {
      if (!r.current) return;
      const { updated, newValue } = checkOrder();
      if (!updated) return;
      setTimeout(() => {
        if (!r.current) return;
        dr.current ??= document.getElementById(
          drId
        ) as nlDiv;
        let changed = false;
        console.log([
          r.current.id,
          drId,
          r.current.closest(".telBlock"),
          dr.current?.closest(".telBlock"),
          r.current.isConnected,
          dr.current?.isConnected,
        ]);
        if (!r.current.isConnected) {
          setV(v => `${v}\n`);
          changed = true;
          const cc =
            r.current
              .closest(".telBlock")
              ?.querySelector(".cc") ||
            dr.current
              ?.closest(".telBlock")
              ?.querySelector(".cc");
          if (cc) cc.id = r.current.id;
        }
        if (
          r.current.id === "countryCode" ||
          !r.current.id.startsWith("countryCode") ||
          !Array.from({ length: 5 }, (_, i) => i + 1).some(
            c =>
              r.current &&
              r.current.id.endsWith(c.toString())
          )
        ) {
          r.current.id = `countryCode__${newValue}`;
          changed = true;
          console.log(
            "New id as " + `countryCode__${newValue}`
          );
        }
        const ordinal = usedNames.ordinalMap.get(
          MathHandler.parseNotNaN(newValue, 1, "int") - 1
        );
        if (
          ordinal &&
          DOMValidator.isDefaultEntry(r.current) &&
          (r.current.name === "countryCode" ||
            !r.current.name.startsWith("countryCode") ||
            !countingLabels.some(c =>
              (r.current as HTMLInputElement).name.endsWith(
                c
              )
            ))
        ) {
          setName(`countryCode${ordinal}`);
          r.current.name = `countryCode${ordinal}`;
          changed = true;
        }
        changed &&
          setTimeout(() => setK(prev => prev + 1), 500);
      }, 500);
    }, 5_000);
    r.current.setAttribute(
      "data-repetitiontracked",
      "true"
    );
    setK(prev => prev + 1);
  }, [r]);
  return (
    <div
      ref={dr}
      className={`${classes.inpDivClasses} countryCodeBlock`}
      key={k}
      id={drId}
    >
      <label className={classes.inpLabClasses} htmlFor={id}>
        Código
      </label>
      <PhoneInput
        value={v}
        country='br'
        inputClass={classes.ccClasses}
        buttonClass='button-secondary'
        searchClass='search'
        searchPlaceholder='Pesquise aqui'
        searchNotFound='Sem resultados!'
        defaultErrorMessage='Houve algum erro!'
        defaultMask='+.. (Exemplo: +55)'
        inputProps={{
          name,
          id,
          required,
          autoComplete: "tel-country-code",
          minLength: 1,
          maxLength: 4,
          pattern: "^\\+[0-9]{2,4}s?$",
          "data-fixed": "true",
        }}
        containerStyle={{
          width: "6rem",
          fontSize: "1rem",
          marginTop: "0",
        }}
        searchStyle={{
          backgroundColor: "var(--bs-body-bg)",
          color: "var(--bs-body-color)",
        }}
        autocompleteSearch={true}
        autoFormat={false}
        enableSearch={true}
        countryCodeEditable={true}
        disableDropdown={false}
        onChange={val =>
          setV(IOHandler.adjustTelCountryCode(val))
        }
      />
    </div>
  );
}
