/**
 * Shared pages configuration - Works with file:// protocol
 * @param {string} activePage - Current active page identifier
 * @returns {Object<string, {href: string, label: string, active: boolean}>}
 */
function getPages(activePage = "home") {
  const pagesConfig = {
    home: { href: "index.html", label: "Home" },
    precios: { href: "precios.html", label: "Precios" },
    nosotros: { href: "sobre-nosotros.html", label: "Nosotros" },
    ayuda: { href: "ayuda.html", label: "Ayuda" },
    privacidad: { href: "privacidad.html", label: "Privacidad" },
  };

  return Object.fromEntries(
    Object.entries(pagesConfig).map(([key, value]) => [
      key,
      { ...value, active: key === activePage },
    ])
  );
}
