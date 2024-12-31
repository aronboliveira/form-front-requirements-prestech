import DDD from "@/components/inputs/DDD";
import Tel from "@/components/inputs/Tel";
import TelCountryCode from "@/components/inputs/TelCountryCode";
import { ITelInput } from "@/lib/definitions/client/interfaces/components";
export default function LocalizedTelFs({
  required = false,
  label = "Telefone",
}: Omit<ITelInput, "type">) {
  return (
    <fieldset className='localTelBlock'>
      <TelCountryCode required={required} />
      <DDD required={required} />
      <Tel required={required} type='local' label={label} />
    </fieldset>
  );
}
