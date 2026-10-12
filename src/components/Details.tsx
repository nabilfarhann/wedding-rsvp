import { longDay, timeRange } from "@/lib/format";
import { wedding } from "@/lib/wedding";
import { Countdown } from "./Countdown";
import { Reveal } from "./Reveal";
import { Card, Divider } from "./ui";

export function Details() {
  return (
    <section className="section" id="majlis">
      <div className="wrap">
        <Reveal>
          <header className="sec-head">
            <p className="eyebrow">{wedding.detailsEyebrow}</p>
            <h2>{wedding.detailsTitle}</h2>
            <Divider />
            <Countdown target={wedding.dateISO} label={wedding.countdownLabel} />
          </header>
        </Reveal>

        <div className={wedding.events.length === 1 ? "events single" : "events"}>
          {wedding.events.map((event, index) => (
            <Reveal key={event.key} delay={index * 120}>
              <Card className="event-card">
                <p className="eyebrow">{event.malay}</p>
                <h3>{event.title}</h3>
                <p className="event-time">{timeRange(event.iso, event.endISO)}</p>
                <p className="event-day">{longDay(event.iso)}</p>
                <p className="event-place">{event.place}</p>
                <p className="event-address">{event.address}</p>
                <p className="event-note">{event.note}</p>
                <a
                  className="map-link"
                  href={event.map}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open map
                </a>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="dress">{wedding.dress}</p>
      </div>
    </section>
  );
}
