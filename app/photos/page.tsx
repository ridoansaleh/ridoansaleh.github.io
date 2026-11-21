import type { Metadata } from "next";
import PhotosContent from "./photos-content";
import { SiteFrame } from "../components/site-frame";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
  alternates: {
    canonical: "/en/photos/",
    languages: {
      en: "/en/photos/",
      id: "/id/photos/",
      ar: "/ar/photos/",
    },
  },
};

export default function Photos() {
  return (
    <SiteFrame language="en">
      <PhotosContent />
    </SiteFrame>
  );
}
