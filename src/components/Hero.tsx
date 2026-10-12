import { prettyDate, weekday } from "@/lib/format";
import { wedding } from "@/lib/wedding";
import { Alive } from "./Alive";

export function Hero() {
  return (
    <section className="hero scene" id="top">
      <div className="scene-zoom">
        <img className="palace-art" src="/palace-scene.jpg" alt="" />
        <Alive />
      </div>
      <div className="scene-fade" aria-hidden="true" />

      <div className="hero-copy scene-copy">
        <p className="scene-of">The wedding of</p>
        <h1>
          <span className="name a">{wedding.groom.first}</span>
          <span className="amp-wrap">
            <span className="amp">&</span>
          </span>
          <span className="name b">{wedding.bride.first}</span>
        </h1>
        <p className="when">
          <em>
            {weekday(wedding.dateISO)}, {prettyDate(wedding.dateISO)}
          </em>
        </p>
        <p className="where">{wedding.city}</p>
        <div className="hero-actions">
          <a className="btn" href="#rsvp">
            RSVP
          </a>
          <a className="btn ghost" href="#majlis">
            The celebration
          </a>
        </div>
        <a className="hint" href="#kisah" aria-label="Scroll to the invitation">
          <span />
        </a>
      </div>
    </section>
  );
}
