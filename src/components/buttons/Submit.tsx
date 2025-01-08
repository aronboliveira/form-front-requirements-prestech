"use client"
import { classes } from "@/lib/client/vars";
export default function Submit() {
  return (
    <button type='submit' id='btnSubmit' className={classes.btnPrim}>
      Enviar
    </button>
  );
}
