"use client";

import { IntroAnimation } from "./intro-animation";

export function SiteWrapper({ children }: { children: React.ReactNode }) {
  return <IntroAnimation>{children}</IntroAnimation>;
}
