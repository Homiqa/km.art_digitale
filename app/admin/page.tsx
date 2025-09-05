"use client";
import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [ok, setOk] = useState(false);
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const handleLogin = () => {
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASS) setOk(true);
    else alert("Mot de passe incorrect");
  };

  const addTestimonial = async () => {
    const res = await fetch("/api/admin/add-testimonial", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content, author, role, company })
    });
    if (res.ok) {
      alert("Ajouté !");
      setContent(""); setAuthor(""); setRole(""); setCompany("");
    } else {
      alert("Erreur");
    }
  };

  if (!ok) {
    return (
      <div className="p-10">
        <h1 className="text-xl">Admin login</h1>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-3 py-2"
        />
        <button onClick={handleLogin} className="ml-3 px-4 py-2 bg-brand text-white">Entrer</button>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-md">
      <h1 className="text-xl mb-4">Ajouter un témoignage</h1>
      <input placeholder="Auteur" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full border px-3 py-2 mb-2" />
      <input placeholder="Rôle" value={role} onChange={(e) => setRole(e.target.value)} className="w-full border px-3 py-2 mb-2" />
      <input placeholder="Entreprise" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full border px-3 py-2 mb-2" />
      <textarea placeholder="Contenu" value={content} onChange={(e) => setContent(e.target.value)} className="w-full border px-3 py-2 mb-2"></textarea>
      <button onClick={addTestimonial} className="px-4 py-2 bg-brand text-white">Ajouter</button>
    </div>
  );
}
