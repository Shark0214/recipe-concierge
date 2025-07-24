export class StepStore {
  private store = new Map<string, any>();

  get(id: string) {
    return this.store.get(id);
  }

  set(id: string, value: any) {
    this.store.set(id, value);
  }
}
