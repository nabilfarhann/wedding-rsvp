"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/lib/wedding";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "nav scrolled" : "nav"}>
      <a className="brand" href="#top">
        {wedding.groom.first[0]}
        <span>&</span>
        {wedding.bride.first[0]}
      </a>
      <nav className="nav-links" aria-label="Invitation">
        <a href="#kisah">Kisah</a>
        <a href="#majlis">Majlis</a>
        <a href="#rsvp">RSVP</a>
      </nav>
    </header>
  );
}
