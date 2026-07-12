import type { MetadataRoute } from "next";
import { packages, site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const packageRoutes: MetadataRoute.Sitemap = packages.map((p) => ({
    url: `${site.url}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...packageRoutes];
}
