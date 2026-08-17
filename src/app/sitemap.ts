import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required by `output: "export"` — emits a plain sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
