const TZ = "Asia/Kuala_Lumpur";

export function weekday(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    timeZone: TZ,
  }).format(new Date(iso));
}

export function prettyDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  }).format(new Date(iso));
}

export function longDay(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: TZ,
  }).format(new Date(iso));
}

export function clock(iso: string) {
  const raw = new Intl.DateTimeFormat("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: TZ,
  }).format(new Date(iso));
  return raw.replace(/\s*am\b/i, " AM").replace(/\s*pm\b/i, " PM");
}

export function timeRange(start: string, end: string) {
  return `${clock(start)} – ${clock(end)}`;
}

export function yearOf(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    timeZone: TZ,
  }).format(new Date(iso));
}
