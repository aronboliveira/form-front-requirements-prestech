"use client";
import React, { useEffect, useRef, useState } from "react";
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
import CacheProvider from "@/lib/client/providers/CacheProvider";
import Range from "../inputs/Range";
export default function RequirementForm() {
  const r = useRef<nlFm>(null),
    [namedSettled, setNames] = useState<boolean>(false),
    [idsSettled, setIds] = useState<boolean>(false),
    cache = new CacheProvider();
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
    setNames(true);
  }, [r]);
  useEffect(() => {
    if (!(r.current instanceof HTMLFormElement)) return;
    IOModel.setIds(r.current);
    setIds(true);
  }, [r, namedSettled]);
  useEffect(() => {
    if (!(r.current instanceof HTMLFormElement)) return;
    IOModel.setLinks();
    cache.setup();
    r.current.key = MathHandler.generateRandomKey(r.current.key, 255);
  }, [r, idsSettled]);
  const mainFsClasses = `border p-4 mb-3 formMainFs`,
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
      <fieldset className={mainFsClasses} id='fsId'>
        <legend className={mainFsLegClasses} id='legIdf'>
          Dados Básicos
        </legend>
        <section className={mainFsSect} id='sectIdf'>
          <fieldset className={sectSubDiv_1} id='divPersonal'>
            <FirstName />
            <LastName />
            <Age />
            <Gender />
          </fieldset>
          <hr />
          <fieldset className={sectSubDiv_1} id='divContact'>
            <Email required={true} label='E-mail Primário' id='emailPrim' />
            <Email required={false} label='E-mail Secundário' id='emailSec' />
            <EnhancedTelFs required={true} label='prim' />
            <EnhancedTelFs required={false} label='sec' />
          </fieldset>
          <hr />
          <fieldset className={sectSubDiv_1} id='divWorkplace'>
            <Role />
            <Worktime />
          </fieldset>
        </section>
      </fieldset>
      <fieldset className={mainFsClasses} id='divTechs'>
        <legend className={mainFsLegClasses} id='legTechs'>
          Tecnologias
        </legend>
        <section className={mainFsSect} id='sectOffice'>
          <h2>Documentação, Gestão e Análise</h2>
          <fieldset className={sectSubDiv_1} id='fsOfficeApps'>
            {[
              {
                t: "Softwares de Planilhamento (Microsoft Excel, Google Sheets, Libre Office Calc, etc.)",
                id: "spreadsheets",
              },
              {
                t: "Softwares de Redação (Microsoft Word, Google Docs, Libre Office Writter, etc.)",
                id: "docs",
              },
              {
                t: "Softwares para Construção de Formulários (Google Forms, Jotform, Typeform, etc.)",
                id: "formBuilders",
              },
              {
                t: "Plataformas de Armazenamento em Nuvem (Google Drive, Dropbox, Amazon S3, etc.)",
                id: "cloudStorage",
              },
            ].map(({ t, id }) => (
              <Range label={t} required={true} id={id} />
            ))}
          </fieldset>
          <fieldset className={sectSubDiv_1} id='fsOfficePlatforms'>
            {[
              {
                t: "Plataformas de Gerenciamento de Relação com Clientes e Equipes (Monday.com, ClickUp, Slack, Jira, etc.)",
                id: "CRMs",
              },
              {
                t: "Plataformas de Planejamento de Recursos de Negócios (SAP, SAT, TOTVS, SalesForce, etc.)",
                id: "ERPs",
              },
              {
                t: "Plataformas de Gestão de Atividades e Planejamento (Notion, Trello, Microsoft Planner, Google Calendar, etc.)",
                id: "forms",
              },
              {
                t: "Plataformas para Inteligência de Negócios (PowerBI, Tableau, Qlik Sense, etc.)",
                id: "businessInteligence",
              },
            ].map(({ t, id }) => (
              <Range label={t} required={true} id={id} />
            ))}
          </fieldset>
        </section>
        <section className={mainFsSect} id='sectAIs'>
          <h2>Modelos de Inteligência Artificial</h2>
          <fieldset className={sectSubDiv_1} id='fsAIs'>
            {[
              {
                t: "Grandes Modelos de Linguagem (ChatGPT, Gemini, LLaMa, GitHub Copilot, etc.)",
                id: "LLMs",
              },
              {
                t: "Inteligências Artificiais Generativas de Imagem (Dall-E, Midjourney, Stable Diffusion, etc.)",
                id: "imageAIs",
              },
              {
                t: "Inteligências Artificiais Generativas de Vídeo (Sora, Runway, Fliki, etc.)",
                id: "videoAIs",
              },
              {
                t: "Inteligências Artificiais Generativas de Áudio (ElevenLabs, PlayHT, ParrotAI, etc.)",
                id: "audioAIs",
              },
            ].map(({ t, id }) => (
              <Range label={t} required={true} id={id} />
            ))}
          </fieldset>
        </section>
      </fieldset>
      <hr />
      <ButtonsBlock />
    </form>
  );
}
