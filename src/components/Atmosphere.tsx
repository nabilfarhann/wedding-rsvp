import { PointerGlow } from "./PointerGlow";

export function Atmosphere() {
  return (
    <>
      <div className="atmo" aria-hidden="true">
        <div className="blob a" />
        <div className="blob b" />
        <div className="blob c" />
        <svg className="songket">
          <defs>
            <pattern id="songket" width="64" height="64" patternUnits="userSpaceOnUse">
              <path
                d="M32 8 50 32 32 56 14 32Z"
                fill="none"
                stroke="#d4b483"
                strokeWidth="0.6"
              />
              <path
                d="M32 20 42 32 32 44 22 32Z"
                fill="none"
                stroke="#d4b483"
                strokeWidth="0.4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#songket)" />
        </svg>
        <div className="vignette" />
        <PointerGlow />
      </div>
      <div className="frame" aria-hidden="true">
        <div className="frame-inner" />
        <i className="gem tl" />
        <i className="gem tr" />
        <i className="gem bl" />
        <i className="gem br" />
      </div>
    </>
  );
}
