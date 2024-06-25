export async function fetchContent() {
  // In a real application, this would fetch data from an API
  // For now, we'll just return the static content
  return {
    title: "ACORN",
    heading: "Welcome to ACORN",
    description: "ACORN is a community-based union of low and moderate income people.",
    navItems: [
      { url: "/", text: "Home" },
      { url: "/about", text: "About" },
      { url: "/campaigns", text: "Campaigns" },
    ],
    footerText: "© 2024 ACORN. All rights reserved.",
  }
}
