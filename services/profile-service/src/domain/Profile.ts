export interface PreferenceInput {
  diets: string[];
  exclusions: string[];
  skillLevel: number;
  goalTag?: string;
  maxActiveMinutes: number;
}

export class Profile {
  constructor(public userId: string, private prefs: PreferenceInput) {}

  applyPreferences(update: Partial<PreferenceInput>) {
    this.prefs = { ...this.prefs, ...update };
  }

  get preferences(): PreferenceInput {
    return this.prefs;
  }
}
