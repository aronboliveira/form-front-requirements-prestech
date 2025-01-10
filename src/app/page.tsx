import RequirementForm from "@/components/forms/RequirementForm";
export default function Home() {
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
        <RequirementForm />
      </main>
      <footer></footer>
    </div>
  );
}
