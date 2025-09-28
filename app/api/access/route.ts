import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Placeholder webhook receiver: accept and noop
  await req.json().catch(() => null);
  return NextResponse.json({ ok: true });
}


