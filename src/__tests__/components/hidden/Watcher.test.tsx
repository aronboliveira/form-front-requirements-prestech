import React from "react";
import { render, screen } from "@testing-library/react";
import Watcher from "../../../components/hidden/Watcher";
describe("Watcher Component", () => {
  it("should render a hidden span with the correct id", () => {
    render(
      <Watcher _case='role' d={jest.fn()} v='testRole' />
    );
    const spanElement = screen.getByRole("presentation", {
      hidden: true,
    }) as HTMLElement;
    const spanById =
      document.getElementById("watcher__role");
    expect(spanById).toBeInTheDocument();
    expect(spanById?.style.display).toBe("none");
  });
});
