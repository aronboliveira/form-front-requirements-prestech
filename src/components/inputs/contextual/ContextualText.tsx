"use client";
import useCustomDataList from "@/lib/client/hooks/useCustomDataList";
import { classes } from "@/lib/client/vars";
import { ICtxTxt } from "@/lib/definitions/client/interfaces/components";
import StringHelper from "@/lib/helpers/StringHelper";
import s from "@/styles/modules/datalist.module.scss";
import { RefObject } from "react";
export default function ContextualText({
  role,
  topic,
  required,
  label,
}: Readonly<ICtxTxt>) {
  const cTopic = StringHelper.capitalize(topic).replace(/\s\|/g, ""),
    cRole = StringHelper.capitalize(role).replace(/\s\|/g, ""),
    _case = `${cRole}${cTopic}`,
    listName = `suggestions${_case}`,
    optsClass = `opt${_case}`,
    { inpRef, v, dl, showDl, cursor, setV, handleClick, handleKeyDown } =
      useCustomDataList();
  return (
    <div className={`div${cTopic} ${s.container}`} id={`${role}${cTopic}`}>
      <label
        className={classes.inpLabClasses}
        id={`${role}${cTopic}`}
        htmlFor={`text${_case}`}
      >
        {label}
      </label>
      <textarea
        ref={inpRef as RefObject<HTMLTextAreaElement>}
        value={v}
        className={classes.contextualTextClasses}
        id={`text${_case}`}
        name={`${StringHelper.pascalToSnake(cTopic)}`}
        placeholder='Escreva aqui'
        required={required}
        autoComplete='on'
        spellCheck='true'
        lang='pt'
        onChange={ev => setV(ev.currentTarget.value)}
        onKeyDown={handleKeyDown}
        data-opts={optsClass}
        aria-controls={listName}
        aria-activedescendant={`suggestion${_case}-${cursor}`}
      ></textarea>
      {showDl && (
        <ul
          className={`${s.datalist}`}
          id={listName}
          role='listbox'
          aria-expanded={showDl}
        >
          {dl.map((d, i) => (
            <li
              key={`suggestion_${topic}_${role}__${i}`}
              id={`suggestion${_case}_${i}`}
              className={`${optsClass} ${s.opt}`}
              tabIndex={0}
              role='option'
              aria-selected='false'
              onClick={ev => handleClick(ev.currentTarget)}
              onKeyDown={handleKeyDown}
            >
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
