import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLOWFITZ — Modern Online Store & Admin Panel" },
      {
        name: "description",
        content:
          "GLOWFITZ: browse curated products, add to cart, checkout, track orders, and manage the whole store from a built-in admin panel.",
      },
      { property: "og:title", content: "GLOWFITZ — Modern Online Store & Admin Panel" },
      {
        property: "og:description",
        content:
          "Shop curated tech, style and home essentials. Cart, checkout, order history and a full admin dashboard.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/shopease.html"
      title="GLOWFITZ store"
      className="h-screen w-screen border-0"
    />
  );
}
