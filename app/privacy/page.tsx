import Container from "@/components/Container";

export default function Privacy() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Politique de confidentialité</h1>
        <p className="mt-4 text-gray-700">
          km.art_digitale (Marielle Adjalla) collecte uniquement les informations nécessaires lorsque vous utilisez le formulaire de contact : nom, email et message.
          Les données sont stockées dans une base Supabase sécurisée. Elles ne sont pas revendues.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Durée de conservation</h2>
        <p className="mt-2 text-gray-700">Les données sont conservées jusqu'à suppression manuelle depuis le tableau de bord Supabase, ou sur demande.</p>

        <h2 className="mt-6 text-xl font-semibold">Droits</h2>
        <p className="mt-2 text-gray-700">Vous pouvez demander l'accès, la rectification ou la suppression de vos données en contactant marielleadjalla[@]gmail.com.</p>
      </Container>
    </main>
  );
}
