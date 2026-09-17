/** In-page scroll to discovery — no URL/hash changes (avoids router history side effects). */
export function scrollToIntegrationsDiscover(behavior: ScrollBehavior = "smooth") {
  document.getElementById("discover")?.scrollIntoView({ behavior, block: "start" });
}
