import { classes } from "@/lib/client/vars";
export default function Worktime() {
  const id = "worktime";
  return (
    <div className='worktimeDiv'>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Tempo de Trabalho na Empresa (em meses)
      </label>
      <input className={classes.inpClasses} id={id} name={id} type='number' />
    </div>
  );
}
