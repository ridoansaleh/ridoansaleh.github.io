import type { Metadata } from "next";
import PhotosContent from "./photos-content";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return <PhotosContent />;
}
