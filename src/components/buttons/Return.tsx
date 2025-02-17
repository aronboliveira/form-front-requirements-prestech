"use client";
import { classes } from "@/lib/client/vars";
import { JSX, useEffect } from "react";
export default function Return(): JSX.Element {
  useEffect(() => {
    for (const i of [
      "notFirstSession",
      "requirementsForm",
      "timer",
      "toBeDelayed",
      "activeUser",
    ])
      sessionStorage.removeItem(i);
  }, []);
  return (
    <button
      className={classes.btnPrim}
      style={{
        background:
          "radial-gradient(circle at bottom left, #0278ff, #619df7)",
        border: "none",
        fontWeight: 600,
        marginLeft: "1rem",
        marginTop: "1rem",
      }}
      aria-label='Retornar'
      title='Retornar para a página de formulário'
      onClick={() => {
        location.href = `${location.origin}`;
      }}
    >
      Retornar
    </button>
  );
}
