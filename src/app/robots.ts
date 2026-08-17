import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required by `output: "export"` — emits a plain robots.txt at build time.
export const dynamic = "force-static";

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
