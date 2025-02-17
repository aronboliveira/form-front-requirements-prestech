"use client";
import MathHandler from "@/lib/client/handlers/MathHandler";
import { flags, trackedIds } from "@/lib/client/vars";
import { useCallback, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import TimeoutModal from "../modals/TimeoutModal";
import withModalDispatch from "../highOrder/withModalDispatch";
import { WatcherProps } from "@/lib/definitions/client/interfaces/components";
import ContextValidator from "@/lib/client/validators/ContextValidator";
import DOMValidator from "@/lib/client/validators/DOMValidator";
import IOHandler from "@/lib/client/handlers/IOHandler";
import StringHelper from "@/lib/helpers/StringHelper";
import { limits } from "@/lib/vars";
export default function Watcher({
  _case,
  d,
  v,
}: WatcherProps) {
  const cycle = useCallback(() => {
      if (!d) return;
      let role = sessionStorage.getItem("role");
      if (!role) {
        const roleEl = document.getElementById("role");
        if (
          !roleEl ||
          !(roleEl && DOMValidator.isDefaultEntry(roleEl))
        )
          return;
        role = roleEl.value;
      }
      /* eslint-disable */
      ContextValidator.isRoleType(role) &&
        (!v ||
          !ContextValidator.isRoleType(v) ||
          v !== role) &&
        d(role);
      /* eslint-enable */
    }, [_case, d, v]),
    loopCounter = useRef<number>(0);
  useEffect(() => {
    if (
      _case !== "mainForm" ||
      document.body.dataset.oncount === "true"
    )
      return;
    sessionStorage.setItem("timer", "3600000");
    const interv = setInterval(i => {
      if (document.body.dataset.oncount === "false") return;
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
      if (
        newTimer <= 0 ||
        /timeout\=open/g.test(location.search)
      ) {
        if (t !== "0" && t !== "1")
          localStorage.setItem("bypassedTimer", "true");
        document.body.innerHTML = "";
        const Enhanced = withModalDispatch(TimeoutModal);
        createRoot(document.body).render(<Enhanced />);
        clearInterval(i);
        document.body.dataset.oncount = "false";
        return;
      }
      for (const e of [...document.forms].flatMap(f =>
        [...f.elements].filter(e => DOMValidator.isEntry(e))
      )) {
        if (!DOMValidator.isDefaultCheckable(e)) continue;
        if (e.name === "main") {
          if (e.dataset.namewarned !== "true") {
            e.before(
              document.createComment(
                "WARNING: Automatically generated name"
              )
            );
            e.dataset.namewarned = "true";
          }
          e.name = StringHelper.sanitizePropertyName(
            crypto.randomUUID()
          );
        }
      }
      for (const e of document.querySelectorAll("*")) {
        if (!(e instanceof HTMLElement) || !e.dataset.idacc)
          return;
        let acc = Math.ceil(
          MathHandler.parseNotNaN(e.dataset.idacc, 1, "int")
        );
        if (acc < 2) return;
        const repetitionIndexes = Array(acc - 1)
            .fill(0)
            .map((_, i) => i + 1),
          repetitionElements = document.querySelectorAll(
            `[id^=${e}]`
          );
        if (!repetitionElements.length) return;
        for (const i of repetitionIndexes) {
          const r = repetitionElements[i];
          if (!(r instanceof HTMLElement)) continue;
          if (!r.dataset.idacc)
            r.dataset.idacc = i.toString();
        }
      }
      if (document.body.dataset.xssprotected !== "true") {
        IOHandler.setXSSInputProtection();
        setInterval(IOHandler.setXSSInputProtection, 1_000);
        document.body.dataset.xssprotected = "true";
      }
      sessionStorage.setItem("timer", newTimer.toString());
    }, 1_000);
    setTimeout(() => {
      clearInterval(interv);
      sessionStorage.removeItem("timer");
      flags.failedTimeoutAttempts = 0;
    }, 3_600_000);
    setTimeout(() => {
      if (document.body.dataset.idprotected !== "true") {
        setInterval(interv => {
          if (
            loopCounter.current >
            limits.small.MAX_UTF16_SIGNED_SURROGATE
          ) {
            clearInterval(interv);
            return;
          }
          loopCounter.current = 0;
          trackedIds.clear();
          const allEls = document.querySelectorAll("*"),
            start = performance.now();
          for (let i = 0; i < allEls.length; i++) {
            if (
              performance.now() - start >
              flags.MAX_ALLOWED_SHORT_PROCESS_TIME
            ) {
              console.warn(
                `Process exceded time. Exiting main loop`
              );
              break;
            }
            setTimeout(() => {
              for (let j = 0; j < trackedIds.size; j++) {
                if (
                  performance.now() - start >
                  flags.MAX_ALLOWED_SHORT_PROCESS_TIME
                ) {
                  console.warn(
                    `Process exceded time. Exiting inner loop`
                  );
                  loopCounter.current =
                    ++loopCounter.current;
                  break;
                }
                if (!allEls[j].id) continue;
                if (
                  trackedIds.has(allEls[j].id) &&
                  (document.querySelectorAll(
                    `#${allEls[j].id}`
                  ).length > 1 ||
                    !StringHelper.isSaneAttrName(
                      allEls[j].id
                    ))
                )
                  allEls[j].id =
                    MathHandler.generateRandomId(
                      allEls[j],
                      allEls[j].id
                    );
              }
              trackedIds.add(allEls[i].id);
            }, 500);
          }
        }, 3_000);
        document.body.dataset.idprotected = "true";
      }
    }, 5_000);
    document.body.dataset.oncount = "true";
  }, [_case]);
  useEffect(() => {
    if (
      _case !== "role" ||
      document.body.dataset.observingrole === "true"
    )
      return;
    cycle();
    setInterval(cycle, 1_000);
    document.body.dataset.observingrole = "true";
  }, [_case, cycle]);
  return (
    <span
      className='watcher'
      id={`watcher__${_case}`}
      style={{ display: "none" }}
    ></span>
  );
}
