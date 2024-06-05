import { NextResponse } from "next/server";
import { startChat } from "../../components/sidebar";

export async function POST(req) {
  const { prompt, index } = await req.json();
  startChat();

  return NextResponse.json({ success: true, prompt: prompt, index: index });
}
