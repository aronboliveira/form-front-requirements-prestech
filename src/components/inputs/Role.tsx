import { classes } from "@/lib/client/vars";
export default function Role() {
  const id = "role";
  return (
    <div className='divRole'>
      <label className={classes.inpLabClasses} htmlFor={id}>
        Cargo na Empresa
      </label>
      {/* //TODO TEM QUE SER MÚLTIPLO */}
      <select className={classes.selectClasses} name={id} id={id}>
        <optgroup label='Gestão'>
          <option>Executivo|Administrativo</option>
          <option>Financeiro|Comercial</option>
          <option>Marketing</option>
        </optgroup>
        <optgroup label='Técnico'>
          <option>Suporte Técnico</option>
          <option>Operatório</option>
          <option>Desenvolvimento</option>
        </optgroup>
      </select>
    </div>
  );
}
