export class TimerManager {
  private timer?: NodeJS.Timeout;

  start(ms: number, cb: () => void) {
    this.cancel();
    this.timer = setTimeout(cb, ms);
  }

  pause() {
    if (this.timer) clearTimeout(this.timer);
  }

  cancel() {
    if (this.timer) clearTimeout(this.timer);
    this.timer = undefined;
  }
}
