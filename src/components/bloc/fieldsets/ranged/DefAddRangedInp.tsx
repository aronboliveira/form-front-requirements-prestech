import { classes } from "@/lib/client/vars";

export default function DefAppRangedInp({
  prefix,
  sufix,
  label,
}: {
  prefix: string;
  sufix: string;
  label: string;
}) {
  return (
    <div
      key={`${prefix}__${sufix}`}
      className={`divAddRanged ${classes.inpDivClasses}`}
    >
      <label htmlFor={sufix} className={classes.inpLabClasses}>
        {label}
      </label>
      <input id={sufix} className={classes.inpClasses} />
    </div>
  );
}
