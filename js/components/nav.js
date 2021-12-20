export function mobileNav() {
  const mainNavLinks = document.querySelector(".main-nav__links");
  const adminMenu = document.querySelector(".admin-menu");
  const navToggle = document.querySelector(".mobile-nav-toggle");

  navToggle.addEventListener("click", () => {
    const visibility = mainNavLinks.getAttribute("data-visible");

    if (visibility === "false") {
      mainNavLinks.setAttribute("data-visible", true);
      adminMenu.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
      mainNavLinks.setAttribute("data-visible", false);
      adminMenu.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  });
}
