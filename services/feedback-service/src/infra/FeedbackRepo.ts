export class FeedbackRepo {
  private store: any[] = [];

  save(feedback: { recipeId: string; rating: number; tweaks: string[] }) {
    this.store.push(feedback);
  }
}
