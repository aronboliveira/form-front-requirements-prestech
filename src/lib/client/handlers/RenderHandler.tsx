import StringHelper from "@/lib/helpers/StringHelper";
import AddTextArea from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextArea";
import AddSelectOne from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectOne";
import AddSelectMultiple from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectMultiple";
import AddCheckable from "@/components/bloc/fieldsets/ranged/inc/foundation/AddCheckable";
import AddFileInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddFileInput";
import AddNumericInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddNumbericInput";
import AddColorInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddColorInput";
import {
  QuestionKey,
  complexityDict,
  complexityKeySet,
} from "@/lib/definitions/client/helpers";
import {
  classes,
  defAddQuestions,
  questionsMap,
} from "../vars";
import AddTextualInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextualInput";
import {
  addQuestionsKey,
  roleType,
} from "@/lib/definitions/foundations";
export default class RenderHandler {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  renderInput({
    appType,
    role,
    ac,
  }: {
    appType: addQuestionsKey;
    role: roleType;
    ac: string;
  }) {
    const questions = this.#getQuestions(role, appType);
    const type = "" as any,
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
          <AddNumericInput id={id} name={n} type={type} />
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
          <AddTextualInput id={id} name={n} type={type} />
        );
    }
  }
  #getQuestions(
    r: roleType,
    t: addQuestionsKey
  ): complexityDict<complexityKeySet> | null {
    let roleMap = questionsMap.get(r);
    if (!roleMap) roleMap = defAddQuestions[1];
    let appMap = roleMap.get(t);
    return appMap ? appMap : null;
  }
}
