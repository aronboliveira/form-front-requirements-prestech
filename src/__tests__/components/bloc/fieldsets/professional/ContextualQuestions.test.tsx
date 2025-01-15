import React from "react";
import { render, screen } from "@testing-library/react";
import ContextualQuestions from "../../../../../components/bloc/fieldsets/professional/ContextualQuestions";
import { roleType } from "../../../../../lib/definitions/foundations";
describe("ContextualQuestions component", () => {
  it("renders the correct number of fieldsets and context-based textareas for a given role", () => {
    const testRole: roleType = "desenvolvimento";
    render(<ContextualQuestions role={testRole} />);
    const fieldsets = screen.getAllByRole("group");
    expect(fieldsets.length).toBe(2);
    const textareas = screen.getAllByRole("textbox");
    expect(textareas.length).toBe(8);
  });
  it("displays the correct labels for each question", () => {
    const testRole: roleType = "operatorio";
    render(<ContextualQuestions role={testRole} />);
    expect(
      screen.getByText(/Quais são as suas principais tarefas diárias\?/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Quais são suas principais atividades na empresa\?/i)
    ).toBeInTheDocument();
  });
});
