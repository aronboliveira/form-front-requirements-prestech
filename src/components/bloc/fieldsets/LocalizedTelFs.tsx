import DDD from "@/components/inputs/DDD";
import Tel from "@/components/inputs/Tel";
import { ITelInput } from "@/lib/definitions/client/interfaces/components";
import { ILocalizedTelCtx } from "@/lib/definitions/client/interfaces/contexts";
import { createContext } from "react";
export const LocalizedTelCtx = createContext<ILocalizedTelCtx>({
  required: false,
});
export default function LocalizedTelFs({
  required = false,
}: Omit<ITelInput, "type">) {
  return (
    <LocalizedTelCtx.Provider value={{ required: false }}>
      <fieldset className='localTelBlock'>
        //TODO INCLUIR CÓDIGO DE PAÍS
        <DDD />
        <Tel required={required} type='local' />
      </fieldset>
    </LocalizedTelCtx.Provider>
  );
}
