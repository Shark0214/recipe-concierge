import { Recipe } from '../../recipe-service/src/domain/Recipe';

export class RankingEngine {
  rank(candidates: Recipe[], _profile: any): Recipe[] {
    return candidates.sort((a, b) => a.totalTime() - b.totalTime());
  }
}
