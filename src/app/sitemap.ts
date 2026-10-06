import { MetadataRoute } from "next";
import { FEATURES } from "@/data/features";
import { SOLUTIONS } from "@/data/solutions";
import { ROLES } from "@/data/roles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://scholarix-os.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/product`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/demo`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const featureRoutes: MetadataRoute.Sitemap = FEATURES.map((feat) => ({
    url: `${baseUrl}/features/${feat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const solutionRoutes: MetadataRoute.Sitemap = SOLUTIONS.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.88,
  }));

  const roleRoutes: MetadataRoute.Sitemap = ROLES.map((r) => ({
    url: `${baseUrl}/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.87,
  }));

  return [...staticRoutes, ...featureRoutes, ...solutionRoutes, ...roleRoutes];
}
