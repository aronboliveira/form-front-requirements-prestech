import { createContext } from "react";
import { ITelCtx } from "@/lib/definitions/client/interfaces/contexts";
export const TelCtx = createContext<ITelCtx>({
  required: false,
  label: "Telefone",
});
export default function withTelContext<T extends ITelCtx>(
  Wrapped: React.ComponentType<T>
) {
  return function Enhanced(props: T) {
    return (
      <TelCtx.Provider
        value={{
          required: props.required ?? false,
          label: props.label ?? "Telefone",
        }}
      >
        <Wrapped {...props} />
      </TelCtx.Provider>
    );
  };
}
