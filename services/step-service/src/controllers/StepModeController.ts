import { TimerManager } from '../domain/TimerManager';
import { StepEventProducer } from '../events/StepEventProducer';
import { StepStore } from '../infra/StepStore';

export class StepModeController {
  constructor(
    private timers: TimerManager,
    private events: StepEventProducer,
    private store: StepStore,
  ) {}

  connect(sessionId: string, stepDurationMs: number) {
    this.store.set(sessionId, { active: true });
    this.timers.start(stepDurationMs, () => {
      this.events.publish({ sessionId, type: 'timer_end' });
      this.store.set(sessionId, { active: false });
    });
  }
}
