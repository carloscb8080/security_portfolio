export interface Route {
  href: string;
  label: string;
}

export const routes: Route[] = [
  {
    label: "Inicio",
    href: "/",
  },

  {
    label: "Sobre mí",
    href: "/#about-section",
  },
  {
    label: "Servicios",
    href: "/#service-section",
  },
  {
    label: "Educación",
    href: "/#education-section",
  },

  {
    label: "Contacto",
    href: "/#contact-section",
  },
];
