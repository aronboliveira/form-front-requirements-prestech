"use client";
import { classes, colors } from "@/lib/client/vars";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
import { useEffect, useRef } from "react";
import s from "@/styles/modules/range.module.scss";
import { nlInp } from "@/lib/definitions/client/helpers";
import IOHandler from "@/lib/client/handlers/IOHandler";
import StyleHandler from "@/lib/client/handlers/StyleHandler";
import MathHandler from "@/lib/client/handlers/MathHandler";
import StyleValidator from "@/lib/client/validators/StyleValidator";
export default function Range(props: OptInput) {
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
    min = 0,
    max = 100,
    modulator = 20;
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
        const update = (color: keyof typeof colors) => {
          StyleHandler.updatePseudos({
            idf: `.form-range#${idf}`,
            pseudo: pseudoElement,
            prop: "background-color",
            value: colors[color],
          });
        };
        console.log(el.value);
        switch (el.value) {
          case "20":
            update("orangeRed");
            break;
          case "40":
            update("orangeBasic");
            break;
          case "60":
            update("yellowGold");
            break;
          case "80":
            update("greenMid");
            break;
          case "100":
            update("turquoise");
            break;
          default:
            const parsed = MathHandler.parseNotNaN(el.value, 0, "int");
            parsed > 50
              ? update("greenMid")
              : parsed > 20
              ? update("orangeBasic")
              : update("grey");
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
    <div className={`${classes.inpDivClasses} ${s.divRange}`}>
      <label className={`${classes.inpLabClasses} labelRange`}>
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
    </div>
  );
}
