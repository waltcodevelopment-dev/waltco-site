// Legno Hardwood wood-plank mark (owner's logo icon, redrawn as vector 16 Nov 2026). Decorative: the
// business name next to it carries the meaning, so it is aria-hidden.
const DASHES = [0, 36, 71, 107, 142, 178, 213, 249];

export function PlankIcon({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  const line = dark ? '#F8F7F4' : '#24395A';
  return (
    <svg viewBox="0 0 316 61" aria-hidden="true" focusable="false" className={className}>
      <rect x="0" y="0" width="276" height="18" fill="#D49A4C" />
      <g fill={line}>
        <rect x="14" y="32" width="302" height="7" />
        {DASHES.map((x) => <rect key={x} x={x} y="53" width="29" height="8" />)}
      </g>
    </svg>
  );
}
