export function mobileNav() {
  const mainNavLinks = document.querySelector(".main-nav__links");
  const loginLink = document.querySelector(".login-link");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = mainNavLinks.getAttribute("data-visible");

    if (visibility === "false") {
      mainNavLinks.setAttribute("data-visible", true);
      loginLink.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      mainNavLinks.setAttribute("data-visible", false);
      loginLink.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
}
