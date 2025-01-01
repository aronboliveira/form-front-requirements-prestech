import { classes } from "@/lib/client/vars";
export default function Gender() {
  return (
    <div>
      <label className={classes.inpLabClasses}>Gênero</label>
      <select className={classes.selectClasses}></select>
    </div>
  );
}
