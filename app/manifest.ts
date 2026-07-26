import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Tour packages and car, SUV, Tempo Traveller & bus rental across Uttar Pradesh.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f8ff",
    theme_color: "#102a52",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
