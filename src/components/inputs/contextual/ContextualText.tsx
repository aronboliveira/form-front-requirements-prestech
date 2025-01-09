import { classes } from "@/lib/client/vars";
import { ICtxTxt } from "@/lib/definitions/client/interfaces/components";
import StringHelper from "@/lib/helpers/StringHelper";

export default function ContextualText({role, topic }: ICtxTxt) {
const cTopic = StringHelper.capitalize(topic),
cRole = StringHelper.capitalize(role);
return (
    <div className={`div${cTopic}`}
    id={`${role}${cTopic}`}>
        <label
        className={classes.inpClasses}
        id={`${role}${cTopic}`}
        htmlFor={`text${cRole}`}>

        </label>
    </div>
)
}