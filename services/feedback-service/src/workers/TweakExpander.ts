import { extractIngredients } from '../../../libs/utils/nlp';

export class TweakExpander {
  process(text: string) {
    return extractIngredients(text);
  }
}
