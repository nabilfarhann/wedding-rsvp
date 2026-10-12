import type { ReactNode } from "react";

export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <i />
      <svg viewBox="0 0 20 20" width="12" height="12">
        <path
          d="M10 1.2 12.4 7.6 19 10 12.4 12.4 10 18.8 7.6 12.4 1 10 7.6 7.6Z"
          fill="currentColor"
        />
      </svg>
      <i />
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`card ${className}`.trim()}>
      <span className="corner tl" aria-hidden="true" />
      <span className="corner tr" aria-hidden="true" />
      <span className="corner bl" aria-hidden="true" />
      <span className="corner br" aria-hidden="true" />
      {children}
    </article>
  );
}
