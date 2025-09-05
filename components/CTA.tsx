"use client";
export default function CTA() {
  const scroll = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <button
      onClick={scroll}
      className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 text-white font-semibold shadow-lg hover:bg-brand-dark transition"
    >
      Contact / Réserver
    </button>
  );
}
