/**
 * Head component - Reusable HTML head section with SEO, security, and performance optimizations
 * @param {Object} options - Configuration object
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.url - Canonical URL
 * @param {string} options.image - Open Graph image URL
 * @param {string} options.type - Open Graph type (default: 'website')
 */
function renderHead(options = {}) {
  const {
    title = "VerifactVLC - Tu negocio al día, sin líos.",
    description = "Factura con Odoo y cumple con +Verifactu. La forma más fácil de llevar tu negocio para autónomos y PYMES. Conecta tu banco, pregunta a la IA y olvídate del papeleo.",
    url = "https://verifactvlc.com",
    image = "https://verifactvlc.com/favicon.svg",
    type = "website",
  } = options;

  const siteName = "VerifactVLC";
  const baseUrl = "https://verifactvlc.com";

  return `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="author" content="${siteName}">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Spanish">
    <meta name="revisit-after" content="7 days">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${url}">
    
    <!-- DNS Prefetch for Performance -->
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link rel="dns-prefetch" href="https://cdn.tailwindcss.com">
    <link rel="dns-prefetch" href="https://unpkg.com">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="favicon.svg">
    <link rel="apple-touch-icon" href="favicon.svg">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="es_ES">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="${url}">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="${image}">
    
    <!-- Content Security Policy -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-ancestors 'self';">
    
    <!-- Security Headers -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff">
    <meta http-equiv="X-Frame-Options" content="SAMEORIGIN">
    <meta http-equiv="X-XSS-Protection" content="1; mode=block">
    <meta name="referrer" content="strict-origin-when-cross-origin">
    
    <!-- Preconnect for Critical Resources -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Libre+Baskerville:ital@0;1&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Iconos Lucide -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Libre Baskerville', 'serif'],
                    },
                    colors: {
                        notion: {
                            bg: '#FFFFFF',
                            text: '#050505',
                            gray: '#37352f',
                            lightgray: '#F7F7F5',
                            border: '#E9E9E7'
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        /* Simulación de sombras suaves estilo Notion */
        .shadow-notion {
            box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
        }
        /* Skip to main content link for accessibility */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            z-index: 100;
        }
        .skip-link:focus {
            top: 0;
        }
    </style>
`;
}
