const toggles: Record<string, boolean> = {
  feedRankingAI: true,
  stepMode: true,
};

export function isEnabled(userId: string, flag: string): boolean {
  // simple in-memory flag check, ignoring userId for now
  return Boolean(toggles[flag]);
}
