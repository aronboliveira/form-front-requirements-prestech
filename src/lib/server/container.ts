import RequirementFormController from "@/server/controllers/RequirementsFormController";
export const Controllers: Array<{
  prio: number;
  controller: typeof RequirementFormController;
}> = [{ prio: 2, controller: RequirementFormController }];
