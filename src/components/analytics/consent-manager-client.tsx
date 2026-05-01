"use client";

import dynamic from "next/dynamic";

const ConsentManager = dynamic(
  () => import("./consent-manager").then((m) => m.ConsentManager),
  { ssr: false }
);

export function ConsentManagerClient() {
  return <ConsentManager />;
}
