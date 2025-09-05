import Link from "next/link";
export default function Footer() {
  return (
    <footer className="py-10 text-sm text-gray-500">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} km.art_digitale — Marielle Adjalla.</p>
        <nav className="flex gap-4">
          <Link href="#contact" className="hover:text-gray-700">Contact</Link>
          <Link href="/privacy" className="hover:text-gray-700">Confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
