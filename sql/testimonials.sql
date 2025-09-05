-- Table testimonials
create table if not exists public.testimonials (
  id bigint generated always as identity primary key,
  author text not null,
  role text,
  company text,
  content text not null,
  avatar_url text,
  created_at timestamp with time zone default now()
);

-- Insérer 3 témoignages initiaux (optionnel)
insert into public.testimonials (author, role, company, content, avatar_url)
values
  ('Safir Consulting', 'Secteur bancaire', 'Safir Consulting',
   'Marielle a apporté une vraie valeur ajoutée à notre communication LinkedIn avec une stratégie claire et des contenus engageants.', null),

  ('Innoventhik Fashion', 'Mode & retail', 'Innoventhik Fashion',
   'Un travail de communication visuelle pertinent, qui a modernisé notre image et facilité nos interactions avec les clients.', null),

  ('Agence Aviation Civile', 'Institution publique', 'Agence de l’Aviation Civile',
   'Professionnelle, créative et à l’écoute, Marielle a su adapter la stratégie à nos besoins et notre culture.', null);
