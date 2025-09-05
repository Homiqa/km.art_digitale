import Container from "@/components/Container";

export default function CGU() {
  return (
    <main className="py-20">
      <Container>
        <h1 className="text-3xl font-bold">Conditions générales d’utilisation</h1>
        <p className="mt-4 text-gray-700">
          Le site km.art_digitale est un site vitrine destiné à présenter les services de Marielle Adjalla.
          L’utilisation du site implique l’acceptation pleine et entière des conditions ci-dessous.
        </p>

        <h2 className="mt-6 text-xl font-semibold">Propriété intellectuelle</h2>
        <p className="mt-2 text-gray-700">Tous les contenus (textes, images, visuels) sont la propriété exclusive de Marielle Adjalla.</p>

        <h2 className="mt-6 text-xl font-semibold">Responsabilité</h2>
        <p className="mt-2 text-gray-700">Le site n’est pas responsable des dommages liés à l’utilisation du contenu ou des liens externes.</p>

        <h2 className="mt-6 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-gray-700">Pour toute question : marielleadjalla[@]gmail.com</p>
      </Container>
    </main>
  );
}
