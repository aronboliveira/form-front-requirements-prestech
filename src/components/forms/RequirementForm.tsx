"use client";
import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
import LocalizedTelFs from "../bloc/fieldsets/etc/LocalizedTelFs";
import withTelContext from "../highOrder/withTelContext";
import { FormControl, nlFm } from "@/lib/definitions/client/helpers";
import MathHandler from "@/lib/client/handlers/MathHandler";
import ButtonsBlock from "../bloc/fieldsets/cta/ButtonsBlock";
import Age from "../inputs/Age";
import Gender from "../inputs/Gender";
import Role from "../inputs/Role";
import Worktime from "../inputs/Worktime";
import CacheProvider from "@/lib/client/providers/CacheProvider";
import Range from "../inputs/Range";
import { ErrorBoundary } from "react-error-boundary";
import GenericErrorComponent from "../bloc/errors/Error";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { roleType } from "@/lib/definitions/foundations";
import ContextualQuestions from "../bloc/fieldsets/professional/ContextualQuestions";
import TabProvider from "@/lib/client/providers/TabProvider";
import { flags } from "@/lib/client/vars";
import ContextValidator from "@/lib/client/validators/ContextValidator";
export const FormCtx = createContext<IFormCtx>({
  role: "undefined",
  setRole: null,
  ctxLabels: new Map(),
});
export default function RequirementForm({
  labels: ctxLabels,
}: Readonly<{ labels: Map<"roleQuestions", any> }>) {
  const r = useRef<nlFm>(null),
    [namedSettled, setNames] = useState<boolean>(false),
    [idsSettled, setIds] = useState<boolean>(false),
    [role, setRole] = useState<roleType>("undefined"),
    contextValue = useMemo<IFormCtx>(
      () => ({
        role,
        setRole,
        ctxLabels,
      }),
      [role]
    );
  let cache = null;
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
    IOModel.setSpellChecks();
    cache = CacheProvider.construct(r.current);
    cache.setup();
    r.current.key = MathHandler.generateRandomKey(r.current.key, 255);
    setTimeout(IOModel.setPlaceholders, 500);
    if (!flags.indexed) {
      new TabProvider([
        ...document.querySelectorAll("dialog"),
        r.current,
      ]).setup();
      flags.indexed = true;
    }
    const roleChanged = sessionStorage.getItem("roleChanged");
    if (roleChanged === "true") {
      const role = sessionStorage.getItem("role");
      role && setRole(ContextValidator.isRoleType(role) ? role : "undefined");
    }
  }, [r, idsSettled]);
  useEffect(() => {
    IOModel.setPlaceholders();
  });
  const mainFsClasses = `border p-4 mb-3 formMainFs`,
    mainFsLegClasses = `legMainFs bold`,
    mainFsSect = `mainFsSect`,
    sectSubDiv_1 = `sectSubDiv`,
    EnhancedTelFs = withTelContext(LocalizedTelFs);
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <GenericErrorComponent message='Erro ao Carregar Formulário!' />
      )}
    >
      <FormCtx.Provider value={contextValue}>
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
            <hr style={{ marginBlock: "2rem" }} />
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
                <Email
                  required={false}
                  label='E-mail Secundário'
                  id='emailSec'
                />
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
            <legend
              className={mainFsLegClasses}
              id='legTechs'
              style={{ paddingBottom: "1rem" }}
            >
              Tecnologias
            </legend>
            <hr style={{ marginBlock: "2rem" }} />
            <section className={mainFsSect} id='sectOffice'>
              <h2 className='sectHeading'>Documentação, Gestão e Análise</h2>
              <ErrorBoundary
                FallbackComponent={() => (
                  //NOSONAR
                  <GenericErrorComponent message='Erro ao carregar campos sobre Aplicativos' />
                )}
              >
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
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`office_apps__${i}`}
                      label={t}
                      required={true}
                      id={id}
                    />
                  ))}
                </fieldset>
              </ErrorBoundary>
              <ErrorBoundary
                FallbackComponent={() => (
                  //NOSONAR
                  <GenericErrorComponent message='Erro ao carregar campos sobre Plataformas' />
                )}
              >
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
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`office_platforms__${i}`}
                      label={t}
                      required={true}
                      id={id}
                    />
                  ))}
                </fieldset>
              </ErrorBoundary>
            </section>
            <section className={mainFsSect} id='sectAIs'>
              <h2 className='sectHeading'>
                Modelos de Inteligência Artificial
              </h2>
              <ErrorBoundary
                FallbackComponent={() => (
                  <GenericErrorComponent message='Erro ao carregar campos sobre Inteligências Artficiais' />
                )}
              >
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
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`ias__${i}`} //NOSONAR
                      label={t}
                      required={true}
                      id={id}
                    />
                  ))}
                </fieldset>
              </ErrorBoundary>
            </section>
          </fieldset>
          <hr />
          {role !== "undefined" && (
            <ErrorBoundary
              FallbackComponent={() => (
                <GenericErrorComponent message='Erro gerando questões contextuais' />
              )}
            >
              <ContextualQuestions role={role} />
            </ErrorBoundary>
          )}
          <hr />
          <ButtonsBlock />
        </form>
      </FormCtx.Provider>
    </ErrorBoundary>
  );
}
