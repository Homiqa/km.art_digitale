"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import CTA from "@/components/CTA";
import Feature from "@/components/Feature";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function Testimonials() {
  const { data, error } = useSWR("/api/testimonials", fetcher);
  if (error) return <p className="text-center text-red-500">Erreur de chargement</p>;
  if (!data) return <p className="text-center text-gray-500">Chargement...</p>;

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center">Ils me font confiance</h2>
        <p className="mt-2 text-gray-600 text-center">Quelques retours d’expériences et collaborations.</p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {data.map((t: any) => (
            <div key={t.id} className="rounded-2xl bg-white shadow-lg p-6">
              <p className="text-gray-700 italic">"{t.content}"</p>
              <div className="mt-4 flex items-center">
                {t.avatar_url ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={t.avatar_url} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                )}
                <div className="ml-3">
                  <p className="font-semibold">{t.company}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <header className="pt-16 pb-14">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block rounded-full bg-brand/10 text-brand px-3 py-1 text-sm font-medium">
                km.art_digitale
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Créer du lien, <span className="text-brand">révéler la valeur.</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Accompagnement en stratégie digitale, community management et création de contenus — pour des marques humaines et impactantes.
              </p>
              <div className="mt-6">
                <CTA />
              </div>
              <p className="mt-3 text-sm text-gray-500">Missions freelance • Alternance • Co-création de projets</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white/70 backdrop-blur">
              <Image src="/home.png" alt="km.art_digitale — visuel" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="py-10">
          <Container>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold">À propos — Qui suis-je ?</h2>
              <p className="mt-4 text-gray-700">
                Je m’appelle <strong>Marielle Adjalla</strong>, passionnée de communication, stratégie digitale et de relations humaines.
                Actuellement en Master Digital Marketing à l'école MULTIMEDIA, je combine rigueur stratégique et créativité opérationnelle.
              </p>

              <h3 className="mt-6 text-xl font-semibold">Mon parcours en bref</h3>
              <ul className="mt-3 list-disc list-inside text-gray-700 space-y-1">
                <li>Community Manager — Safir Consulting (secteur bancaire) à Paris</li>
                <li>Stage — Assistante Marketing Digital, Innoventhik Fashion (Fontainebleau)</li>
                <li>Stage en communication — Agence de l’Aviation Civile du Bénin</li>
                <li>Formée en gestion de projets digitaux, branding et acquisition</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Mes valeurs</h3>
              <p className="mt-2 text-gray-700">Authenticité – Collaboration – Innovation – Impact</p>
            </div>
          </Container>
        </section>

        <section className="py-10 bg-white/70 backdrop-blur border-y border-gray-200">
          <Container>
            <h2 className="text-2xl font-bold">Services</h2>
            <p className="mt-3 text-gray-600">Ce que je propose aujourd’hui (et peux renforcer selon les projets) :</p>

            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Feature title="🧠 Stratégie Digitale">Audit, plan d’action, benchmark, persona & parcours client</Feature>
              <Feature title="📱 Community Management">Création de contenu, animation réseaux, ligne éditoriale, calendrier social media</Feature>
              <Feature title="🎨 Création de contenus">Visuels Canva, carrousels LinkedIn, posts optimisés, newsletters</Feature>
              <Feature title="💻 Sites vitrine & WordPress">Conseils UX, structure, arborescence, contenu et design</Feature>
              <Feature title="🧾 Rédaction / Copywriting">Bio, articles, slogans, pages web, posts à forte valeur ajoutée</Feature>
            </div>
          </Container>
        </section>

        <section className="py-14">
          <Container>
            <h2 className="text-2xl font-bold">Réalisations</h2>
            <div className="mt-4 space-y-3 text-gray-700">
              <p>🔹 <strong>Stratégie LinkedIn — Safir Consulting</strong> — Création de la série "Jeudi Learning", posts éducatifs sur la finance.</p>
              <p>🔹 <strong>Flyer AIDA — Innoventhik</strong> — QR codes, image de marque et message clair.</p>
              <p>🔹 <strong>Benchmark & SWOT — Sanoflore</strong> — Projet de fin d’année (École Multimédia).</p>
              <p>🔹 <strong>Création de contenus Instagram</strong> — Visuels et formats optimisés pour engagement.</p>
            </div>
          </Container>
        </section>

        <Testimonials />

        <section id="contact" className="py-16 bg-white/70 backdrop-blur border-t border-gray-200">
          <Container>
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold">Contact</h2>
              <p className="mt-2 text-gray-600">Pour missions freelance, alternance, co-création de projets ou événements — contacte-moi :</p>

              <div className="mt-4 space-y-3 text-gray-700">
                <p><strong>Email :</strong> <a href="mailto:marielleadjalla@gmail.com" className="text-brand hover:underline">marielleadjalla@gmail.com</a></p>
                <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/marielle-adjalla-cdi-digital-marketing-seo" target="_blank" rel="noreferrer" className="text-brand hover:underline">/in/marielle-adjalla-cdi-digital-marketing-seo</a></p>
                <p><strong>Instagram :</strong> <a href="https://www.instagram.com/km.art_digitale/" target="_blank" rel="noreferrer" className="text-brand hover:underline">@km.art_digitale</a></p>
              </div>

              <form method="post" action="/api/contact" className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium">Nom</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand"></textarea>
                </div>
                <button className="rounded-xl bg-brand px-6 py-3 text-white font-semibold hover:bg-brand-dark">Envoyer</button>
              </form>

              <p className="mt-3 text-sm text-gray-500">Tes données sont stockées de façon sécurisée et ne sont pas revendues.</p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
