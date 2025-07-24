import { FeedbackRepo } from '../infra/FeedbackRepo';

export class FeedbackController {
  constructor(private repo: FeedbackRepo) {}

  submit(recipeId: string, rating: number, tweaks: string[]) {
    this.repo.save({ recipeId, rating, tweaks });
    console.log('feedback.tweaks', { recipeId, tweaks });
  }
}
