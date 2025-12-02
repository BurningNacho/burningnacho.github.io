/**
 * Cookie Consent Banner Component - GDPR Compliant
 */
function renderCookieConsent() {
  return `
    <div id="cookie-consent" class="hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div class="flex-1">
            <h3 class="font-bold text-lg mb-2">Uso de cookies</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              Utilizamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. 
              Al hacer clic en "Aceptar", consientes el uso de cookies según nuestra 
              <a href="privacidad.html" class="text-black underline hover:text-gray-600">Política de Privacidad</a>.
            </p>
          </div>
          <div class="flex gap-3 flex-shrink-0">
            <button 
              id="cookie-accept" 
              class="px-6 py-2 bg-black text-white rounded-[4px] font-medium hover:bg-gray-800 transition-colors text-sm whitespace-nowrap"
              aria-label="Aceptar cookies">
              Aceptar
            </button>
            <button 
              id="cookie-decline" 
              class="px-6 py-2 bg-gray-100 text-black rounded-[4px] font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
              aria-label="Rechazar cookies">
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
    <script>
      (function() {
        const cookieConsent = document.getElementById('cookie-consent');
        const acceptBtn = document.getElementById('cookie-accept');
        const declineBtn = document.getElementById('cookie-decline');
        
        // Check if user has already made a choice
        const cookieChoice = localStorage.getItem('cookieConsent');
        
        if (!cookieChoice) {
          // Show banner after a short delay
          setTimeout(() => {
            cookieConsent.classList.remove('hidden');
          }, 1000);
        }
        
        // Accept cookies
        acceptBtn.addEventListener('click', function() {
          localStorage.setItem('cookieConsent', 'accepted');
          cookieConsent.classList.add('hidden');
          // Initialize analytics if function is available
          if (typeof initAnalytics === 'function') {
            initAnalytics();
          }
        });
        
        // Decline cookies
        declineBtn.addEventListener('click', function() {
          localStorage.setItem('cookieConsent', 'declined');
          cookieConsent.classList.add('hidden');
        });
      })();
    </script>
  `;
}
