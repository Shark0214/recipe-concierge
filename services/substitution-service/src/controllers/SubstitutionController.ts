import { SubstitutionRepo } from '../infra/SubstitutionRepo';
import { SubstitutionEngine } from '../domain/SubstitutionEngine';

export class SubstitutionController {
  constructor(
    private repo: SubstitutionRepo,
    private engine: SubstitutionEngine,
  ) {}

  getSubstitutions(ingredient: string) {
    const fromRepo = this.repo.find(ingredient);
    return fromRepo.length ? fromRepo : this.engine.match(ingredient);
  }
}
