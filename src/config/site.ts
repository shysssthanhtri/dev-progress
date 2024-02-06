export const siteConfig = {
  name: "Dev Progress",
  url: "http://localhost:3000",
  ogImage: "/og.jpg",
  description:
    "An application for managing developers' progress across multiple projects",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  authors: [
    {
      name: "Tri Nguyen",
      url: "https://github.com/shysssthanhtri",
    },
  ],
  creator: "Tri Nguyen",
};

export type SiteConfig = typeof siteConfig;
