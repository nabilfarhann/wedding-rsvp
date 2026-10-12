import { prettyDate, timeRange, weekday, yearOf } from "@/lib/format";
import { wedding } from "@/lib/wedding";

const PETALS = [
  { left: "8%", delay: "0s", duration: "18s", size: 18 },
  { left: "22%", delay: "-7s", duration: "22s", size: 14 },
  { left: "74%", delay: "-4s", duration: "20s", size: 16 },
  { left: "88%", delay: "-11s", duration: "24s", size: 12 },
  { left: "46%", delay: "-15s", duration: "23s", size: 13 },
  { left: "62%", delay: "-9s", duration: "19s", size: 15 },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="petals" aria-hidden="true">
        {PETALS.map((petal) => (
          <span
            key={petal.left}
            className="petal"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: petal.size,
            }}
          >
            <svg viewBox="0 0 40 64">
              <path
                d="M20 2c6 10 16 22 16 36C36 52 28 62 20 62S4 52 4 38C4 24 14 12 20 2Z"
                fill="#f4e7c8"
              />
              <path d="M20 14c1 10 2 22 0 36" stroke="#e0c48a" strokeWidth="0.8" fill="none" />
            </svg>
          </span>
        ))}
      </div>

      <svg className="wau" viewBox="0 0 160 300" fill="none" aria-hidden="true">
        <path
          d="M80 14c30 10 58 50 58 94 0 38-24 64-58 76-34-12-58-38-58-76 0-44 28-84 58-94Z"
          stroke="currentColor"
          strokeWidth="1.15"
        />
        <path d="M80 30v146" stroke="currentColor" strokeWidth="0.55" />
        <path d="M34 108h92" stroke="currentColor" strokeWidth="0.55" />
        <path
          d="M112 100c0-20-14-36-34-40 18 6 28 20 28 40s-10 34-28 40c20-4 34-20 34-40Z"
          fill="currentColor"
        />
        <path
          d="M80 184c24 18 36 46 30 78"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M80 184c-24 18-36 46-30 78"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M80 258c-6 12-4 22 2 30" stroke="currentColor" strokeWidth="1" />
        <circle cx="84" cy="290" r="2.4" fill="currentColor" />
      </svg>

      <p className="edge">
        {wedding.city} · {yearOf(wedding.dateISO)}
      </p>

      <div className="hero-copy">
        <p className="kicker">
          <i />
          <span>{wedding.kicker}</span>
          <i />
        </p>
        <p className="kicker-sub">{wedding.kickerSub}</p>

        <h1>
          <span className="name a">{wedding.groom.first}</span>
          <span className="amp-wrap">
            <span className="amp-ring" aria-hidden="true" />
            <span className="spark s1" aria-hidden="true" />
            <span className="spark s2" aria-hidden="true" />
            <span className="amp">&</span>
          </span>
          <span className="name b">{wedding.bride.first}</span>
        </h1>

        <p className="legal">
          <span className="who">{wedding.groom.full}</span>
          <span className="legal-amp">&</span>
          <span className="who">{wedding.bride.full}</span>
        </p>

        <p className="when">
          <em>
            {weekday(wedding.dateISO)}, {prettyDate(wedding.dateISO)}
          </em>
        </p>
        <p className="hours">{timeRange(wedding.dateISO, wedding.endISO)}</p>
        <p className="where">{wedding.city}</p>

        <div className="hero-actions">
          <a className="btn" href="#rsvp">
            RSVP
          </a>
          <a className="btn ghost" href="#majlis">
            The celebration
          </a>
        </div>

        <a className="hint" href="#kisah" aria-label="Scroll to our story">
          <span />
        </a>
      </div>
    </section>
  );
}
