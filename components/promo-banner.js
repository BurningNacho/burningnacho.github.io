/**
 * Promo Banner component - Blue promotional banner with countdown
 */
function renderPromoBanner() {
  return `
    <div class="bg-blue-600 text-white py-3 px-4 text-base md:text-lg">
        <div class="container mx-auto relative min-h-[2.5rem]">
            <!-- Left: Promo Text - Completely to the left -->
            <div class="absolute left-0 top-1/2 -translate-y-1/2 text-center md:text-left">
                <span class="font-bold">Anticípate a Verifactu:</span>
                <span class="ml-1 font-semibold">50% descuento por 3 meses</span>
            </div>
            
            <!-- Center: Countdown Timer - Centered -->
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div class="flex items-center gap-3 md:gap-4" id="countdown-timer">
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl md:text-3xl" id="countdown-days">0</span>
                        <span class="text-xs md:text-sm font-medium text-blue-200">DÍAS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl md:text-3xl" id="countdown-hours">0</span>
                        <span class="text-xs md:text-sm font-medium text-blue-200">HORAS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl md:text-3xl" id="countdown-minutes">0</span>
                        <span class="text-xs md:text-sm font-medium text-blue-200">MINUTOS</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <span class="font-bold text-2xl md:text-3xl" id="countdown-seconds">0</span>
                        <span class="text-xs md:text-sm font-medium text-blue-200">SEGUNDOS</span>
                    </div>
                </div>
            </div>
            
            <!-- Right: Contact - Completely to the right -->
            <div class="absolute right-0 top-1/2 -translate-y-1/2 text-center md:text-right">
                <span class="font-semibold">Habla con nosotros: </span>
                <a href="mailto:contacto@verifactvlc.com" class="underline hover:text-blue-200 transition-colors font-bold">contacto@verifactvlc.com</a>
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

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
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
          daysEl.textContent = "0";
          hoursEl.textContent = "0";
          minutesEl.textContent = "0";
          secondsEl.textContent = "0";
          return;
        }

        const days = ts.days || 0;
        const hours = ts.hours || 0;
        const minutes = ts.minutes || 0;
        const seconds = ts.seconds || 0;

        daysEl.textContent = String(days);
        hoursEl.textContent = String(hours);
        minutesEl.textContent = String(minutes);
        secondsEl.textContent = String(seconds);
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
