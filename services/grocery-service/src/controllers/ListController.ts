import { ListBuilder } from '../domain/ListBuilder';

export class ListController {
  constructor(private builder: ListBuilder) {}

  buildList(lines: string[]) {
    return this.builder.build(lines);
  }
}
