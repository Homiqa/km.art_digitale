import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase.from("testimonials").select("*").order("id", { ascending: true });
    if (error) {
      console.error("Supabase testimonials error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (e) {
    console.error("Testimonials route error:", e);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
