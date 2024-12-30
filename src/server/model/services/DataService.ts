import { UserRequirementFormEntity } from "../entities/UserRequirementFormEntity";
export class DataService {
  async saveUserRequirements(
    data: UserRequirementFormEntity
  ): Promise<boolean> {
    console.log("Salvando dados no pseudo-banco:", data);
    return true;
  }
}
