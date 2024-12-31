"use client";
import React, { useEffect, useRef } from "react";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
import LocalizedTelFs from "../bloc/fieldsets/LocalizedTelFs";
import withTelContext from "../highOrder/withTelContext";
import { FormControl, nlFm } from "@/lib/definitions/helpers";
export default function RequirementForm() {
  const r = useRef<nlFm>(null);
  useEffect(() => {
    IOModel.setConstraintPatterns();
    if (!(r.current instanceof HTMLFormElement)) return;
    IOModel.setFormDataLength(r.current);
    [...r.current.elements]
      .filter(
        ctrl =>
          !(
            ctrl instanceof HTMLLabelElement ||
            ctrl instanceof HTMLLegendElement
          )
      )
      .forEach(ctrl => IOModel.setFormControlNameSufix(ctrl as FormControl));
    r.current.key = crypto.randomUUID();
  }, [r]);
  const mainFsClasses = `border p-3 mb-3 formMainFs`,
    mainFsLegClasses = `legMainFs bold`,
    mainFsSect = `sectMainFs`,
    EnhancedTelFs = withTelContext(LocalizedTelFs);
  return (
    <form
      ref={r}
      key={crypto.randomUUID()}
      id='requirementsForm'
      name='requirements_form'
      className='form'
      method='post'
      action='#'
      target='self'
      encType='application/x-www-form-urlencoded'
    >
      <fieldset className={mainFsClasses} id='idfFs'>
        <legend className={mainFsLegClasses} id='idfLeg'>
          Dados Básicos
        </legend>
        <section className={mainFsSect} id='idfSection'>
          <FirstName />
          <LastName />
          <Email required={true} label='E-mail Primário' />
          <Email required={false} label='E-mail Secundário' />
          <EnhancedTelFs required={true} label='Telefone Principal' />
          <EnhancedTelFs required={false} label='Telefone Secundário' />
        </section>
      </fieldset>
    </form>
  );
}
