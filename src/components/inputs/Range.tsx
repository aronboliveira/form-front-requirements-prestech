"use client";
import { classes, colors } from "@/lib/client/vars";
import { RangeInputBlock } from "@/lib/definitions/client/interfaces/components";
import { useCallback, useEffect, useRef, useState } from "react";
import s from "@/styles/modules/range.module.scss";
import { nlInp } from "@/lib/definitions/client/helpers";
import IOHandler from "@/lib/client/handlers/IOHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import MathHandler from "@/lib/client/handlers/MathHandler";
import StyleValidator from "@/lib/client/validators/StyleValidator";
import { complexityLevel, rangeCtxId } from "@/lib/definitions/foundations";
import Bi from "../bloc/fieldsets/ranged/office/OfficeBi";
import StoragePlatforms from "../bloc/fieldsets/ranged/office/OfficeStorage";
import Crms from "../bloc/fieldsets/ranged/office/OfficeCrms";
import Docs from "../bloc/fieldsets/ranged/office/OfficeDocs";
import Erps from "../bloc/fieldsets/ranged/office/OfficeErps";
import FormBuilders from "../bloc/fieldsets/ranged/office/OfficeForms";
import Planning from "../bloc/fieldsets/ranged/office/OfficePlanning";
import Spreadsheets from "../bloc/fieldsets/ranged/office/OfficeSpreadsheets";
import { JSX } from "react/jsx-runtime";
export default function Range(props: RangeInputBlock): JSX.Element {
  const r = useRef<nlInp>(null),
    coloringStylesheet = useRef<CSSStyleSheet | undefined>(undefined),
    handleTrackSlide = (val: number): string => {
      switch (val) {
        case 1:
          return colors.orangeRed;
        case 2:
          return colors.orangeBasic;
        case 3:
          return colors.yellowGold;
        case 4:
          return colors.greenMid;
        case 5:
          return colors.turquoise;
        default:
          return colors.grey;
      }
    },
    handleCtxComponent = useCallback(
      (lvl: complexityLevel): JSX.Element => {
        switch (props.id as rangeCtxId) {
          case "businessInteligence":
            return <Bi lvl={lvl} />;
          case "cloudStorage":
            return <StoragePlatforms lvl={lvl} />;
          case "Crms":
            return <Crms lvl={lvl} />;
          case "docs":
            return <Docs lvl={lvl} />;
          case "Erps":
            return <Erps lvl={lvl} />;
          case "formBuilders":
            return <FormBuilders lvl={lvl} />;
          case "planning":
            return <Planning lvl={lvl} />;
          case "spreadSheets":
            return (
              <Spreadsheets
              // lvl={lvl}
              />
            );
          default:
            return <></>;
        }
      },
      [props.id]
    ),
    min = 0,
    max = 100,
    modulator = 20,
    [ctxLevel, setCtxFs] = useState<complexityLevel | 0>(0);
  useEffect(() => {
    if (
      !(r.current instanceof HTMLInputElement) ||
      (r.current instanceof HTMLElement &&
        r.current.dataset.slideable === "true")
    )
      return;
    r.current.value = "0";
    r.current.addEventListener("change", ev => {
      if (!(ev.currentTarget instanceof HTMLInputElement)) return;
      IOHandler.handleRangeSlide(ev.currentTarget);
      if (!coloringStylesheet.current)
        coloringStylesheet.current = StyleHandler.findStyleSheet(/bootstrap@/g);
      if (!coloringStylesheet.current) return;
      const pseudoElement = StyleHandler.defineRangeThumbPseudoElement();
      if (!pseudoElement) return;
      const i = StyleHandler.findCssRule(
        coloringStylesheet.current,
        new RegExp(pseudoElement)
      );
      if (i === -1) return;
      const rule = coloringStylesheet.current.cssRules[i].cssText;
      if (!rule.match("scale") && rule.match(":focus")) {
        StyleHandler.replaceCssRule(
          coloringStylesheet.current,
          i,
          `transform: scale(1.2)`,
          true
        );
        coloringStylesheet.current.insertRule(
          `.form-range.${s.range}:not(:focus)${pseudoElement} { transform: scale(1); }`
        );
      }
      const curr = MathHandler.parseNotNaN(ev.currentTarget.value, 0, "int"),
        pseudos = StyleValidator.scanPseudoSelectorTag();
      if (!pseudos) return;
      let val = (curr - (curr % modulator)) * 0.05;
      const bgColor = handleTrackSlide(
        (val !== 0 && val !== 5) || (curr <= 0 && curr >= 20) ? val + 1 : val
      );
      const idf = ev.currentTarget.id;
      setTimeout(() => {
        const el = document.getElementById(idf);
        if (!(el instanceof HTMLInputElement)) return;
        const update = (color: keyof typeof colors, v: string) => {
          StyleHandler.updatePseudos({
            idf: `.form-range#${idf}`,
            pseudo: pseudoElement,
            prop: "background-color",
            value: colors[color],
          });
          setTimeout(() => {
            let value = Math.round(MathHandler.parseNotNaN(v));
            value = (value - (value % modulator)) * 0.05;
            if (value < 0) value = 0;
            if (value > 5) value = 5;
            setCtxFs(value as complexityLevel);
          }, 500);
        };
        switch (el.value) {
          case "20":
            update("orangeRed", el.value);
            break;
          case "40":
            update("orangeBasic", el.value);
            break;
          case "60":
            update("yellowGold", el.value);
            break;
          case "80":
            update("greenMid", el.value);
            break;
          case "100":
            update("turquoise", el.value);
            break;
          default:
            const parsed = MathHandler.parseNotNaN(el.value, 0, "int");
            /* eslint-disable */
            parsed > 50
              ? update("greenMid", el.value)
              : parsed > 20
              ? update("orangeBasic", el.value)
              : update("grey", el.value);
          /* eslint-enable */
        }
      }, 200);
      StyleHandler.updatePseudos({
        idf: `.form-range#${ev.currentTarget.id}`,
        pseudo: pseudoElement,
        prop: "background-color",
        value: bgColor,
      });
    });
    r.current.dataset.slideable = "true";
  }, [r]);
  return (
    <fieldset className={`${classes.inpDivClasses} ${s.divRange}`}>
      <label
        className={`${classes.inpLabClasses} labelRange`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <div>
        <span className={`${s.rangeNumRef} ${s.rangeMin}`}>{min}</span>
        <input
          ref={r}
          type='range'
          min={min}
          max={max}
          data-sliding='false'
          className={`form-range ${s.range}`}
          id={props.id}
        />
        <span className={`${s.rangeNumRef} ${s.rangeMax}`}>
          {Math.round(
            Number.isFinite(max / modulator) ? max / modulator : max * 0.05
          )}
        </span>
      </div>
      {ctxLevel >= 1 && handleCtxComponent(ctxLevel as complexityLevel)}
    </fieldset>
  );
}
