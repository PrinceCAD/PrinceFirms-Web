import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The admin portal lands here once the backend exposes its APIs.
      disallow: "/admin/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
