/**
 * Navbar component - Reusable navigation bar
 * @param {string} activePage - Current active page ('home', 'precios', 'nosotros', 'ayuda', 'privacidad')
 */
function renderNavbar(activePage = "home") {
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
    if (page.active) {
      return "hover:text-black transition-colors text-black";
    }
    return (
      "hover:text-black transition-colors" +
      (page.label === "Home" ? " font-semibold" : "")
    );
  };

  return `
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-notion-border h-16 flex items-center transition-all duration-300" role="navigation" aria-label="Navegación principal">
        <div class="container mx-auto px-4 lg:px-8 flex justify-between items-center">
            <!-- Logo -->
            <a href="index.html" class="flex items-center gap-2 cursor-pointer group">
                <div class="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white transition-transform group-hover:scale-105">
                    <span class="font-bold text-lg">V</span>
                </div>
                <span class="font-semibold text-lg tracking-tight">VerifactVLC</span>
            </a>

            <!-- Enlaces Desktop -->
            <div class="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600">
                <a href="${pages.precios.href}" class="${getLinkClass(
    pages.precios
  )}">Precios</a>
                <a href="${pages.nosotros.href}" class="${getLinkClass(
    pages.nosotros
  )}">Nosotros</a>
                <a href="${pages.home.href}" class="${getLinkClass(
    pages.home
  )}">Home</a>
                <a href="${pages.ayuda.href}" class="${getLinkClass(
    pages.ayuda
  )}">Ayuda</a>
                <a href="${pages.privacidad.href}" class="${getLinkClass(
    pages.privacidad
  )}">Privacidad</a>
            </div>

            <!-- Botones Acción -->
            <div class="hidden lg:flex items-center gap-4 text-sm font-medium">
                <a href="mailto:verifactvlc@gmail.com" class="hover:text-gray-900 transition-colors" aria-label="Iniciar sesión">Entrar</a>
                <a href="precios.html" class="bg-black text-white px-4 py-2 rounded-[4px] hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2" aria-label="Empezar ahora">
                    <i data-lucide="zap" class="w-4 h-4" aria-hidden="true"></i> Empezar ahora
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button 
                class="lg:hidden p-2 hover:bg-gray-100 rounded-md" 
                onclick="toggleMenu()"
                aria-label="Abrir menú de navegación"
                aria-expanded="false"
                id="mobile-menu-button">
                <i data-lucide="menu" class="w-6 h-6" aria-hidden="true"></i>
            </button>
        </div>
    </nav>
`;
}
