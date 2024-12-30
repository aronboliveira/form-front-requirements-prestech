"use client";
import React, { useState, useEffect } from "react";
import styles from "./Form.module.scss";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
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
        </section>
      </fieldset>
    </form>
  );
}
