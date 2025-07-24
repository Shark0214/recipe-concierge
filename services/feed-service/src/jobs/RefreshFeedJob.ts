import { CandidateProvider } from '../infra/CandidateProvider';
import { RankingEngine } from '../domain/RankingEngine';
import { FeedCache } from '../infra/FeedCache';
import { ProfileRepo } from '../../profile-service/src/infra/ProfileRepo';

export class RefreshFeedJob {
  constructor(
    private profiles: ProfileRepo,
    private provider: CandidateProvider,
    private ranking: RankingEngine,
    private cache: FeedCache,
  ) {}

  run() {
    for (const userId of this.profiles.allUserIds()) {
      const profile = this.profiles.findByUser(userId)!;
      const candidates = this.provider.fetch(profile);
      const ranked = this.ranking.rank(candidates, profile).map((r) => r.info.id);
      this.cache.set(userId, ranked);
    }
  }
}
