import React from "react";
import { render, screen } from "@testing-library/react";
import CloudStorage from "../../../../../../components/bloc/fieldsets/ranged/office/StoragePlatforms";
describe("CloudStorage", () => {
  const props = {
    lvl: 3,
    id: "cloudStorageTest",
    controller: "testController",
  };
  it("renders the correct fieldset with attributes", () => {
    render(<CloudStorage {...props} />);
    const fieldset = screen.getByRole("group", { name: /cloudstorage/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("renders IntermediateCloudStorage for 'intermediate' level", () => {
    render(<CloudStorage {...props} />);
    const intermediateComponent = screen.getByText(/intermediate/i);
    expect(intermediateComponent).toBeInTheDocument();
  });
});
