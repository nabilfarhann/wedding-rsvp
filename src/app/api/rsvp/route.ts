import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";

type Rsvp = {
  id: string;
  name: string;
  attending: boolean;
  guests: number;
  message: string;
  createdAt: string;
  updatedAt: string;
};

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001F]/g, "").trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  if (clean(data.company, 80)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(data.name, 80);
  if (!name) {
    return NextResponse.json({ error: "Please write your name." }, { status: 400 });
  }
  if (typeof data.attending !== "boolean") {
    return NextResponse.json({ error: "Please tell us if you can come." }, { status: 400 });
  }

  const attending = data.attending;
  const guests = attending
    ? Math.min(8, Math.max(1, Math.round(Number(data.guests) || 1)))
    : 0;
  const message = clean(data.message, 500);
  const id = typeof data.id === "string" && UUID.test(data.id) ? data.id : crypto.randomUUID();

  const file = path.join(process.cwd(), "data", "rsvps.json");
  await fs.mkdir(path.dirname(file), { recursive: true });

  let list: Rsvp[] = [];
  try {
    const parsed = JSON.parse(await fs.readFile(file, "utf8")) as unknown;
    if (Array.isArray(parsed)) list = parsed as Rsvp[];
  } catch {
    list = [];
  }

  const now = new Date().toISOString();
  const index = list.findIndex((item) => item.id === id);
  const record: Rsvp = {
    id,
    name,
    attending,
    guests,
    message,
    createdAt: index >= 0 ? list[index].createdAt : now,
    updatedAt: now,
  };

  if (index >= 0) list[index] = record;
  else list.push(record);

  await fs.writeFile(file, JSON.stringify(list, null, 2));
  return NextResponse.json({ ok: true, rsvp: record });
}
