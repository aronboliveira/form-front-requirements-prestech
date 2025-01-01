import { classes } from "@/lib/client/vars";
export default function Worktime() {
  return (
    <div>
      <label className={classes.inpLabClasses}>
        Tempo de Trabalho na Empresa (em meses)
      </label>
      <input className={classes.inpClasses} type='number' />
    </div>
  );
}
