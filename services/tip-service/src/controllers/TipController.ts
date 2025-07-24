import { TipEngine } from '../domain/TipEngine';
import { verbNounPairs } from '../../../libs/utils/nlp';

export class TipController {
  constructor(private engine: TipEngine) {}

  getTips(stepMarkdown: string) {
    const pairs = verbNounPairs(stepMarkdown);
    return this.engine.match(pairs);
  }
}
