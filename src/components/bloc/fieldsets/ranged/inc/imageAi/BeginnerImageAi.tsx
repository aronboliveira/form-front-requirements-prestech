"use client";
  import { AddInputSubFieldset } from "@/lib/definitions/client/interfaces/components";
  import { useEffect, useRef, useMemo } from "react";
  import { nlFs } from "@/lib/definitions/client/helpers";
  import { protoName } from "@/lib/helpers/ObjectHelper";
  import StringHelper from "@/lib/helpers/StringHelper";
  import RenderHandler from "@/lib/client/handlers/RenderHandler";
  import useRole from "@/lib/client/hooks/useRole";
  export default function BeginnerImageAi({
    sufix = "",
    additional = <></>,
  }: AddInputSubFieldset) {
    sufix ||= protoName(BeginnerImageAi);
    const { role } = useRole(), r = useRef<nlFs>(null),
      t = `${role}__${sufix}`,
      name = `${StringHelper.uncapitalize(
        protoName(BeginnerImageAi)
      )}`,
      handler = useMemo(
        () =>
          new RenderHandler({
            name,
            _role: role,
            _complexity: "beginner",
            _appType: "image",
          }),
        [role]
      );
    useEffect(() => {}, [r]);
    return (
      <fieldset
        className={`fsAddRanged`}
        ref={r}
        id={`fs__${t}`}
      >
        {handler.renderInputs()}
        {additional}
      </fieldset>
    );
  }
