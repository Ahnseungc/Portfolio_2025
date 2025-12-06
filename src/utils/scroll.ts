import { NavItemId } from "@/constants/navigation";

export const scrollToSection = (id: NavItemId) => {
  if (typeof window === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

