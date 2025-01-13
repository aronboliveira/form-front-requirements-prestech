import { classes } from "@/lib/client/vars";
import { ICtxTxt } from "@/lib/definitions/client/interfaces/components";
import StringHelper from "@/lib/helpers/StringHelper";
export default function ContextualText({ role, topic, required, placeholder }: ICtxTxt) {
const cTopic = StringHelper.capitalize(topic),
cRole = StringHelper.capitalize(role),
_case = `${cRole}${cTopic}`
return (
    <div className={`div${cTopic}`}
    id={`${role}${cTopic}`}>
        <label
        className={classes.inpClasses}
        id={`${role}${cTopic}`}
        htmlFor={`text${_case}`}>
            <textarea
            className={classes.contextualTextClasses}
            id={`text${_case}`}
            name={`${StringHelper.pascalToSnake(cTopic)}`}
            required={required}
            autoComplete="on"
            placeholder={placeholder ?? 'Escreva aqui'}
            >
            </textarea>
        </label>
    </div>
)
}