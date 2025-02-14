import Export from "@/components/buttons/Export";
import Reset from "@/components/buttons/Reset";
import Submit from "@/components/buttons/Submit";
export default function ButtonsBlock() {
  return (
    <fieldset id='ctaBtnsBlock' className='formMainFs'>
      <Submit />
      <Reset />
      <Export />
    </fieldset>
  );
}
