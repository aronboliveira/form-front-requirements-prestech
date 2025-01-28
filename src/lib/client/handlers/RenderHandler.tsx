import StringHelper from "@/lib/helpers/StringHelper";
import AddTextArea from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextArea";
import AddSelectOne from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectOne";
import AddSelectMultiple from "@/components/bloc/fieldsets/ranged/inc/foundation/AddSelectMultiple";
import AddCheckable from "@/components/bloc/fieldsets/ranged/inc/foundation/AddCheckable";
import AddFileInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddFileInput";
import AddNumericInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddNumbericInput";
import AddColorInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddColorInput";
import { QuestionsKeys } from "@/lib/definitions/client/helpers";
import { classes } from "../vars";
import AddTextualInput from "@/components/bloc/fieldsets/ranged/inc/foundation/AddTextualInput";
export default class RenderHandler {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  renderInput(prefix: string, ac: QuestionsKeys) {
    //TODO CRIAR DICIONÁRIOS PARA TIPOS E REGRAS
    const type = "" as any,
      n = `${StringHelper.uncapitalize(
        StringHelper.camelToSnake(
          this.name.replace(/beginner|intermediate|expert/i, "")
        )
      )}__${String(ac)}`,
      id = `${StringHelper.uncapitalize(
        this.name.replace(/beginner|intermediate|expert/i, "")
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
        return <AddCheckable id={id} name={n} type={type} />;
      case "file":
        return <AddFileInput id={id} name={n} />;
      case "number":
      case "range":
        return <AddNumericInput id={id} name={n} type={type} />;
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
              data-role={prefix}
            />
          </>
        );
      default:
        return <AddTextualInput id={id} name={n} type={type} />;
    }
  }
}
