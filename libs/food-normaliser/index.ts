const synonyms: Record<string, string> = {
  cilantro: 'coriander',
  courgette: 'zucchini',
  scallion: 'spring onion'
};

export function normalize(name: string): string {
  const key = name.trim().toLowerCase();
  return synonyms[key] || key;
}
