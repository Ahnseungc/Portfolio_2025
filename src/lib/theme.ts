export type Theme = "light" | "dark";

export const THEME_OVERRIDE_KEY = "theme-override";

/** 라이트: 07:00–18:59, 다크: 19:00–06:59 (로컬 시간) */
export const LIGHT_HOUR_START = 7;
export const LIGHT_HOUR_END = 19;

export function getThemeByTime(date = new Date()): Theme {
  const hour = date.getHours();
  return hour >= LIGHT_HOUR_START && hour < LIGHT_HOUR_END ? "light" : "dark";
}

export function getStoredOverride(): Theme | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(THEME_OVERRIDE_KEY);
  if (value === "light" || value === "dark") return value;

  // 이전 키(theme) 마이그레이션
  const legacy = localStorage.getItem("theme");
  if (legacy === "light" || legacy === "dark") {
    localStorage.setItem(THEME_OVERRIDE_KEY, legacy);
    localStorage.removeItem("theme");
    return legacy;
  }

  return null;
}

export function getEffectiveTheme(date = new Date()): Theme {
  return getStoredOverride() ?? getThemeByTime(date);
}

export function setThemeOverride(theme: Theme) {
  localStorage.setItem(THEME_OVERRIDE_KEY, theme);
}

export function clearThemeOverride() {
  localStorage.removeItem(THEME_OVERRIDE_KEY);
}

export function isThemeAuto(): boolean {
  return getStoredOverride() === null;
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

/** layout 인라인 스크립트용 — lib/theme.ts 상수와 동기화 */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify(THEME_OVERRIDE_KEY)};var o=localStorage.getItem(k);var h=new Date().getHours();var t=(o==='light'||o==='dark')?o:(h>=${LIGHT_HOUR_START}&&h<${LIGHT_HOUR_END}?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;
