import { classes } from "@/lib/client/vars";
export default function Role() {
  return (
    <div>
      <label className={classes.inpLabClasses}>Cargo na Empresa</label>
      <select className={classes.selectClasses}></select>
    </div>
  );
}
