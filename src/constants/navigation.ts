export const navItems = [
  { id: "hero", label: "Home" },
  { id: "profile", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "libraries", label: "Libraries" },
  { id: "contact", label: "Contact" },
] as const;

export type NavItemId = (typeof navItems)[number]["id"];

