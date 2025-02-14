import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";
import Submit from "../../../components/buttons/Submit";
import { toast } from "react-hot-toast";
jest.mock("react-hot-toast", () => ({
  toast: {
    success: jest.fn(() => "toastId"),
    error: jest.fn(),
    dismiss: jest.fn(),
  },
}));
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
  }),
}));
jest.mock(
  "../../../lib/client/handlers/SubmissionHandler",
  () => ({
    construct: jest.fn(() => ({
      submit: jest.fn(() =>
        Promise.resolve({ ok: true, cause: "" })
      ),
    })),
  })
);
jest.mock("../../../lib/client/handlers/DOMHandler", () => {
  return jest.fn().mockImplementation(() => ({
    evaluateClickMovements: () => ["valid", false],
  }));
});
jest.mock(
  "../../../lib/client/hooks/useFormButton",
  () => ({
    __esModule: true,
    default: () => React.createRef<HTMLButtonElement>(),
  })
);
describe("Submit component", () => {
  let form: HTMLFormElement;
  beforeEach(() => {
    form = document.createElement("form");
    document.body.appendChild(form);
  });
  afterEach(() => {
    document.body.innerHTML = "";
  });
  test("renders button and triggers submission on click", async () => {
    render(<Submit form={form} />);
    const button = screen.getByRole("button", {
      name: /Enviar/i,
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    await waitFor(() => {
      expect(toast.success).toHaveBeenCalled();
    });
  });
});
