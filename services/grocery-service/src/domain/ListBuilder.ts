export class ListBuilder {
  build(lines: string[]): string[] {
    const items = lines.map((l) => l.trim().toLowerCase());
    return Array.from(new Set(items));
  }
}
