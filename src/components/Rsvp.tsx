"use client";

import { useEffect, useRef, useState } from "react";
import { wedding } from "@/lib/wedding";
import { Reveal } from "./Reveal";
import { Card, Divider } from "./ui";

type Saved = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  message: string;
};

const STORAGE = "ah-rsvp";

export function Rsvp() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const thanksRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (!raw) return;
      const saved = JSON.parse(raw) as Saved;
      if (!saved?.id || !saved.name) return;
      setId(saved.id);
      setName(saved.name);
      setAttending(saved.attending);
      setGuests(saved.guests || 1);
      setMessage(saved.message || "");
      setDone(true);
    } catch {
      /* ignore broken storage */
    }
  }, []);

  useEffect(() => {
    if (done) thanksRef.current?.focus();
  }, [done]);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError("");
    const cleanName = name.trim();
    if (!cleanName) {
      setError("Please write your name.");
      nameRef.current?.focus();
      return;
    }
    if (attending === null) {
      setError("Please tell us if you can come.");
      return;
    }

    const rid = id || crypto.randomUUID();
    setId(rid);
    setSending(true);

    const payload = {
      id: rid,
      name: cleanName,
      attending,
      guests: attending ? guests : 0,
      message: message.trim(),
      company: companyRef.current?.value ?? "",
    };

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { error?: string; rsvp?: Saved };
      if (!res.ok) {
        setError(data.error || "The letter did not send. Please try once more.");
        setSending(false);
        return;
      }
      const saved: Saved = data.rsvp ?? {
        id: rid,
        name: cleanName,
        attending,
        guests: payload.guests,
        message: payload.message,
      };
      localStorage.setItem(STORAGE, JSON.stringify(saved));
      setName(saved.name);
      setDone(true);
    } catch {
      setError("The letter did not send. Please try once more.");
    } finally {
      setSending(false);
    }
  }

  function edit() {
    setDone(false);
    window.setTimeout(() => nameRef.current?.focus(), 40);
  }

  return (
    <section className="section" id="rsvp">
      <div className="wrap wrap-narrow">
        <Reveal>
          <Card className="rsvp-card">
            {done ? (
              <div className="thanks">
                <div className="seal" aria-hidden="true">
                  <svg viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1" />
                    <circle cx="40" cy="40" r="29" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    <path
                      d="M26 41.5 35.5 51 55 30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </div>
                <p className="eyebrow">Diterima</p>
                <h3 ref={thanksRef} tabIndex={-1}>
                  Terima kasih
                </h3>
                <p>
                  {attending
                    ? `${name}, a seat is kept for you at the feast.`
                    : `${name}, your blessing still has a place with us.`}
                </p>
                <button type="button" className="text-btn" onClick={edit}>
                  Change reply
                </button>
              </div>
            ) : (
              <>
                <header className="sec-head">
                  <p className="eyebrow">{wedding.rsvpEyebrow}</p>
                  <h2>{wedding.rsvpTitle}</h2>
                  <Divider />
                </header>
                <p className="deadline">Kindly reply by {wedding.rsvpBy}</p>
                <form className="rsvp-form" onSubmit={onSubmit} noValidate>
                  <div className="hp" aria-hidden="true">
                    <label htmlFor="company">Company</label>
                    <input ref={companyRef} id="company" name="company" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="field">
                    <label htmlFor="guest-name">Your name</label>
                    <input
                      ref={nameRef}
                      id="guest-name"
                      name="name"
                      autoComplete="name"
                      autoCapitalize="words"
                      maxLength={80}
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="choices" role="radiogroup" aria-label="Attendance">
                    <label className={`choice${attending === true ? " on" : ""}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="yes"
                        checked={attending === true}
                        onChange={() => setAttending(true)}
                      />
                      Joyfully accept
                    </label>
                    <label className={`choice no${attending === false ? " on" : ""}`}>
                      <input
                        type="radio"
                        name="attending"
                        value="no"
                        checked={attending === false}
                        onChange={() => setAttending(false)}
                      />
                      Regretfully decline
                    </label>
                  </div>

                  <div className={`fold${attending === true ? " open" : ""}`}>
                    <div inert={attending === true ? undefined : true}>
                      <div className="field seats">
                        <span className="lbl" id="seats-label">
                          Seats at our table
                        </span>
                        <div className="stepper" role="group" aria-labelledby="seats-label">
                          <button
                            type="button"
                            onClick={() => setGuests((n) => Math.max(1, n - 1))}
                            aria-label="Fewer guests"
                            disabled={guests <= 1}
                          >
                            −
                          </button>
                          <strong>{guests}</strong>
                          <button
                            type="button"
                            onClick={() => setGuests((n) => Math.min(8, n + 1))}
                            aria-label="More guests"
                            disabled={guests >= 8}
                          >
                            +
                          </button>
                        </div>
                        <p className="fine">Including you</p>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="blessing">A note, if you wish</label>
                    <textarea
                      id="blessing"
                      name="message"
                      rows={3}
                      maxLength={500}
                      placeholder="A blessing, a song, or a note for the kitchen"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {error ? (
                    <p className="err" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <div className="submit-row">
                    <button className="btn" type="submit" disabled={sending}>
                      {sending ? "Sending" : "Send my reply"}
                    </button>
                  </div>
                </form>
              </>
            )}
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
