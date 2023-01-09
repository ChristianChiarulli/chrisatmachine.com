import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Christian Chiarulli | Blog",
    description: "Christian Chiarulli's Blog",
    site: "https://chrisatmachine.com",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>en-us</language>`,
  });
