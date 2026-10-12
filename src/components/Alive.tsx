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

type WingTone = {
  light: string;
  mid: string;
  deep: string;
  tip: string;
  spot: string;
  vein: string;
};

const TONES: Record<string, WingTone> = {
  blush: {
    light: "#fbf4ef",
    mid: "#e7b7c6",
    deep: "#d7a48e",
    tip: "#7a4e46",
    spot: "#3f2a24",
    vein: "#8d5e52",
  },
  cream: {
    light: "#fff8ee",
    mid: "#f0d7ae",
    deep: "#e2c07a",
    tip: "#7a5a32",
    spot: "#3f2e1c",
    vein: "#8a6840",
  },
  lilac: {
    light: "#f8f4fb",
    mid: "#d9c6e4",
    deep: "#cbb4ae",
    tip: "#6a536e",
    spot: "#3a2c40",
    vein: "#7d6884",
  },
  apricot: {
    light: "#fff4ec",
    mid: "#f0c4a6",
    deep: "#e0a67e",
    tip: "#8a4e36",
    spot: "#4a2c22",
    vein: "#9a6244",
  },
};

const FORE =
  "M98 48C86 30 64 16 42 18C26 20 14 32 16 46C18 58 32 66 52 62C72 58 88 54 98 52Z";
const HIND =
  "M98 54C80 60 58 66 44 78C34 88 30 100 42 108C50 112 54 102 60 100C64 108 70 116 80 110C88 104 94 90 98 74Z";

function WingShape({
  tone,
  fore,
  hind,
}: {
  tone: WingTone;
  fore: string;
  hind: string;
}) {
  return (
    <g>
      <path d={HIND} fill={`url(#${hind})`} stroke={tone.tip} strokeWidth="1.5" strokeLinejoin="round" />
      <path d={FORE} fill={`url(#${fore})`} stroke={tone.tip} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M42 18C26 20 14 32 16 44C24 34 34 26 46 22Z" fill={tone.tip} opacity="0.82" />
      <path d="M90 50C68 46 48 52 44 60C62 62 82 56 96 52Z" fill={tone.deep} opacity="0.35" />
      <path d="M44 86C36 94 34 102 42 106C46 98 48 92 50 88Z" fill={tone.tip} opacity="0.28" />
      <g fill="none" stroke={tone.vein} strokeWidth="0.65" strokeLinecap="round" opacity="0.72">
        <path d="M96 48C72 34 48 26 22 34" />
        <path d="M96 50C66 46 40 50 18 48" />
        <path d="M96 52C70 58 46 62 32 64" />
        <path d="M64 38C50 44 40 42 28 48" />
        <path d="M96 56C74 70 54 86 42 100" />
        <path d="M96 58C78 76 64 94 72 110" />
        <path d="M72 72C60 84 54 96 58 104" />
        <path d="M58 70C48 82 44 94 48 104" />
      </g>
      <circle cx="26" cy="32" r="1.5" fill={tone.light} />
      <circle cx="32" cy="26" r="1.15" fill={tone.light} />
      <circle cx="40" cy="50" r="1.5" fill={tone.spot} opacity="0.8" />
      <circle cx="54" cy="46" r="1.25" fill={tone.spot} opacity="0.65" />
      <circle cx="56" cy="86" r="3.3" fill={tone.spot} />
      <circle cx="56" cy="86" r="1.7" fill={tone.light} />
      <circle cx="56" cy="86" r="0.7" fill={tone.spot} />
      <circle cx="46" cy="98" r="1.5" fill={tone.spot} opacity="0.75" />
      <circle cx="58" cy="104" r="1.35" fill={tone.spot} opacity="0.7" />
      <circle cx="72" cy="106" r="1.2" fill={tone.spot} opacity="0.65" />
    </g>
  );
}

function Butterfly({
  className,
  id,
  tone,
}: {
  className: string;
  id: string;
  tone: WingTone;
}) {
  const gid = (name: string) => `${id}-${name}`;

  return (
    <span className={className}>
      <span className="bfly-3d">
      <svg className="bfly" viewBox="0 0 200 130" aria-hidden="true">
        <defs>
          <linearGradient id={gid("fore")} x1="100%" y1="20%" x2="0%" y2="80%">
            <stop offset="0%" stopColor={tone.deep} />
            <stop offset="48%" stopColor={tone.mid} />
            <stop offset="100%" stopColor={tone.light} />
          </linearGradient>
          <radialGradient id={gid("hind")} cx="58%" cy="42%" r="62%">
            <stop offset="0%" stopColor={tone.light} />
            <stop offset="62%" stopColor={tone.mid} />
            <stop offset="100%" stopColor={tone.deep} />
          </radialGradient>
          <linearGradient id={gid("body")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c4336" />
            <stop offset="100%" stopColor="#241812" />
          </linearGradient>
          <filter id={gid("grain")} x="-8%" y="-8%" width="116%" height="116%">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="3" result="n" />
            <feColorMatrix in="n" type="saturate" values="0" result="g" />
            <feComponentTransfer in="g" result="a">
              <feFuncA type="linear" slope="0.22" />
            </feComponentTransfer>
            <feBlend in="SourceGraphic" in2="a" mode="multiply" />
          </filter>
        </defs>

        <g className="wing left">
          <WingShape tone={tone} fore={gid("fore")} hind={gid("hind")} />
        </g>
        <g className="wing right">
          <g transform="translate(200 0) scale(-1 1)">
            <WingShape tone={tone} fore={gid("fore")} hind={gid("hind")} />
          </g>
        </g>

        <g className="body">
          <path d="M97 40C84 26 70 16 60 12" fill="none" stroke="#2c1e18" strokeWidth="0.8" strokeLinecap="round" />
          <path d="M103 40C116 26 130 16 140 12" fill="none" stroke="#2c1e18" strokeWidth="0.8" strokeLinecap="round" />
          <ellipse cx="59" cy="11.2" rx="2.1" ry="1.3" fill="#2c1e18" transform="rotate(-28 59 11.2)" />
          <ellipse cx="141" cy="11.2" rx="2.1" ry="1.3" fill="#2c1e18" transform="rotate(28 141 11.2)" />
          <path d="M97.4 60C96.2 76 96.6 92 100 102C103.4 92 103.8 76 102.6 60Z" fill={`url(#${gid("body")})`} />
          <g stroke="#c4a58c" strokeWidth="0.45" opacity="0.55">
            <path d="M97.8 70H102.2" />
            <path d="M97.6 78H102.4" />
            <path d="M97.8 86H102.2" />
            <path d="M98.2 94H101.8" />
          </g>
          <ellipse cx="100" cy="52" rx="3.6" ry="8.2" fill="#3a2922" />
          <ellipse cx="100" cy="51" rx="1.7" ry="6" fill="#241812" opacity="0.4" />
          <circle cx="100" cy="40" r="3.1" fill="#2e211c" />
          <circle cx="98.6" cy="39.2" r="0.55" fill="#f4ece4" />
          <circle cx="101.4" cy="39.2" r="0.55" fill="#f4ece4" />
        </g>
      </svg>
      </span>
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
      <Butterfly className="flutter f1" id="bf1" tone={TONES.blush} />
      <Butterfly className="flutter f2" id="bf2" tone={TONES.cream} />
      <Butterfly className="flutter f3" id="bf3" tone={TONES.lilac} />
      <Butterfly className="flutter f4" id="bf4" tone={TONES.apricot} />
    </div>
  );
}
