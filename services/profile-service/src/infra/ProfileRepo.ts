import { Profile } from '../domain/Profile';

export class ProfileRepo {
  private store = new Map<string, Profile>();

  save(profile: Profile) {
    this.store.set(profile.userId, profile);
  }

  findByUser(userId: string): Profile | undefined {
    return this.store.get(userId);
  }

  allUserIds(): string[] {
    return Array.from(this.store.keys());
  }
}
