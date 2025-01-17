import RequirementForm from "@/components/forms/RequirementForm";
import AutoCorrectSwitch from "@/components/inputs/AutoCorrectSwitch";
import MapsProvider from "@/lib/client/providers/MapsProvider";
import { CtxLabels } from "@/lib/client/vars";
import { Toaster } from "react-hot-toast";
export default function Home() {
  const labels = new MapsProvider(CtxLabels).setup().maps;
  return (
    <div>
      <Toaster position='top-center' />
      <main className={`container`} style={{ marginBlock: "2%" }}>
        <div
          style={{
            display: "flex",
            paddingInline: "1rem",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
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
          <AutoCorrectSwitch />
        </div>
        <RequirementForm labels={labels} />
      </main>
      <footer></footer>
    </div>
  );
}
