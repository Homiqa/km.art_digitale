import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, author, role, company } = body;
    if (!content || !author) return NextResponse.json({ error: "missing fields" }, { status: 400 });

    const { error } = await supabase.from("testimonials").insert({ content, author, role, company });
    if (error) {
      console.error("Insert testimonial error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Admin add testimonial error:", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
