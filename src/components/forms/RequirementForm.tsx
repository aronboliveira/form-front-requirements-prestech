"use client";
import React, { useEffect } from "react";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
import LocalizedTelFs from "../bloc/fieldsets/LocalizedTelFs";
export default function RequirementForm() {
  useEffect(() => {
    IOModel.setConstraintPatterns();
  }, []);
  const mainFsClasses = `border p-3 mb-3 formMainFs`,
    mainFsLegClasses = `legMainFs bold`,
    mainFsSect = `sectMainFs`;
  return (
    <form id='requirementsForm' className='form'>
      <fieldset className={mainFsClasses}>
        <legend className={mainFsLegClasses}>Dados Básicos</legend>
        <section className={mainFsSect}>
          <FirstName />
          <LastName />
          <Email required={true} />
          <LocalizedTelFs required={true} />
        </section>
      </fieldset>
    </form>
  );
}
