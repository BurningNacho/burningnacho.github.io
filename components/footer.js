/**
 * Footer component - Reusable footer section
 */
function renderFooter() {
  return `
    <footer class="mt-auto py-16 border-t border-gray-100 bg-white text-sm">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex items-center gap-2">
                    <div class="w-6 h-6 bg-black rounded text-white flex items-center justify-center font-bold text-xs">V</div>
                    <span class="font-semibold text-lg">VerifactVLC</span>
                </div>
                <div class="flex flex-wrap gap-6 text-gray-500 justify-center">
                    <a href="precios.html" class="hover:text-black">Precios</a>
                    <a href="sobre-nosotros.html" class="hover:text-black">Sobre nosotros</a>
                    <a href="ayuda.html" class="hover:text-black">Ayuda</a>
                    <a href="privacidad.html" class="hover:text-black">Privacidad</a>
                </div>
                <div class="text-gray-400">
                    &copy; 2025 VerifactVLC.
                </div>
            </div>
        </div>
    </footer>
`;
}
