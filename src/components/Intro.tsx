"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { wedding } from "@/lib/wedding";

type Phase = "in" | "out" | "done";

export function Intro({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<Phase>("in");
  const phaseRef = useRef<Phase>("in");
  const auto = useRef<number | null>(null);
  const exit = useRef<number | null>(null);

  const finish = () => {
    if (phaseRef.current !== "in") return;
    phaseRef.current = "out";
    setPhase("out");
    if (auto.current) window.clearTimeout(auto.current);
    exit.current = window.setTimeout(() => {
      try {
        sessionStorage.setItem("ah-intro", "1");
      } catch {
        /* private mode */
      }
      document.documentElement.dataset.intro = "skip";
      phaseRef.current = "done";
      setPhase("done");
    }, 880);
  };

  useEffect(() => {
    if (document.documentElement.dataset.intro === "skip") {
      phaseRef.current = "done";
      setPhase("done");
      return;
    }
    auto.current = window.setTimeout(finish, 2100);
    return () => {
      if (auto.current) window.clearTimeout(auto.current);
      if (exit.current) window.clearTimeout(exit.current);
    };
    // finish is stable enough for one mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {phase !== "done" && (
        <div className={`intro${phase === "out" ? " out" : ""}`}>
          <div className="intro-seal">
            <svg className="intro-ring" viewBox="0 0 120 120" aria-hidden="true">
              <circle className="inner" cx="60" cy="60" r="46" />
              <circle cx="60" cy="60" r="54" />
            </svg>
            <p className="intro-initials">
              {wedding.groom.first[0]}
              <span>&</span>
              {wedding.bride.first[0]}
            </p>
          </div>
          <p className="intro-line">{wedding.introLine}</p>
          <button type="button" className="btn ghost intro-enter" onClick={finish} autoFocus>
            Enter
          </button>
        </div>
      )}
      <div className={phase === "in" ? "site waiting" : "site ready"}>{children}</div>
    </>
  );
}
