import type { Metadata } from "next";
import PhotosContent from "../../photos/photos-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Photos",
    description: "My Photos",
    alternates: {
      canonical: `/${lang}/photos/`,
      languages: {
        en: "/en/photos/",
        id: "/id/photos/",
        ar: "/ar/photos/",
      },
    },
  };
}

export default function LocalizedPhotosPage() {
  return <PhotosContent />;
}
