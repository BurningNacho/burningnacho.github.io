/**
 * Mobile Menu component - Reusable mobile navigation menu
 * @param {string} activePage - Current active page
 */
function renderMobileMenu(activePage = "home") {
  const pages =
    typeof getPages !== "undefined"
      ? getPages(activePage)
      : {
          home: {
            href: "index.html",
            label: "Home",
            active: activePage === "home",
          },
          precios: {
            href: "precios.html",
            label: "Precios",
            active: activePage === "precios",
          },
          nosotros: {
            href: "sobre-nosotros.html",
            label: "Nosotros",
            active: activePage === "nosotros",
          },
          ayuda: {
            href: "ayuda.html",
            label: "Ayuda",
            active: activePage === "ayuda",
          },
          privacidad: {
            href: "privacidad.html",
            label: "Privacidad",
            active: activePage === "privacidad",
          },
        };

  const getLinkClass = (page) => {
    return (
      "py-4 border-b border-gray-100 text-lg font-medium" +
      (page.active ? " font-semibold" : "")
    );
  };

  return `
    <div id="mobile-menu" class="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-20 px-6" role="navigation" aria-label="Menú de navegación móvil">
        <a href="${pages.precios.href}" class="${getLinkClass(
    pages.precios
  )}" onclick="toggleMenu()">Precios</a>
        <a href="${pages.nosotros.href}" class="${getLinkClass(
    pages.nosotros
  )}" onclick="toggleMenu()">Nosotros</a>
        <a href="${pages.home.href}" class="${getLinkClass(
    pages.home
  )}" onclick="toggleMenu()">Home</a>
        <a href="${pages.ayuda.href}" class="${getLinkClass(
    pages.ayuda
  )}" onclick="toggleMenu()">Ayuda</a>
        <a href="${pages.privacidad.href}" class="${getLinkClass(
    pages.privacidad
  )}" onclick="toggleMenu()">Privacidad</a>
        <div class="mt-8 flex flex-col gap-4">
            <a href="mailto:login@verifactvlc.com" class="text-center py-3 rounded-md bg-gray-100 font-medium" onclick="toggleMenu()" aria-label="Iniciar sesión">Entrar</a>
            <a href="precios.html" class="text-center py-3 rounded-md bg-black text-white font-medium" onclick="toggleMenu()" aria-label="Empezar ahora">Empezar ahora</a>
        </div>
    </div>
`;
}
