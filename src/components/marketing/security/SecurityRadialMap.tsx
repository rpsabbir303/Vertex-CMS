const RINGS = [54, 96, 138];

const SATELLITES = [
  { id: "data", label: "DATA", angle: -90 },
  { id: "access", label: "ACCESS", angle: -18 },
  { id: "govern", label: "GOVERN", angle: 54 },
  { id: "ai", label: "AI", angle: 126 },
  { id: "recover", label: "RECOVER", angle: 198 },
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function SecurityRadialMap({ focus = "trust" }: { focus?: string }) {
  const cx = 200;
  const cy = 200;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" data-figma-layer="radial-map" aria-hidden="true">
      <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" data-figma-layer="radial-map-svg">
        <g data-figma-layer="radial-rings">
          {RINGS.map((r) => (
            <circle key={r} cx={cx} cy={cy} r={r} stroke="#2F7A3A" strokeOpacity="0.22" />
          ))}
        </g>
        <g data-figma-layer="radial-spokes">
          {SATELLITES.map((s) => {
            const p = polar(cx, cy, 138, s.angle);
            const hot = focus === s.id;
            return (
              <g key={s.id} data-figma-node={s.id}>
                <line
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  stroke={hot ? "#3FE844" : "#2F7A3A"}
                  strokeOpacity={hot ? 0.9 : 0.28}
                  strokeDasharray={hot ? undefined : "3 5"}
                />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={hot ? 6 : 4}
                  fill={hot ? "#3FE844" : "#2F7A3A"}
                  className={hot ? "security-lime-dot" : undefined}
                />
              </g>
            );
          })}
        </g>
        <g data-figma-layer="radial-hub">
          <circle cx={cx} cy={cy} r={28} fill="#163326" />
          <circle cx={cx} cy={cy} r={5} fill="#3FE844" className="security-lime-dot" />
          <text x={cx} y={cy + 18} textAnchor="middle" fill="#F3FAF3" fontSize="8" fontWeight="600" letterSpacing="1.4">
            TRUST
          </text>
        </g>
        <g data-figma-layer="radial-labels">
          {SATELLITES.map((s) => {
            const p = polar(cx, cy, 168, s.angle);
            const hot = focus === s.id;
            return (
              <text
                key={`label-${s.id}`}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={hot ? "#0D0D0D" : "#163326"}
                fillOpacity={hot ? 1 : 0.55}
                fontSize={10}
                fontWeight={600}
                letterSpacing="1.4"
              >
                {s.label}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
