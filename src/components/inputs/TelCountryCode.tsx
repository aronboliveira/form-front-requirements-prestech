import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import IOHandler from "@/lib/client/handlers/IOHandler";
import { OptInput } from "@/lib/definitions/client/interfaces/components";
import { classes } from "@/lib/client/vars";
import "react-phone-input-2/lib/style.css";
import StringHelper from "@/lib/helpers/StringHelper";
export default function TelCountryCode({ required }: OptInput) {
  const [v, setV] = useState<string>(""),
    id = "countryCode";
  return (
    <div className='countryCodeBlock'>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Código
      </label>
      <PhoneInput
        value={v}
        country='br'
        inputClass={classes.inpClasses}
        buttonClass='button-secondary'
        searchClass='search'
        searchPlaceholder='Pesquise aqui'
        searchNotFound='Sem resultados!'
        defaultErrorMessage='Houve algum erro!'
        defaultMask='+.. (Exemplo: +55)'
        inputProps={{
          name: StringHelper.camelToSnake(id),
          id: id,
          required,
          autoComplete: "tel-country-code",
          minLength: 1,
          maxLength: 5,
          pattern: "^\\+[0-9]{2,4}s?$",
        }}
        containerStyle={{
          width: "6rem",
          fontSize: "1rem",
          marginTop: "0",
        }}
        searchStyle={{
          backgroundColor: "var(--bs-body-bg)",
          color: "var(--bs-body-color)",
        }}
        autocompleteSearch={true}
        autoFormat={false}
        enableSearch={true}
        countryCodeEditable={false}
        disableDropdown={false}
        onChange={val => setV(IOHandler.adjustTelCountryCode(val))}
      />
    </div>
  );
}
