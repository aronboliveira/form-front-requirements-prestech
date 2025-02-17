"use client";
import React, {
  createContext,
  useEffect,
  useRef,
  useState,
  useMemo,
  useTransition,
} from "react";
import FirstName from "@/components/inputs/FirstName";
import LastName from "@/components/inputs/LastName";
import { IOModel } from "@/lib/client/models/IOModel";
import Email from "../inputs/Email";
import LocalizedTelFs from "../bloc/fieldsets/etc/LocalizedTelFs";
import withTelContext from "../highOrder/withTelContext";
import {
  FormControl,
  nlFm,
} from "@/lib/definitions/client/helpers";
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
import {
  rangeCtxId,
  roleType,
} from "@/lib/definitions/foundations";
import ContextualQuestions from "../bloc/fieldsets/professional/ContextualQuestions";
import TabProvider from "@/lib/client/providers/TabProvider";
import {
  classes,
  dictLabelsRange,
  flags,
} from "@/lib/client/vars";
import ContextValidator from "@/lib/client/validators/ContextValidator";
import TechnologiesLists from "../bloc/fieldsets/professional/TechnologiesList";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import StyleProvider from "@/lib/client/providers/StyleProvider";
import Watcher from "../hidden/Watcher";
export const FormCtx = createContext<IFormCtx>({
  role: "undefined",
  setRole: null,
  ctxLabels: new Map(),
  setTransition: null,
  isTransitioning: false,
});
export default function RequirementForm({
  labels: ctxLabels,
}: Readonly<{ labels: Map<"roleQuestions", any> }>) {
  const r = useRef<nlFm>(null),
    cache = useRef<CacheProvider>(null),
    [namedSettled, setNames] = useState<boolean>(false),
    [idsSettled, setIds] = useState<boolean>(false),
    [role, setRole] = useState<roleType>("undefined"),
    [isTransitioning, setTransition] = useTransition(),
    contextValue = useMemo<IFormCtx>(
      () => ({
        role,
        setRole,
        ctxLabels,
        setTransition,
        isTransitioning,
      }),
      [
        role,
        setRole,
        ctxLabels,
        setTransition,
        isTransitioning,
      ]
    );
  useEffect(() => {
    const f = "bypassedTimer",
      bt = localStorage.getItem(f);
    if (!bt) return;
    history.pushState({}, "", "");
    localStorage.removeItem(f);
  }, []);
  useEffect(() => {
    DOMHandler.isPt();
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
      .forEach(ctrl =>
        IOModel.setFormControlNameSufix(ctrl as FormControl)
      );
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
    cache.current = CacheProvider.construct(r.current);
    cache.current.setup();
    r.current.key = MathHandler.generateRandomKey(
      r.current.key,
      255
    );
    setTimeout(IOModel.setPlaceholders, 500);
    if (!flags.indexed) {
      new TabProvider([
        ...document.querySelectorAll("dialog"),
        r.current,
      ]).setup();
      flags.indexed = true;
    }
    const role = sessionStorage.getItem("role");
    role &&
      setRole(
        ContextValidator.isRoleType(role)
          ? role
          : "undefined"
      );
    setTimeout(() => new StyleProvider().setup(), 500);
  }, [r, idsSettled]);
  useEffect(() => {
    IOModel.setPlaceholders();
  });
  const mainFsSect = `mainFsSect`,
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
          <fieldset
            className={classes.mainFsClasses}
            id='fsId'
          >
            <legend
              className={classes.mainFsLegClasses}
              id='legIdf'
            >
              Dados Básicos
            </legend>
            <hr style={{ marginBlock: "2rem" }} />
            <section className={mainFsSect} id='sectIdf'>
              <fieldset
                className={sectSubDiv_1}
                id='divPersonal'
              >
                <FirstName />
                <LastName />
                <Age />
                <Gender />
              </fieldset>
              <hr />
              <fieldset
                className={sectSubDiv_1}
                id='divContact'
              >
                <Email
                  required={true}
                  label='E-mail Primário'
                  id='emailPrim'
                />
                <Email
                  required={false}
                  label='E-mail Secundário'
                  id='emailSec'
                />
                <EnhancedTelFs
                  required={true}
                  label='prim'
                />
                <EnhancedTelFs
                  required={false}
                  label='sec'
                />
              </fieldset>
              <hr />
              <fieldset
                className={sectSubDiv_1}
                id='divWorkplace'
              >
                <Role />
                <Worktime />
              </fieldset>
            </section>
          </fieldset>
          <fieldset
            className={classes.mainFsClasses}
            id='divTechs'
          >
            <legend
              className={classes.mainFsLegClasses}
              id='legTechs'
              style={{ paddingBottom: "1rem" }}
            >
              Tecnologias: Familiaridade
            </legend>
            <hr style={{ marginBlock: "2rem" }} />
            <section className={mainFsSect} id='sectOffice'>
              <h2 className='sectHeading'>
                Documentação, Gestão e Análise
              </h2>
              <ErrorBoundary
                FallbackComponent={() => (
                  <GenericErrorComponent message='Erro ao carregar campos sobre Aplicativos' />
                )}
              >
                <fieldset
                  className={sectSubDiv_1}
                  id='fsOfficeApps'
                >
                  {[
                    {
                      t: dictLabelsRange.office.apps
                        .spreadSheet,
                      id: "spreadSheets",
                    },
                    {
                      t: dictLabelsRange.office.apps.doc,
                      id: "docs",
                    },
                    {
                      t: dictLabelsRange.office.apps.form,
                      id: "formBuilders",
                    },
                    {
                      t: dictLabelsRange.office.apps
                        .storage,
                      id: "cloudStorage",
                    },
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`office_apps__${i}`}
                      label={t}
                      required={true}
                      id={id as rangeCtxId}
                    />
                  ))}
                </fieldset>
              </ErrorBoundary>
              <ErrorBoundary
                FallbackComponent={() => (
                  <GenericErrorComponent message='Erro ao carregar campos sobre Plataformas' />
                )}
              >
                <fieldset
                  className={sectSubDiv_1}
                  id='fsOfficePlatforms'
                >
                  {[
                    {
                      t: dictLabelsRange.office.platforms
                        .crm,
                      id: "Crms",
                    },
                    {
                      t: dictLabelsRange.office.platforms
                        .erp,
                      id: "Erps",
                    },
                    {
                      t: dictLabelsRange.office.platforms
                        .planning,
                      id: "planning",
                    },
                    {
                      t: dictLabelsRange.office.platforms
                        .bi,
                      id: "businessInteligence",
                    },
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`office_platforms__${i}`}
                      label={t}
                      required={true}
                      id={id as rangeCtxId}
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
                <fieldset
                  className={sectSubDiv_1}
                  id='fsAIs'
                >
                  {[
                    {
                      t: dictLabelsRange.ai.llms,
                      id: "LLMs",
                    },
                    {
                      t: dictLabelsRange.ai.image,
                      id: "imageAIs",
                    },
                    {
                      t: dictLabelsRange.ai.video,
                      id: "videoAIs",
                    },
                    {
                      t: dictLabelsRange.ai.audio,
                      id: "audioAIs",
                    },
                  ].map(({ t, id }, i) => (
                    <Range
                      key={`ias__${i}`}
                      label={t}
                      required={true}
                      id={id as rangeCtxId}
                    />
                  ))}
                </fieldset>
              </ErrorBoundary>
            </section>
          </fieldset>
          {role !== "undefined" && (
            <ErrorBoundary
              FallbackComponent={() => (
                <GenericErrorComponent message='Erro gerando questões contextuais' />
              )}
            >
              <ContextualQuestions />
            </ErrorBoundary>
          )}
          <TechnologiesLists />
          <ButtonsBlock />
        </form>
        <Watcher _case='mainForm' />
      </FormCtx.Provider>
    </ErrorBoundary>
  );
}
