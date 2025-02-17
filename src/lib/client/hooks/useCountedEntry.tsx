import DOMValidator from "../validators/DOMValidator";
import {
  useEffect,
  useState,
  RefObject,
  useCallback,
} from "react";
import { nlHtEl } from "@/lib/definitions/client/helpers";
import { usedNames } from "../vars";
import StringHelper from "@/lib/helpers/StringHelper";
import ObjectHelper from "@/lib/helpers/ObjectHelper";
export default function useCountedEntry(
  r: RefObject<nlHtEl>,
  iniName: string,
  referenceSet?: boolean,
  trigger?: React.Dispatch<React.SetStateAction<number>>
): {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
} {
  const [name, setName] = useState<string>(iniName),
    assign = useCallback(() => {
      if (
        !r.current ||
        r.current?.dataset.ordered === "true"
      )
        return;
      if (
        !DOMValidator.isDefaultEntry(r.current) ||
        !r.current.name ||
        r.current.dataset.ordered === "true"
      )
        return;
      let camelName = StringHelper.snakeToCamel(
        r.current.getAttribute("name")!
      );
      const f = DOMValidator.isDisableable(r.current)
        ? r.current.form
        : (r.current as HTMLElement).closest("form");
      if (f) {
        const SHClone =
          ObjectHelper.makeAllEnumerable(StringHelper);
        for (const n of new Set(
          [f.id, f.name]
            .flatMap(id => [
              ...["camel", "kebab", "snake"].flatMap(
                (cv, _, a) =>
                  a
                    .map(ocv => {
                      if (ocv === cv) return;
                      const foo =
                        SHClone[
                          `${cv}To${StringHelper.capitalize(
                            ocv
                          )}` as keyof typeof SHClone
                        ];
                      if (typeof foo !== "function") return;
                      return (foo as (v: string) => string)(
                        id
                      );
                    })
                    .filter(v => v)
              ),
            ])
            .flatMap(
              id => id && [id, StringHelper.capitalize(id)]
            )
        ))
          camelName = camelName.replace(
            n || "undefined",
            ""
          );
      }
      const newName = `${camelName}${usedNames.save(
        camelName
      )}`;
      r.current.dataset.ordered = "true";
      setName(newName);
    }, [r, setName]);
  useEffect(() => {
    setTimeout(() => {
      if (
        typeof referenceSet === "boolean" &&
        referenceSet
      ) {
        assign();
        setTimeout(() => {
          if (
            r.current &&
            /^countryCode__1/.test(r.current.id)
          )
            setName("countryCodePrimary");
          else if (
            r.current &&
            /^countryCode__2/.test(r.current.id)
          )
            setName("countryCodeSecondary");
          setTimeout(() => {
            trigger && trigger(prev => prev + 1);
          }, 500);
        }, 2000);
      } else assign();
    }, 2000);
  }, [r, setName, referenceSet]);
  return { name, setName };
}
