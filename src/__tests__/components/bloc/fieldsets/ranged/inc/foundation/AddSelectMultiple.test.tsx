import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddSelectMultiple from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddSelectMultiple";
describe("AddSelectMultiple", () => {
  it("should render a select element with the correct attributes", () => {
    render(<AddSelectMultiple id='multiSelect' name='testSelect' />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("id", "multiSelect");
    expect(select).toHaveAttribute("name", "testSelect");
    expect(select).toHaveAttribute("data-type", "select-multiple");
  });
  it("should update the selected value on change", () => {
    render(
      <AddSelectMultiple
        id='multiSelect'
        name='testSelect'
        descendants={
          <>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
          </>
        }
      />
    );
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "option2" } });
    expect((select as HTMLSelectElement).value).toBe("option2");
  });
});
