export interface Route {
  href: string;
  label: string;
}

export const routes: Route[] = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/about",
    label: "Sobre mí",
  },
  {
    href: "/contact",
    label: "Contacto",
  },
  {
    href: "/experience",
    label: "Experiencia",
  },
];
