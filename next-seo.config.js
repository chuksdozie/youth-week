// next-seo.config.js
const title =
  "Timeout - The Advantage of an African Talent in the Global Tech Industry";
const description =
  "Join us for Timeout, an event celebrating the impact and advantages of African talent in the global tech industry. Network, learn, and be inspired by success stories and industry insights.";

export default {
  title,
  description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.timeout-event.com/", // Replace with your event's URL
    title,
    description,
    images: [
      {
        url: "https://www.timeout-event.com/banner.jpg", // Replace with your event's banner image URL
        width: 800,
        height: 600,
        alt: "Timeout Event Banner",
      },
    ],
    site_name: "Timeout Event",
  },
  twitter: {
    handle: "@timeout_event", // Replace with your Twitter handle
    site: "@timeout_event",
    cardType: "summary_large_image",
  },
};
