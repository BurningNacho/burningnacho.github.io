/**
 * Promo Banner component - Blue promotional banner with countdown
 */
function renderPromoBanner() {
  return `
    <div class="bg-blue-600 text-white py-2 md:py-3 px-4 text-sm md:text-base lg:text-lg">
        <div class="container mx-auto">
            <!-- Mobile Layout: Stacked -->
            <div class="flex flex-col md:hidden items-center gap-2 py-1">
                <div class="text-center">
                    <span class="font-bold">Anticípate a Verifactu:</span>
                    <span class="ml-1 font-semibold">50% descuento por 3 meses</span>
                </div>
                <div class="flex items-center gap-2" id="countdown-timer">
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-xl" id="countdown-days">0</span>
                        <span class="text-[10px] font-medium text-blue-200">D</span>
                    </div>
                    <span class="text-blue-200">:</span>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-xl" id="countdown-hours">0</span>
                        <span class="text-[10px] font-medium text-blue-200">H</span>
                    </div>
                    <span class="text-blue-200">:</span>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-xl" id="countdown-minutes">0</span>
                        <span class="text-[10px] font-medium text-blue-200">M</span>
                    </div>
                    <span class="text-blue-200">:</span>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-xl" id="countdown-seconds">0</span>
                        <span class="text-[10px] font-medium text-blue-200">S</span>
                    </div>
                </div>
                <div class="text-center text-xs">
                    <a href="mailto:verifactvlc@gmail.com" class="underline hover:text-blue-200 transition-colors font-semibold">verifactvlc@gmail.com</a>
                </div>
            </div>
            
            <!-- Desktop Layout: Horizontal -->
            <div class="hidden md:flex relative min-h-[2.5rem] items-center justify-between">
                <div class="text-left">
                    <span class="font-bold">Anticípate a Verifactu:</span>
                    <span class="ml-1 font-semibold">50% descuento por 3 meses</span>
                </div>
                
                <div class="flex items-center gap-3 lg:gap-4" id="countdown-timer-desktop">
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl lg:text-3xl" id="countdown-days-desktop">0</span>
                        <span class="text-xs lg:text-sm font-medium text-blue-200">DÍAS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl lg:text-3xl" id="countdown-hours-desktop">0</span>
                        <span class="text-xs lg:text-sm font-medium text-blue-200">HORAS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl lg:text-3xl" id="countdown-minutes-desktop">0</span>
                        <span class="text-xs lg:text-sm font-medium text-blue-200">MINUTOS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl lg:text-3xl" id="countdown-seconds-desktop">0</span>
                        <span class="text-xs lg:text-sm font-medium text-blue-200">SEGUNDOS</span>
                    </div>
                </div>
                
                <div class="text-right">
                    <span class="font-semibold">Habla con nosotros: </span>
                    <a href="mailto:verifactvlc@gmail.com" class="underline hover:text-blue-200 transition-colors font-bold">verifactvlc@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
  `;
}

function initPromoBannerCountdown() {
  function loadCountdownLibrary(callback) {
    if (typeof countdown !== "undefined") {
      callback();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/countdown@2.6.0/countdown.js";
    script.onload = callback;
    script.onerror = function () {
      console.error("Failed to load countdown library");
    };
    document.head.appendChild(script);
  }

  function initCountdown() {
    const daysEl = document.getElementById("countdown-days");
    const hoursEl = document.getElementById("countdown-hours");
    const minutesEl = document.getElementById("countdown-minutes");
    const secondsEl = document.getElementById("countdown-seconds");
    
    const daysElDesktop = document.getElementById("countdown-days-desktop");
    const hoursElDesktop = document.getElementById("countdown-hours-desktop");
    const minutesElDesktop = document.getElementById("countdown-minutes-desktop");
    const secondsElDesktop = document.getElementById("countdown-seconds-desktop");

    if ((!daysEl || !hoursEl || !minutesEl || !secondsEl) && 
        (!daysElDesktop || !hoursElDesktop || !minutesElDesktop || !secondsElDesktop)) {
      setTimeout(initCountdown, 100);
      return;
    }

    const endDate = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);

    loadCountdownLibrary(function () {
      function updateCountdown() {
        if (typeof countdown === "undefined") {
          return;
        }

        const now = new Date();
        const ts = countdown(
          now,
          endDate,
          countdown.DAYS |
            countdown.HOURS |
            countdown.MINUTES |
            countdown.SECONDS
        );

        if (!ts || ts.value <= 0) {
          const zero = "0";
          if (daysEl) daysEl.textContent = zero;
          if (hoursEl) hoursEl.textContent = zero;
          if (minutesEl) minutesEl.textContent = zero;
          if (secondsEl) secondsEl.textContent = zero;
          if (daysElDesktop) daysElDesktop.textContent = zero;
          if (hoursElDesktop) hoursElDesktop.textContent = zero;
          if (minutesElDesktop) minutesElDesktop.textContent = zero;
          if (secondsElDesktop) secondsElDesktop.textContent = zero;
          return;
        }

        const days = ts.days || 0;
        const hours = ts.hours || 0;
        const minutes = ts.minutes || 0;
        const seconds = ts.seconds || 0;

        const daysStr = String(days);
        const hoursStr = String(hours);
        const minutesStr = String(minutes);
        const secondsStr = String(seconds);

        if (daysEl) daysEl.textContent = daysStr;
        if (hoursEl) hoursEl.textContent = hoursStr;
        if (minutesEl) minutesEl.textContent = minutesStr;
        if (secondsEl) secondsEl.textContent = secondsStr;
        
        if (daysElDesktop) daysElDesktop.textContent = daysStr;
        if (hoursElDesktop) hoursElDesktop.textContent = hoursStr;
        if (minutesElDesktop) minutesElDesktop.textContent = minutesStr;
        if (secondsElDesktop) secondsElDesktop.textContent = secondsStr;
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCountdown);
  } else {
    setTimeout(initCountdown, 100);
  }
}
