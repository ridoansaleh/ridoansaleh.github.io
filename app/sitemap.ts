export const dynamic = "force-static";

import { MetadataRoute } from "next";
import { metaData } from "./config";

const BaseUrl = metaData.baseUrl.endsWith("/")
  ? metaData.baseUrl
  : `${metaData.baseUrl}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["en", "id", "ar"].flatMap((language) =>
    ["", "photos/"].map((page) => ({
      url: `${BaseUrl}${language}/${page}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  );

  return routes;
}
