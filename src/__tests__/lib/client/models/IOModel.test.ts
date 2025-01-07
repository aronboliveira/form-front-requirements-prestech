/**
 * @jest-environment jsdom
 */
import { IOModel } from "../../../../lib/client/models/IOModel";
describe("IOModel", () => {
  let form: HTMLFormElement;
  beforeEach(() => document.body.appendChild(document.createElement("form")));
  afterEach(() => document.body.removeChild(form));
  describe("setConstraintPatterns", () => {
    it("sets minimum constraints for required inputs", () => {
      const inp = document.createElement("input");
      inp.required = true;
      form.appendChild(inp);
      IOModel.setConstraintPatterns();
      expect(inp.minLength).toBe(1);
    });
  });
  describe("setFormDataLength", () => {
    it("sets form dataset attributes about elements count", () => {
      form.append(
        document.createElement("input"),
        document.createElement("textarea")
      );
      IOModel.setFormDataLength(form);
      expect(form.dataset.elements).toBe("2");
      expect(form.dataset.namedElements).toBe("2");
      expect(form.dataset.listElements).toBe("2");
      expect(form.dataset.inputElements).toBe("2");
    });
  });
  describe("setFormControlNameSufix", () => {
    it("appends form name to element’s name", () => {
      form.name = "myForm";
      const inp = document.createElement("input");
      inp.name = "phone";
      IOModel.setFormControlNameSufix(inp);
      expect(inp.name).toBe("phone__myForm");
    });
  });
  describe("setIds", () => {
    it("generates IDs for elements lacking them", () => {
      const div1 = document.createElement("div");
      div1.classList.add("test");
      const div2 = document.createElement("div");
      div1.classList.add("test");
      form.append(div1, div2);
      IOModel.setIds(form);
      expect(div1.id).toMatch(/div__test_1/);
      expect(div2.id).toMatch(/div__test_2/);
    });
  });
  describe("setLinks", () =>
    it("does not fail when no linked elements are found", () =>
      expect(() => IOModel.setLinks()).not.toThrow()));
  describe('setPlaceholders', () => {
    beforeEach(() => {
      document.body.innerHTML = `
      <form id="test-form">
        <input type="text" id="text-input" />
        <input type="tel" id="tel-input" />
        <input type="email" id="email-input" />
        <input type="url" id="url-input" />
        <textarea id="textarea-input"></textarea>
        <input type="password" id="password-input" />
      </form>
      `
      form = document.getElementById('test-form') as HTMLFormElement;
    });
    afterEach(() => document.body.innerHTML = '');
    it("adds placeholders to text inputs", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("text-input") as HTMLInputElement).placeholder
      ).toBe("Escreva aqui.");
    });

    it("adds placeholders to tel inputs", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("tel-input") as HTMLInputElement).placeholder
      ).toBe("Escreva aqui um número.");
    });

    it("adds placeholders to email inputs", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("email-input") as HTMLInputElement).placeholder
      ).toBe("Escreva aqui um e-mail.");
    });

    it("adds placeholders to url inputs", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("url-input") as HTMLInputElement).placeholder
      ).toBe("Escreva aqui.");
    });

    it("adds placeholders to textareas", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("textarea-input") as HTMLTextAreaElement)
          .placeholder
      ).toBe("Escreva aqui.");
    });

    it("does not modify inputs with existing placeholders", () => {
      const telInput = document.getElementById(
        "tel-input"
      ) as HTMLInputElement;
      telInput.placeholder = "Preencha o telefone";

      IOModel.setPlaceholders();
      expect(telInput.placeholder).toBe("Preencha o telefone");
    });

    it("ignores inputs without type 'text', 'tel', 'email', 'url' or textarea", () => {
      IOModel.setPlaceholders();
      expect(
        (document.getElementById("password-input") as HTMLInputElement)
          .placeholder
      ).toBe("");
    });

    it("handles empty forms without errors", () => {
      document.body.innerHTML = `<form id="empty-form"></form>`;
      expect(() => IOModel.setPlaceholders()).not.toThrow();
    });

    it("handles no forms in the document", () => {
      document.body.innerHTML = "";
      expect(() => IOModel.setPlaceholders()).not.toThrow();
    });

    it("does not set placeholders if no eligible elements are present", () => {
      document.body.innerHTML = `
        <form id="no-eligible-inputs">
          <input type="checkbox" />
          <input type="radio" />
        </form>
      `;
      IOModel.setPlaceholders();
      const inputs = document.querySelectorAll("input");
      inputs.forEach(input => expect(input.placeholder).toBe(""));
    });
  })
});
