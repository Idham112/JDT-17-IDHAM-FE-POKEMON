export const TYPE_COLORS: Record<string, { bg: string; text: string; glow: string }> = {
  normal:   { bg: '#A8A77A', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(168,167,122,0.5)]' },
  fire:     { bg: '#EE8130', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(238,129,48,0.5)]' },
  water:    { bg: '#6390F0', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(99,144,240,0.5)]' },
  electric: { bg: '#F7D02C', text: '#1A1A2E', glow: 'shadow-[0_0_8px_rgba(247,208,44,0.5)]' },
  grass:    { bg: '#7AC74C', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(122,199,76,0.5)]' },
  ice:      { bg: '#96D9D6', text: '#1A1A2E', glow: 'shadow-[0_0_8px_rgba(150,217,214,0.5)]' },
  fighting: { bg: '#C22E28', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(194,46,40,0.5)]' },
  poison:   { bg: '#A33EA1', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(163,62,161,0.5)]' },
  ground:   { bg: '#E2BF65', text: '#1A1A2E', glow: 'shadow-[0_0_8px_rgba(226,191,101,0.5)]' },
  flying:   { bg: '#A98FF3', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(169,143,243,0.5)]' },
  psychic:  { bg: '#F95587', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(249,85,135,0.5)]' },
  bug:      { bg: '#A6B91A', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(166,185,26,0.5)]' },
  rock:     { bg: '#B6A136', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(182,161,54,0.5)]' },
  ghost:    { bg: '#735797', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(115,87,151,0.5)]' },
  dragon:   { bg: '#6F35FC', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(111,53,252,0.5)]' },
  dark:     { bg: '#705746', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(112,87,70,0.5)]' },
  steel:    { bg: '#B7B7CE', text: '#1A1A2E', glow: 'shadow-[0_0_8px_rgba(183,183,206,0.5)]' },
  fairy:    { bg: '#D685AD', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(214,133,173,0.5)]' },
};

export function getTypeColor(typeName: string) {
  return TYPE_COLORS[typeName] ?? { bg: '#888888', text: '#FFFFFF', glow: 'shadow-[0_0_8px_rgba(136,136,136,0.5)]' };
}