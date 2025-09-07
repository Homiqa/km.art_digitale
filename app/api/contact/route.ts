import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const { error } = await supabase.from("contacts").insert({ name, email, message });
    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ ok: false, error: "DB insert failed" }, { status: 500 });
    }

    try {
      if (process.env.RESEND_API_KEY && process.env.CONTACT_NOTIFY_TO) {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "Contact <bmcsoft92@gmail.com>",
          to: process.env.CONTACT_NOTIFY_TO!,
          subject: "Nouveau message — km.art_digitale",
          text: `Nom: ${name}\nEmail: ${email}\n\n${message}`
        });
      }
    } catch (e) {
      console.warn("Email notification failed:", e);
    }

    return NextResponse.redirect(new URL("/?sent=1", req.url), { status: 303 });
  } catch (e) {
    console.error("Contact route error:", e);
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
