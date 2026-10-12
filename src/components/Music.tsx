"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO = "YTKv0PNGDao";

type Player = {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  mute: () => void;
  setVolume: (volume: number) => void;
};

declare global {
  interface Window {
    YT?: { Player: new (id: string, options: object) => Player };
    onYouTubeIframeAPIReady?: () => void;
  }
}

export function Music() {
  const [on, setOn] = useState(false);
  const player = useRef<Player | null>(null);
  const want = useRef(false);

  useEffect(() => {
    let dead = false;

    const boot = () => {
      if (dead || player.current || !window.YT?.Player) return;
      player.current = new window.YT.Player("yt-light", {
        videoId: VIDEO,
        width: "200",
        height: "80",
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: VIDEO,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: { target: Player }) => {
            event.target.setVolume(40);
            if (want.current) {
              event.target.unMute();
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) boot();
    else {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        boot();
      };
      if (!document.querySelector("script[data-yt-api]")) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.dataset.ytApi = "1";
        document.body.appendChild(tag);
      }
    }

    return () => {
      dead = true;
    };
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    want.current = next;
    const deck = player.current;
    if (!deck) return;
    if (next) {
      deck.unMute();
      deck.setVolume(40);
      deck.playVideo();
    } else {
      deck.pauseVideo();
    }
  };

  return (
    <>
      <div id="yt-light" className="yt-slot" />
      <button
        type="button"
        className={on ? "music on" : "music"}
        onClick={toggle}
        aria-pressed={on}
        aria-label={on ? "Pause I See The Light" : "Play I See The Light"}
      >
        <span className="music-ico" aria-hidden="true">
          {on ? "♫" : "♪"}
        </span>
        <span className="music-copy">
          <strong>I See The Light</strong>
          <em>{on ? "Royal Philharmonic" : "Tap for music"}</em>
        </span>
      </button>
    </>
  );
}
