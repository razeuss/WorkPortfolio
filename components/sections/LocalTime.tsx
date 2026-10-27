"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

/** Live local time, updates every minute. Renders nothing on the server to avoid mismatch. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: site.timezone }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return <time suppressHydrationWarning>{time ?? "--:--"}</time>;
}
