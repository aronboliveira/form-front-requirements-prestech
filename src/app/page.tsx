import RequirementForm from "@/components/forms/RequirementForm";
export default function Home() {
  return (
    <div>
      <main className={`container`} style={{ marginBlock: "2%" }}>
        <RequirementForm />
      </main>
      <footer></footer>
    </div>
  );
}
