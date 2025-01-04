import MathHandler from "@/lib/client/handlers/MathHandler";
import { classes } from "@/lib/client/vars";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
import { useState, useEffect, useCallback } from "react";
export default function Range(props: OptInput) {
  const [v, setV] = useState(0),
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
    );
  useEffect(() => handleTrackSlide(v), [v]);
  return (
    <div className={`${classes.inpDivClasses} divRange`}>
      <label className={`${classes.inpLabClasses} labelRange`}>
        {props.label}
      </label>
      <input
        value={v}
        type='range'
        min='0'
        max='5'
        className='form-range'
        id={props.id}
        style={{
          background: `linear-gradient(to right, ${trackColor} ${
            v * 20
          }%, #ddd ${v * 20}%)`,
        }}
        onChange={ev =>
          setV(prev =>
            MathHandler.parseNotNaN(ev.currentTarget.value, prev, "int")
          )
        }
      />
    </div>
  );
}
