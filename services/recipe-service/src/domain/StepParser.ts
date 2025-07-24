export class StepParser {
  toSteps(markdown: string): string[] {
    return markdown
      .split(/\n+/)
      .map((l) => l.trim())
      .filter((l) => l.length > 0);
  }
}
