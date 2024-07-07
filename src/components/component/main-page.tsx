import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import ContactPage from "../contact/contact";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <img src="/logo.png" width="40" height="40" alt="EP STRATEGIES" />
          <span className="text-xl font-bold">EP STRATEGIES</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Accueil
          </Link>
          <Link
            href="#formations"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Formations
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            À Propos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="default" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-full max-w-xs  p-6 backgroundCustom"
            side="right"
          >
            <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#formations"
                >
                  Formations
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#about"
                >
                  À propos
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="font-medium hover:text-gray-900 dark:hover:text-gray-50"
                  href="#contact"
                >
                  Contact
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center bg-gradient-to-r from-secondary to-primary py-12 md:py-20">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                Formez-vous avec EP STRATEGIES
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Découvrez nos formations professionnelles de qualité pour
                développer vos compétences.
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  href="#formations"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Nos Formations
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
            <img
              src="/intro.jpeg"
              width="600"
              height="400"
              alt="Formation"
              className="mx-auto  overflow-hidden rounded-lg object-cover"
            />
          </div>
        </section>
        <section id="formations" className="flex justify-center py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Nos Formations
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Découvrez notre gamme de formations professionnelles pour
                développer vos compétences.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Formation en Comptabilité</CardTitle>
                  <CardDescription>
                    Apprenez les bases de la comptabilité pour gérer
                    efficacement vos finances.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Durée:</span> 3 mois
                    </div>
                    <div>
                      <span className="font-medium">Tarif:</span> 1 200 €
                    </div>
                    <div>
                      <span className="font-medium">Prochaine session:</span> 15
                      octobre 2024
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button size="sm">S&apos;inscrire</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Formation en Marketing Digital</CardTitle>
                  <CardDescription>
                    Apprenez les techniques de marketing digital pour booster
                    votre visibilité en ligne.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Durée:</span> 2 mois
                    </div>
                    <div>
                      <span className="font-medium">Tarif:</span> 950 €
                    </div>
                    <div>
                      <span className="font-medium">Prochaine session:</span>{" "}
                      1er septembre 2024
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button size="sm">S&apos;inscrire</Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Formation en Gestion de Projet</CardTitle>
                  <CardDescription>
                    Apprenez les méthodes de gestion de projet pour mener vos
                    projets à bien.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Durée:</span> 4 mois
                    </div>
                    <div>
                      <span className="font-medium">Tarif:</span> 1 500 €
                    </div>
                    <div>
                      <span className="font-medium">Prochaine session:</span>{" "}
                      1er septembre 2024
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="#contact">
                    <Button size="sm">S&apos;inscrire</Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="flex justify-center bg-gradient-to-t from-secondary to-muted py-12 md:py-20"
        >
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/about.jpg"
              width="600"
              height="400"
              alt="À Propos"
              className="mx-auto aspect-[3/2] overflow-hidden rounded-lg object-cover"
            />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                À Propos de EP STRATEGIES
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                EP STRATEGIES est une entreprise de formation professionnelle
                spécialisée dans le développement des compétences. Fondée en
                2015, notre équipe d&apos;experts vous accompagne pour atteindre vos
                objectifs de carrière.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Ce que nos clients disent
                </h2>
                <blockquote className="mt-4 text-muted-foreground md:text-xl">
                &quot;Les formations d&apos;EP STRATEGIES m&apos;ont permis de
                  développer des compétences essentielles pour ma carrière.
                  L&apos;équipe est à l&apos;écoute et très professionnelle.&quot;
                </blockquote>
                <div className="mt-4 flex items-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">
                      Julien Dupont
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <video
                  src="/customer.mp4"
                  width="80%"
                  height="auto"
                  autoPlay
                  loop
                  muted
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex justify-center py-12 md:py-20 bg-muted"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Contactez-nous
              </h2>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Vous avez des questions sur nos formations ? N&apos;hésitez pas
                à nous contacter.
              </p>
            </div>
            <div className="mt-10 max-w-md mx-auto">
              <ContactPage />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground ">
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 EP STRATEGIES.</p>
          <p className="  "> Tous droits réservés.</p>
        </div>
        <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">5 RUE DE CONDE</p>
          <p className="   ">33000 BORDEAUX</p>
          <p className="  mt-4 ">contact@ep-strategies.fr</p>

          <p className="  mt-4 ">TEL: 04 84 89 63 51</p>
        </div>
      </footer>
    </div>
  );
}

function GraduationCapIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
