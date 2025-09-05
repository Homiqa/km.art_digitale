-- Table contacts
create table if not exists public.contacts (
  id bigserial primary key,
  created_at timestamp with time zone default now(),
  name text not null,
  email text not null,
  message text not null
);

-- RLS + policy pour autoriser insert via anon key (si tu veux insérer côté client)
alter table public.contacts enable row level security;
create policy "allow insert anon"
  on public.contacts for insert
  to anon
  with check (true);
