"use client";

import { useEffect } from "react";
import { applyTheme, getEffectiveTheme, getStoredOverride } from "@/lib/theme";

/** 시간대 자동 테마 — override 없을 때 매분 갱신 */
export default function ThemeSync() {
  useEffect(() => {
    const sync = () => {
      if (getStoredOverride()) return;
      applyTheme(getEffectiveTheme());
    };

    sync();
    const id = window.setInterval(sync, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return null;
}
