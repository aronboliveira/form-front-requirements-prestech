import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddSelectOne from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddSelectOne";
describe("AddSelectOne", () => {
  it("should render a single select element with the correct attributes", () => {
    render(<AddSelectOne id='singleSelect' name='testSelect' />);
    const select = screen.getByRole("combobox");
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute("id", "singleSelect");
    expect(select).toHaveAttribute("name", "testSelect");
    expect(select).toHaveAttribute("data-type", "select-one");
  });
  it("should update the selected value on change", () => {
    render(
      <AddSelectOne
        id='singleSelect'
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
    fireEvent.change(select, { target: { value: "option1" } });
    expect((select as HTMLSelectElement).value).toBe("option1");
  });
});
