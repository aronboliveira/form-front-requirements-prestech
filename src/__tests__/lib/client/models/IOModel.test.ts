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
});
