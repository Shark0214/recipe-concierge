import { Profile, PreferenceInput } from '../domain/Profile';
import { ProfileRepo } from '../infra/ProfileRepo';

export class OnboardingController {
  constructor(private repo: ProfileRepo) {}

  create(userId: string, prefs: PreferenceInput) {
    const profile = new Profile(userId, prefs);
    this.repo.save(profile);
    console.log('OnboardingCompleted', { userId });
    return profile;
  }
}
