import { SubstitutionRepo } from '../infra/SubstitutionRepo';

export class PreferenceLearner {
  constructor(private repo: SubstitutionRepo) {}

  handle(event: { ingredient: string; substitute: string }) {
    const current = this.repo.find(event.ingredient);
    if (!current.includes(event.substitute)) {
      this.repo.save(event.ingredient, [...current, event.substitute]);
    }
  }
}
