"use client";
import React, { useEffect, useRef } from "react";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
import LocalizedTelFs from "../bloc/fieldsets/LocalizedTelFs";
import withTelContext from "../highOrder/withTelContext";
import { FormControl, nlFm } from "@/lib/definitions/helpers";
import MathHandler from "@/lib/client/handlers/MathHandler";
import ButtonsBlock from "../bloc/fieldsets/ButtonsBlock";
import Age from "../inputs/Age";
import Gender from "../inputs/Gender";
import Role from "../inputs/Role";
import Worktime from "../inputs/Worktime";
export default function RequirementForm() {
  const r = useRef<nlFm>(null),
    namesSet = useRef<boolean>(false),
    idsSet = useRef<boolean>(false);
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
    namesSet.current = true;
  }, [r]);
  useEffect(() => {
    if (!(r.current instanceof HTMLFormElement)) return;
    IOModel.setIds(r.current);
  }, [r, namesSet]);
  useEffect(() => {
    if (!(r.current instanceof HTMLFormElement)) return;
    r.current.key = MathHandler.generateRandomKey(r.current.key, 255);
  }, [r, idsSet]);
  const mainFsClasses = `border p-3 mb-3 formMainFs`,
    mainFsLegClasses = `legMainFs bold`,
    mainFsSect = `mainFsSect`,
    sectSubDiv_1 = `sectSubDiv`,
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
        <section className={mainFsSect} id='sectIdf'>
          <div className={sectSubDiv_1} id='divPersonal'>
            <FirstName />
            <LastName />
            <Age />
            <Gender />
          </div>
          <hr />
          <div className={sectSubDiv_1} id='divContact'>
            <Email required={true} label='E-mail Primário' />
            <Email required={false} label='E-mail Secundário' />
            <EnhancedTelFs required={true} label='Telefone Principal' />
            <EnhancedTelFs required={false} label='Telefone Secundário' />
          </div>
          <hr />
          <div className={sectSubDiv_1} id='divWorkplace'>
            <Role />
            <Worktime />
          </div>
          <hr />
          <ButtonsBlock />
        </section>
      </fieldset>
    </form>
  );
}
