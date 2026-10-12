"use client";

import { useEffect, useState } from "react";

function parts(diff: number) {
  const totalMin = Math.floor(diff / 60000);
  const days = Math.floor(totalMin / (60 * 24));
  const hours = Math.floor((totalMin - days * 24 * 60) / 60);
  const minutes = totalMin % 60;
  return { days, hours, minutes };
}

export function Countdown({ target, label }: { target: string; label: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now === null) return <div className="count-hold" aria-hidden="true" />;

  const diff = new Date(target).getTime() - now;
  if (diff <= 0) return <p className="count-now">The day is here.</p>;

  const { days, hours, minutes } = parts(diff);
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="count-block">
      <p className="count-label">{label}</p>
      <div className="count">
        <div>
          <strong>{days}</strong>
          <span>{days === 1 ? "day" : "days"}</span>
        </div>
        <div>
          <strong>{pad(hours)}</strong>
          <span>hours</span>
        </div>
        <div>
          <strong>{pad(minutes)}</strong>
          <span>minutes</span>
        </div>
      </div>
    </div>
  );
}
