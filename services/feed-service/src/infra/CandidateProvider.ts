import { Profile } from '../../profile-service/src/domain/Profile';
import { RecipeRepo } from '../../recipe-service/src/infra/RecipeRepo';

export class CandidateProvider {
  constructor(private repo: RecipeRepo) {}

  fetch(profile: Profile) {
    return this.repo
      .all()
      .filter((r) => r.info.skillLevel <= profile.preferences.skillLevel);
  }
}
