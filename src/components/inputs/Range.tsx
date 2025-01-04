import { classes } from "@/lib/client/vars";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
import { useState, useEffect, useCallback, useRef } from "react";
import s from "@/styles/modules/range.module.scss";
import { nlInp } from "@/lib/definitions/helpers";
import IOHandler from "@/lib/client/handlers/IOHandler";
export default function Range(props: OptInput) {
  const r = useRef<nlInp>(null),
    [trackColor, setTrackColor] = useState("#8a8888f"),
    handleTrackSlide = useCallback(
      (val: number): void => {
        switch (val) {
          case 0:
            setTrackColor("#8a8888");
            break;
          case 1:
            setTrackColor("#ff4d4d");
            break;
          case 1:
            setTrackColor("#ffa500");
            break;
          case 2:
            setTrackColor("#ffea00");
            break;
          case 3:
            setTrackColor("#32cd32");
            break;
          case 4:
            setTrackColor("#11c2dded");
            break;
          case 5:
            setTrackColor("#333fcbed");
            break;
          default:
            setTrackColor("#8a8888");
            break;
        }
      },
      [setTrackColor]
    ),
    min = 0,
    max = 100;
  useEffect(() => {
    if (
      !(r.current instanceof HTMLInputElement) ||
      (r.current instanceof HTMLElement &&
        r.current.dataset.slideable === "true")
    )
      return;
    r.current.value = "0";
    r.current.addEventListener(
      "change",
      ev =>
        ev.currentTarget instanceof HTMLInputElement &&
        IOHandler.handleRangeSlide(ev.currentTarget)
    );
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
        <span className={`${s.rangeNumRef} ${s.rangeMax}`}>{max * 0.05}</span>
      </div>
    </div>
  );
}
