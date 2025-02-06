import StringHelper from "@/lib/helpers/StringHelper";
import AddTextArea from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextArea";
import AddSelectOne from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectOne";
import AddCheckable from "@/components/bloc/fieldsets/ranged/inc/foundation/AddCheckable";
import AddFileInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddFileInput";
import AddNumericInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddNumbericInput";
import AddColorInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddColorInput";
import {
  FieldDescription,
  OptionFieldDescription,
  QuestionKey,
  QuestionsMap,
  ROFieldStringRecord,
  complexityDict,
  complexityKeySet,
  voidish,
} from "@/lib/definitions/client/helpers";
import {
  classes,
  questionsMap,
  defAddQuestions,
  fieldsMap,
} from "../vars";
import AddTextualInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextualInput";
import {
  addQuestionsKey,
  complexityLabel,
  roleType,
} from "@/lib/definitions/foundations";
import ExceptionHandler from "./ErrorHandler";
import AddBlock from "@/components/bloc/fieldsets/ranged/inc/foundation/AddBlock";
import { JSX, Fragment } from "react";
import { GroupedOpts } from "@/lib/definitions/client/interfaces/components";
import AddMultipleCheckable from "@/components/bloc/fieldsets/ranged/inc/foundation/AddMultipleCheckable";
export default class RenderHandler {
  name: string;
  #role: roleType;
  #complexity: complexityLabel;
  #appType: addQuestionsKey;
  constructor({
    name,
    _appType,
    _complexity = "beginner",
    _role = "undefined",
  }: {
    name: string;
    _role: roleType;
    _complexity: complexityLabel;
    _appType: addQuestionsKey;
  }) {
    this.name = name;
    this.#role = _role;
    this.#complexity = _complexity;
    this.#appType = _appType;
  }
  renderInputs(): (JSX.Element[] | JSX.Element)[] {
    try {
      const questions = this.#getQuestions();
      if (!questions)
        throw new TypeError(
          `Questions dictionary returned as nullish`
        );
      const fields = this.#getFieldSet();
      if (!fields)
        throw new TypeError(
          `Fields dictionary returned as nullish`
        );
      const qsAcronymsSet = new Set(
          Object.keys(questions)
        ) as Set<QuestionKey>,
        fieldsAcronymsSet = new Set(
          Object.keys(fields)
        ) as Set<QuestionKey>;
      const acronyms = [
        //@ts-ignore
        ...qsAcronymsSet.intersection(fieldsAcronymsSet),
      ] as Array<QuestionKey>;
      if (!acronyms?.length)
        throw new TypeError(
          `List of acronyms for questions:fields pairing was falsish`
        );
      return acronyms.map(a => {
        const qt = questions[a];
        if (!qt) return <></>;
        const field = fields[a],
          type = field.type,
          uncomplexed = this.name.replace(
            /beginner|intermediate|expert/i,
            ""
          ),
          n = `${StringHelper.uncapitalize(
            StringHelper.camelToSnake(uncomplexed)
          )}__${String(a)}`,
          id = `${StringHelper.uncapitalize(
            uncomplexed
          )}${StringHelper.capitalize(a.toString())}`;
        switch (type) {
          case "textarea":
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddTextArea
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                />
              </AddBlock>
            );
          case "select-one":
            return (field as OptionFieldDescription).options
              ?.length ? (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddSelectOne
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                  opts={{
                    main: {
                      grpOpts: (
                        field as OptionFieldDescription
                      ).options as string[],
                    },
                  }}
                />
              </AddBlock>
            ) : (
              <></>
            );
          case "select-multiple":
            return (field as OptionFieldDescription).options
              ?.length ? (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
                cls='radiogroup'
              >
                <AddMultipleCheckable
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                  opts={{
                    main: {
                      grpOpts: (
                        field as OptionFieldDescription
                      ).options as string[],
                    },
                  }}
                />
              </AddBlock>
            ) : (
              <></>
            );
          case "checkbox":
          case "radio":
            return (field as OptionFieldDescription).options
              ?.length ? (
              <AddBlock
                label={qt}
                key={`${id}__${a}__${crypto.randomUUID()}`}
                id={`${id}__${a}`}
                cls='radiogroup'
              >
                {(
                  (field as OptionFieldDescription)
                    .options as string[]
                )?.map(o => {
                  const snt =
                    StringHelper.removeDiacritical(
                      StringHelper.sanitizePropertyName(o)
                    );
                  return (
                    <AddBlock
                      key={`${id}__${snt}__${crypto.randomUUID()}`}
                      id={`${id}__${snt}`}
                      label={o}
                    >
                      <AddCheckable
                        id={`${this.#role}.${
                          this.appType
                        }__${a}`}
                        name={n}
                        type={type}
                      />
                    </AddBlock>
                  );
                })}
              </AddBlock>
            ) : (
              <></>
            );
          case "file":
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddFileInput
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                />
                ;
              </AddBlock>
            );
          case "number":
          case "range":
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddNumericInput
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                  type={type}
                />
              </AddBlock>
            );
          case "color":
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddColorInput
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                />
                ;
              </AddBlock>
            );
          case "date":
          case "datetime-local":
          case "month":
          case "week":
            //TODO REAVALIAR
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <input
                  type={type}
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                  className={`entryAddRanged inpAddRanged ${classes.inpClasses}`}
                  data-role={this.#role}
                />
              </AddBlock>
            );
          default:
            return (
              <AddBlock
                id={id}
                label={qt}
                key={`${id}__${qt}__${type}`}
              >
                <AddTextualInput
                  id={`${this.#role}.${this.appType}__${a}`}
                  name={n}
                  type={"text"}
                />
              </AddBlock>
            );
        }
      });
    } catch (e) {
      ExceptionHandler.logUnexpected(e as Error);
      return [
        <div key={new Date().getTime()}>
          <strong>
            Ops... Não foi possível construir o campo de
            questões! 😨
          </strong>
        </div>,
      ];
    }
  }
  #getQuestions(): { [K in QuestionKey]: string } | null {
    let handle = 0,
      roleMap: QuestionsMap<complexityKeySet> | undefined,
      appDict: complexityDict<complexityKeySet> | undefined,
      dict: { [K in QuestionKey]: string } | undefined;
    try {
      roleMap = questionsMap.get(this.#role);
      if (!roleMap) {
        handle = 1;
        throw new TypeError(`Could not find the Map for the Role's dictionaries.
          Searched Role: ${this.#role}`);
      }
      appDict = roleMap.get(this.#appType);
      if (!appDict) {
        throw new TypeError(`Could not find the Dictionary for the App Types
          Searched App Group: ${this.#complexity}`);
      }
      dict = appDict[this.#complexity] as {
        [K in QuestionKey]: string;
      };
      if (!dict) {
        handle = 2;
        throw new TypeError(`Could not find the Dictionary for the questions labels
        Searched Complexity: ${this.#complexity}`);
      }
      return dict;
    } catch (e) {
      try {
        switch (handle) {
          case 1:
            roleMap = defAddQuestions[1];
            return this.#fallbackAppDict(roleMap) ?? null;
          case 2:
            return roleMap
              ? this.#fallbackAppDict(roleMap) ?? null
              : null;
          default:
            console.error(
              `An unexpected Exception Error Handle was passed when getting the questions dictionary`
            );
            return null;
        }
      } catch (e2) {
        ExceptionHandler.logUnexpected(e2 as Error);
        return null;
      }
    }
  }
  #fallbackAppDict(
    roleMap: QuestionsMap<complexityKeySet>
  ): { [K in QuestionKey]: string } | voidish {
    let appDict:
      | complexityDict<complexityKeySet>
      | undefined;
    appDict = roleMap.get(this.#appType);
    if (!appDict) {
      console.warn(
        `Failed to get App Dictionary for ${this.#role}.${
          this.#complexity
        }.`
      );
      return null;
    }
    let dict = appDict[this.#complexity] as {
      [K in QuestionKey]: string;
    };
    if (!dict) {
      console.warn(`Failed to get Complexity Dictionary for ${
        this.#role
      }.${this.#complexity}.
        Defaulted to Beginner.`);
      dict = appDict["beginner"] as {
        [K in QuestionKey]: string;
      };
      return dict ? dict : null;
    }
    return dict;
  }
  #getFieldSet():
    | ROFieldStringRecord<QuestionKey>
    | voidish {
    let handle = 0,
      roleDict:
        | {
            [J in complexityLabel]: {
              [L in QuestionKey]: FieldDescription;
            };
          }
        | undefined;
    try {
      const fields = fieldsMap.get(this.#appType);
      if (!fields)
        throw new TypeError(
          `Could not GET the fields definitions within the map for ${
            this.#appType
          }`
        );
      roleDict = (
        fields as {
          [K in roleType]: {
            [J in complexityLabel]: {
              [L in QuestionKey]: FieldDescription;
            };
          };
        }
      )[this.#role];
      if (!roleDict)
        throw new TypeError(
          `Could not find dictionary for ${
            this.#role
          } fields`
        );
      const complexityDict = roleDict[this.#complexity];
      if (!complexityDict) {
        handle = 1;
        throw new TypeError(
          `Could not find dictionary for ${this.#role}.${
            this.#complexity
          } fields`
        );
      }
      return complexityDict;
    } catch (e) {
      switch (handle) {
        case 1:
          if (!roleDict) return null;
          const beginner = roleDict["beginner"];
          return beginner ? beginner : null;
        default:
          ExceptionHandler.logUnexpected(e as Error);
          return null;
      }
    }
  }
  static renderOptionsCollection({
    opts,
    id = "",
    checkables = false,
    names = [],
    type = "radio",
  }: {
    opts: GroupedOpts;
    id?: string;
    checkables?: boolean;
    names?: string[];
    type?: "radio" | "checkbox";
  }): JSX.Element[] {
    const firstOpt = Object.entries(opts)?.at(0)?.at(1);
    if (typeof firstOpt !== "object")
      return [
        <Fragment key={crypto.randomUUID()}></Fragment>,
      ];
    if (firstOpt.grpOpts.length > names.length)
      for (
        let d = 0;
        d <
        Math.abs(firstOpt.grpOpts.length - names.length);
        d++
      )
        names.push(crypto.randomUUID());
    return Object.keys(opts).length === 1
      ? firstOpt.grpOpts.map((o, i) => {
          const snt = StringHelper.removeDiacritical(
            StringHelper.sanitizePropertyName(o)
          );
          return !checkables ? (
            <option
              key={`${snt}__${i}__${crypto.randomUUID}`}
              value={snt}
              data-name={names[i]}
            >
              {o}
            </option>
          ) : o.startsWith("Nunca") ||
            o.startsWith("Não") ? (
            <AddBlock
              id={`${id}__${snt}`}
              label={o}
              cls='form-check form-switch'
              key={`${id}__${snt}__${crypto.randomUUID}`}
            >
              <AddCheckable
                id={`${id}__${snt}`}
                name={names[i]}
                type={"toggle"}
                multiple={true}
              />
            </AddBlock>
          ) : (
            <AddBlock
              id={`${id}__${snt}`}
              label={o}
              key={`${id}__${snt}__${crypto.randomUUID}`}
            >
              <AddCheckable
                id={`${id}__${snt}`}
                name={names[i]}
                type={type}
              />
            </AddBlock>
          );
        })
      : Object.entries(opts).map(
          ([gn, { friendly, grpOpts }]) => {
            return (
              <optgroup
                id={`${id}__${gn}`}
                label={friendly}
                key={`${id}__${gn}__${crypto.randomUUID}`}
              >
                {grpOpts.map((o, i) => {
                  const snt = StringHelper.slugify(
                    StringHelper.sanitizePropertyName(o)
                  );
                  return !checkables ? (
                    <option
                      id={`${id}__${gn}__${snt}`}
                      key={`${snt}__${i}__${crypto.randomUUID}`}
                      value={snt}
                      data-name={names[i]}
                    >
                      {o}
                    </option>
                  ) : (
                    <AddBlock
                      id={`${id}__${snt}`}
                      label={o}
                      key={`${snt}__${i}__${crypto.randomUUID}`}
                    >
                      <AddCheckable
                        id={`${id}__${snt}`}
                        name={names[i]}
                        type={type}
                      />
                    </AddBlock>
                  );
                })}
              </optgroup>
            );
          }
        );
  }
  get role(): roleType {
    return this.#role;
  }
  get complexity(): complexityLabel {
    return this.#complexity;
  }
  get appType(): addQuestionsKey {
    return this.#appType;
  }
}
