"use client";

import { ImageGrid } from "app/components/image-grid";
import { useLanguage } from "app/components/language";
import { t } from "app/translations";

const places = [
  { src: "/photos/photo1.jpg", alt: "Roman columns" },
  { src: "/photos/photo2.jpg", alt: "Big Ben" },
  { src: "/photos/photo3.jpg", alt: "Sacré-Cœur Basilica" },
  { src: "/photos/photo4.jpg", alt: "Eiffel Tower" },
  { src: "/photos/photo5.jpg", alt: "Taj Mahal" },
  { src: "/photos/photo6.jpg", alt: "Colosseum" },
];

export default function PhotosContent() {
  const { language } = useLanguage();

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        {t(language, "photos")}
      </h1>
      <ImageGrid
        columns={3}
        images={places.map((place, index) => ({
          ...place,
          href: [
            "https://unsplash.com/photos/people-walking-near-building-during-daytime-dFLBDQQeffU?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            "https://unsplash.com/photos/big-ben-london-MdJq0zFUwrw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            "https://unsplash.com/photos/a-view-of-the-inside-of-a-building-through-a-circular-window-Tp-3hrx88J4",
            "https://unsplash.com/photos/the-eiffel-tower-towering-over-the-city-of-paris-OgPuPvPsHLM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
            "https://unsplash.com/photos/taj-mahal-india-IPlPkWPJ2fo",
            "https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime-3cyBR1rIJmA?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
          ][index],
        }))}
      />
      <ImageGrid columns={2} images={places.slice(0, 4)} />
      <ImageGrid columns={4} images={places} />
    </section>
  );
}
