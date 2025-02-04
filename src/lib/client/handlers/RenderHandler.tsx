import StringHelper from "@/lib/helpers/StringHelper";
import AddTextArea from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextArea";
import AddSelectOne from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectOne";
import AddSelectMultiple from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectMultiple";
import AddCheckable from "@/components/bloc/fieldsets/ranged/inc/foundation/AddCheckable";
import AddFileInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddFileInput";
import AddNumericInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddNumbericInput";
import AddColorInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddColorInput";
import {
  FieldDescription,
  QuestionKey,
  QuestionsMap,
  ROFieldRecord,
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
  renderInput(ac: QuestionKey) {
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
          ...Object.keys(questions)
        ),
        fieldsAcronymsSet = new Set(...Object.keys(fields));
      const acronyms = [
        ...qsAcronymsSet.intersection(fieldsAcronymsSet),
      ];
      if (!acronyms?.length)
        throw new TypeError(
          `List of acronyms for questions:fields pairing was falsish`
        );
      acronyms.map(a => {
        const type = "textarea" as any,
          n = `${StringHelper.uncapitalize(
            StringHelper.camelToSnake(
              this.name.replace(
                /beginner|intermediate|expert/i,
                ""
              )
            )
          )}__${String(ac)}`,
          id = `${StringHelper.uncapitalize(
            this.name.replace(
              /beginner|intermediate|expert/i,
              ""
            )
          )}${StringHelper.capitalize(String(ac))}`;
        switch (type) {
          case "textarea":
            return <AddTextArea id={id} name={n} />;
          case "select-one":
            return <AddSelectOne id={id} name={n} />;
          case "select-multiple":
            return <AddSelectMultiple id={id} name={n} />;
          case "checkbox":
          case "radio":
            return (
              <AddCheckable id={id} name={n} type={type} />
            );
          case "file":
            return <AddFileInput id={id} name={n} />;
          case "number":
          case "range":
            return (
              <AddNumericInput
                id={id}
                name={n}
                type={type}
              />
            );
          case "color":
            return <AddColorInput id={id} name={n} />;
          case "date":
          case "datetime-local":
          case "month":
          case "week":
            return (
              <>
                <input
                  type={type}
                  id={id}
                  name={n}
                  className={`entryAddRanged inpAddRanged ${classes.inpClasses}`}
                  data-role={role}
                />
              </>
            );
          default:
            return (
              <AddTextualInput
                id={id}
                name={n}
                type={type}
              />
            );
        }
      });
    } catch (e) {
      ExceptionHandler.logUnexpected(e as Error);
      return (
        <div>
          <strong>
            Ops... Não foi possível construir o campo de
            questões! 😨
          </strong>
        </div>
      );
    }
  }
  #getQuestions(): complexityDict<complexityKeySet> | null {
    let handle = 0,
      roleMap: QuestionsMap<complexityKeySet> | undefined,
      appDict: complexityDict<complexityKeySet> | undefined;
    try {
      roleMap = questionsMap.get(this.#role);
      if (!roleMap) {
        handle = 1;
        throw new TypeError(`Could not find the Map for the Role's dictionaries.
          Searched Role: ${this.#role}`);
      }
      appDict = roleMap.get(this.#complexity);
      if (!appDict) {
        handle = 2;
        throw new TypeError(`Could not find the Dictionary for the questions labels
          Searched App Group: ${this.#complexity}`);
      }
      return appDict;
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
  ): complexityDict<complexityKeySet> | voidish {
    let appDict:
      | complexityDict<complexityKeySet>
      | undefined;
    appDict = roleMap.get(this.#complexity);
    if (!appDict) {
      console.warn(`Failed to get Complexity Dictorinary for ${
        this.#role
      }.${this.#complexity}.
        Defaulted to Beginner`);
      appDict = roleMap.get("beginner");
      if (appDict) return appDict;
      else {
        console.warn(`Failed to use Beginner Key.`);
        return null;
      }
    }
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
  #getField(ac: QuestionKey) {}
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
