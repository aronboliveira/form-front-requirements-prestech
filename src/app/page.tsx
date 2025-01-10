import RequirementForm from "@/components/forms/RequirementForm";
import MapsProvider from "@/lib/client/providers/MapsProvider";
import { CtxLabels } from "@/lib/client/vars";
export default function Home() {
  const labels = new MapsProvider(CtxLabels).setup().maps;
  return (
    <div>
      <main className={`container`} style={{ marginBlock: "2%" }}>
        <h1
          id='mainTitle'
          style={{
            border: "none",
            boxShadow: "none",
            marginBlock: "1rem 2rem",
            fontSize: "1.3rem",
            textAlign: "center",
          }}
        >
          Formulário de Levantamento de Requisitos — Nova Prestech
        </h1>
        <RequirementForm labels={labels} />
      </main>
      <footer></footer>
    </div>
  );
}
