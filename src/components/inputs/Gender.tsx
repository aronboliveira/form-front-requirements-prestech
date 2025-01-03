import { classes } from "@/lib/client/vars";
export default function Gender() {
  const id = "gender";
  return (
    <div>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Gênero
      </label>
      <select className={classes.selectClasses} id={id} name={id}>
        <option value='feminino'>Feminino</option>
        <option value='masculino'>Masculino</option>
        <option value='nb'>Não-Binário</option>
        <option value='undefined'>Outros</option>
      </select>
    </div>
  );
}
