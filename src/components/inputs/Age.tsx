import { classes } from "@/lib/client/vars";
export default function Age() {
  return (
    <div>
      <label className={classes.inpLabClasses}>Idade</label>
      <input className={classes.inpClasses} type='number' />
    </div>
  );
}
