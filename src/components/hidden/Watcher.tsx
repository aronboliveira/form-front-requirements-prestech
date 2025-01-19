"use client";
import MathHandler from "@/lib/client/handlers/MathHandler";
import { flags } from "@/lib/client/vars";
import { useCallback, useEffect } from "react";
import { createRoot } from "react-dom/client";
import TimeoutModal from "../modals/TimeoutModal";
import withModalDispatch from "../highOrder/withModalDispatch";
import { WatcherProps } from "@/lib/definitions/client/interfaces/components";
import ContextValidator from "@/lib/client/validators/ContextValidator";
import DOMValidator from "@/lib/client/validators/DOMValidator";
export default function Watcher({ _case, d, v }: WatcherProps) {
  const cycle = useCallback(() => {
    if (!d) return;
    let role = sessionStorage.getItem("role");
    if (!role) {
      const roleEl = document.getElementById("role");
      if (!roleEl || !(roleEl && DOMValidator.isDefaultEntry(roleEl))) return;
      role = roleEl.value;
    }
    ContextValidator.isRoleType(role) &&
      (!v || !ContextValidator.isRoleType(v) || v !== role) &&
      d(role);
  }, [_case, d]);
  useEffect(() => {
    if (_case !== "mainForm" || document.body.dataset.oncount === "true")
      return;
    sessionStorage.setItem("timer", "3600000");
    const interv = setInterval(i => {
      const t = sessionStorage.getItem("timer");
      if (!t) {
        flags.failedTimeoutAttempts += 1;
        return;
      }
      const tn = MathHandler.parseNotNaN(t, -1, "int");
      if (tn === -1) {
        flags.failedTimeoutAttempts += 1;
        return;
      }
      const newTimer = tn - 1 - flags.failedTimeoutAttempts;
      flags.failedTimeoutAttempts = 0;
      if (newTimer <= 0) {
        document.body.innerHTML = "";
        const Enhanced = withModalDispatch(TimeoutModal);
        createRoot(document.body).render(<Enhanced />);
        clearInterval(i);
        return;
      }
      sessionStorage.setItem("timer", newTimer.toString());
    }, 1_000);
    setTimeout(() => {
      clearInterval(interv);
      sessionStorage.removeItem("timer");
      flags.failedTimeoutAttempts = 0;
    }, 3_600_000);
    document.body.dataset.oncount = "true";
  }, [_case]);
  useEffect(() => {
    if (_case !== "role" || document.body.dataset.observingrole === "true")
      return;
    cycle();
    setInterval(cycle, 1_000);
    document.body.dataset.observingrole = "true";
  }, [_case]);
  return (
    <span
      className='watcher'
      id={`watcher__${_case}`}
      style={{ display: "none" }}
    ></span>
  );
}
