const LEAVES = [
  { left: "8%", delay: "0s", duration: "16s", color: "#d7b4c4", rotate: "-18deg" },
  { left: "18%", delay: "-4s", duration: "18s", color: "#c9d3b2", rotate: "24deg" },
  { left: "72%", delay: "-7s", duration: "15s", color: "#e7c3cf", rotate: "12deg" },
  { left: "84%", delay: "-2s", duration: "19s", color: "#e6d3a8", rotate: "-28deg" },
  { left: "46%", delay: "-11s", duration: "17s", color: "#f3d7e2", rotate: "8deg" },
  { left: "62%", delay: "-9s", duration: "20s", color: "#c5d0b4", rotate: "-14deg" },
  { left: "30%", delay: "-6s", duration: "16s", color: "#e8c6b0", rotate: "20deg" },
  { left: "90%", delay: "-13s", duration: "18s", color: "#ddc4de", rotate: "-8deg" },
];

function Butterfly({ className }: { className: string }) {
  return (
    <span className={className}>
      <svg className="bfly" viewBox="0 0 64 40" aria-hidden="true">
        <g className="wing left">
          <ellipse cx="18" cy="16" rx="14" ry="9" fill="#f4d5e2" />
          <ellipse cx="16" cy="27" rx="10" ry="7" fill="#e7c4a8" />
        </g>
        <g className="wing right">
          <ellipse cx="46" cy="16" rx="14" ry="9" fill="#f7e7c4" />
          <ellipse cx="48" cy="27" rx="10" ry="7" fill="#e4c6de" />
        </g>
        <ellipse cx="32" cy="20" rx="2.2" ry="11" fill="#8d6a45" />
      </svg>
    </span>
  );
}

export function Alive() {
  return (
    <div className="garden" aria-hidden="true">
      {LEAVES.map((leaf) => (
        <span
          key={leaf.left}
          className="leaf"
          style={{
            left: leaf.left,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            background: leaf.color,
            ["--tilt" as string]: leaf.rotate,
          }}
        />
      ))}
      <Butterfly className="flutter f1" />
      <Butterfly className="flutter f2" />
      <Butterfly className="flutter f3" />
      <Butterfly className="flutter f4" />
    </div>
  );
}
