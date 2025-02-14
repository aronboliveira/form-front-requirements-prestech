"use client";
import { FormCtx } from "@/components/forms/RequirementForm";
import {
  classes,
  friendlyRoles,
  groupedApps,
} from "@/lib/client/vars";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import {
  PseudoNum,
  roleType,
} from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import TechCheckboxes from "./TechCheckboxes";
import { ErrorBoundary } from "react-error-boundary";
import GenericErrorComponent from "../../errors/Error";
import Watcher from "@/components/hidden/Watcher";
export default function TechnologiesLists() {
  let role: roleType = "undefined";
  let setRole = null;
  const base = "TechCb",
    [key, setKey] = useState<string>(crypto.randomUUID()),
    fsBase = `fs${base}`,
    legBase = `leg${base}`,
    ctx = useContext<IFormCtx>(FormCtx);
  role = ctx?.role || "undefined";
  setRole = ctx?.setRole || null;
  const cRole = StringHelper.capitalize(role),
    roleApps = groupedApps[role],
    r = useRef<HTMLFieldSetElement | null>(null);
  useEffect(() => {
    if (!r.current) return;
    if (role === "undefined") {
      r.current.style.display = "none";
      return;
    } else setKey(crypto.randomUUID());
  }, [r, role]);
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <GenericErrorComponent message='Erro gerando conjunto de campos para tecnologias específicas' />
      )}
    >
      <fieldset
        className={`${classes.mainFsClasses} ${fsBase}`}
        id={`${fsBase}${cRole}`}
        ref={r}
        key={key}
      >
        <legend
          className={`${classes.mainFsLegClasses} ${legBase}`}
          id={`${legBase}${cRole}`}
          style={{
            paddingBottom: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          Tecnologias Específicas:{" "}
          {friendlyRoles[role] || friendlyRoles.undefined}
        </legend>
        <hr style={{ marginBlock: "2rem" }} />
        {roleApps.map((apps, i) => (
          <TechCheckboxes
            key={`techcbs__${i}`}
            apps={apps}
            num={(i + 1).toString() as PseudoNum}
          />
        ))}
      </fieldset>
      <Watcher _case='role' d={setRole ?? setKey} />
      <hr />
    </ErrorBoundary>
  );
}
