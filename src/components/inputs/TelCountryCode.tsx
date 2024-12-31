import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
export default function TelCountryCode({ required }: OptInput) {
  const [v, setV] = useState<string>("");
  return (
    <PhoneInput
      value={v}
      country='br'
      inputClass='form-control'
      buttonClass='button-secondary'
      searchClass='search'
      searchPlaceholder='Pesquisa aqui'
      searchNotFound='Sem resultados!'
      defaultErrorMessage='Houve algum erro!'
      defaultMask='+.. (Exemplo: +55)'
      inputProps={{
        name: "country_code",
        required,
        autoComplete: "tel-country-code",
        minLength: 1,
        maxLength: 5,
      }}
      autocompleteSearch={true}
      autoFormat={false}
      enableSearch={true}
      countryCodeEditable={false}
      disableDropdown={false}
      onChange={val => setV(IOHandler.adjustTelCountryCode(val))}
    />
  );
}