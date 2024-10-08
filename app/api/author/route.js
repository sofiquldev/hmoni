export async function GET(request) {
  return new Response(
    JSON.stringify({
      name: "H Moni",
      email: "info@hmoni.com",
      socialLinks: [
        {
          name: "facebook",
          href: "https://facebook.com/hmoni75",
        },
        {
          name: "x",
          href: "https://x.com/hmoni75",
        },
        {
          name: "instagram",
          href: "https://instagram.com/hmoni75",
        },
        {
          name: "linkedin",
          href: "https://linkedin.com/in/hmoni75",
        },
      ],
    },)
  );
}
