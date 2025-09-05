# km.art_digitale — Landing (Next.js + Supabase)

## Installation locale
1. `git clone <repo>` ou créer le dossier localement.
2. `npm install`
3. Copier `.env.example` → `.env.local` et remplir les variables :
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY (server only, pour /api/testimonials)
   - RESEND_API_KEY (optionnel)
   - CONTACT_NOTIFY_TO (ton email)
   - NEXT_PUBLIC_ADMIN_PASS (mot de passe admin pour /admin)

4. Lancer en local :
   `npm run dev`
   Ouvrir http://localhost:3000

## Déploiement sur Vercel
1. Push sur GitHub.
2. Sur Vercel : "New Project" → importer repo.
3. Dans Settings → Environment Variables, ajouter (production) :
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
   - SUPABASE_SERVICE_ROLE_KEY  (mark as secret)
   - RESEND_API_KEY (optionnel)
   - CONTACT_NOTIFY_TO
   - NEXT_PUBLIC_ADMIN_PASS

## Supabase
- Exécuter `sql/contacts.sql` et `sql/testimonials.sql` dans SQL Editor.
- Vérifier Table Editor pour `contacts` et `testimonials`.
