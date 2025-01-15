import ContextValidator from "../../../../lib/client/validators/ContextValidator";
describe("ContextValidator", () => {
  describe("isRoleType", () => {
    it("returns true for valid role strings", () => {
      const validRoles = [
        "Executivo | Administrativo",
        "Financeiro",
        "Comercial",
        "Marketing",
        "Suporte TecnicoN1",
        "Suporte TecnicoN2",
        "Operatório",
        "Desenvolvimento",
        "DevOps",
        "Outros",
      ];
      for (const role of validRoles)
        expect(ContextValidator.isRoleType(role)).toBe(true);
    });
    it("returns false for invalid role strings", () => {
      expect(ContextValidator.isRoleType("Executive")).toBe(false);
      expect(ContextValidator.isRoleType("TechSupport")).toBe(false);
      expect(ContextValidator.isRoleType("")).toBe(false);
      expect(ContextValidator.isRoleType("SomeRandomRole")).toBe(false);
    });
  });
});
