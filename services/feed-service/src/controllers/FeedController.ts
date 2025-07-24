import { CandidateProvider } from '../infra/CandidateProvider';
import { RankingEngine } from '../domain/RankingEngine';
import { FeedCache } from '../infra/FeedCache';
import { ProfileRepo } from '../../profile-service/src/infra/ProfileRepo';

export class FeedController {
  constructor(
    private profiles: ProfileRepo,
    private provider: CandidateProvider,
    private ranking: RankingEngine,
    private cache: FeedCache,
  ) {}

  getFeed(userId: string) {
    const cached = this.cache.get(userId);
    if (cached) return cached;
    const profile = this.profiles.findByUser(userId);
    if (!profile) return [];
    const candidates = this.provider.fetch(profile);
    const ranked = this.ranking.rank(candidates, profile).map((r) => r.info.id);
    this.cache.set(userId, ranked);
    return ranked;
  }
}
