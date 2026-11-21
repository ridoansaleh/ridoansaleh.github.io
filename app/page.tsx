import type { Metadata } from "next";
import { SiteFrame } from "./components/site-frame";
import { HomeContent } from "./home-content";

export const metadata: Metadata = {
  alternates: {
    canonical: "/en/",
    languages: { en: "/en/", id: "/id/", ar: "/ar/" },
  },
};

export default function Page() {
  return (
    <SiteFrame language="en">
      <HomeContent />
    </SiteFrame>
  );
}
