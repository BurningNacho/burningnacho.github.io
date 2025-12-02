# VerifactVLC

Sitio web estático para VerifactVLC - Plataforma de facturación con Odoo que cumple con +Verifactu.

## 📋 Descripción

VerifactVLC es una landing page moderna y responsive diseñada para autónomos y PYMES que necesitan una solución de facturación simple, asequible y que cumpla automáticamente con la normativa +Verifactu.

## 🚀 Características

- ✅ **SEO Optimizado**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- ✅ **Accesibilidad**: Skip links, ARIA labels, navegación por teclado
- ✅ **Seguridad**: Content Security Policy, security headers
- ✅ **Rendimiento**: DNS prefetch, preconnect, optimizaciones
- ✅ **GDPR Compliant**: Cookie consent banner
- ✅ **Responsive**: Diseño mobile-first con Tailwind CSS
- ✅ **Componentes Reutilizables**: Arquitectura modular

## 📁 Estructura del Proyecto

```
VerifactuVLC/
├── components/          # Componentes JavaScript reutilizables
│   ├── head.js         # Head component con SEO y seguridad
│   ├── navbar.js       # Barra de navegación
│   ├── mobile-menu.js  # Menú móvil
│   ├── footer.js       # Pie de página
│   ├── scripts.js      # Scripts comunes
│   ├── cookie-consent.js # Banner de cookies GDPR
│   ├── analytics.js    # Placeholder para analytics
│   └── pages-config.js # Configuración de páginas
├── index.html          # Página principal
├── precios.html        # Página de precios
├── sobre-nosotros.html # Página sobre nosotros
├── ayuda.html          # Centro de ayuda
├── privacidad.html     # Política de privacidad
├── 404.html            # Página de error 404
├── favicon.svg         # Favicon
├── robots.txt          # Configuración para crawlers
└── sitemap.xml         # Mapa del sitio
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS**: Framework CSS utility-first (via CDN)
- **JavaScript (Vanilla)**: Sin dependencias, componentes modulares
- **Lucide Icons**: Iconos SVG ligeros

## 📦 Instalación y Uso

### Desarrollo Local

1. Clona el repositorio:
```bash
git clone <repository-url>
cd VerifactuVLC
```

2. Abre el proyecto en un servidor local:

**Opción 1: Python**
```bash
python3 -m http.server 8000
```

**Opción 2: Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Opción 3: VS Code Live Server**
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

3. Abre tu navegador en `http://localhost:8000`

### Producción

El sitio es estático y puede ser desplegado en cualquier hosting:

- **Netlify**: Arrastra y suelta la carpeta
- **Vercel**: `vercel deploy`
- **GitHub Pages**: Push a la rama `gh-pages`
- **AWS S3 + CloudFront**: Sube los archivos a un bucket S3

## 🔧 Configuración

### SEO Meta Tags

Cada página incluye meta tags completos. Para personalizar, edita el `<head>` de cada HTML o usa el componente `head.js`.

### Analytics

Para habilitar Google Analytics:

1. Obtén tu GA4 Measurement ID desde Google Analytics (formato: `G-XXXXXXXXXX`)
2. Añade el siguiente script antes de cerrar `</head>` en cualquier página HTML, o configúralo globalmente:

```html
<script>
  // Configura tu GA4 Measurement ID
  window.GA4_MEASUREMENT_ID = 'G-QTBRTN8026'; // Reemplaza con tu ID real
</script>
```

3. El sistema cargará automáticamente Google Analytics solo si:
   - El usuario ha aceptado las cookies (GDPR compliant)
   - Se ha configurado un GA4_MEASUREMENT_ID válido

**Nota**: El componente `analytics.js` ya está incluido en todas las páginas. Solo necesitas configurar el ID.

### Cookie Consent

El banner de cookies está configurado para cumplir con GDPR. El consentimiento se guarda en `localStorage`.

## 📝 Componentes

### Head Component

```javascript
// Uso básico (no usado actualmente, pero disponible)
renderHead({
  title: "Mi Página",
  description: "Descripción de la página",
  url: "https://verifactvlc.com/mi-pagina.html"
});
```

### Navbar

```javascript
renderNavbar('home'); // 'home', 'precios', 'nosotros', 'ayuda', 'privacidad'
```

### Footer

```javascript
renderFooter();
```

### Cookie Consent

```javascript
renderCookieConsent();
```

## 🎨 Personalización

### Colores

Los colores están definidos en la configuración de Tailwind. Edita el objeto `colors` en cada HTML o en `components/head.js`.

### Fuentes

Las fuentes (Inter y Libre Baskerville) se cargan desde Google Fonts. Para cambiar, modifica los enlaces en el `<head>`.

## 🔒 Seguridad

El sitio incluye:

- **Content Security Policy (CSP)**: Meta tag en cada página
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection
- **Referrer Policy**: Configurado para privacidad

**Nota**: Para máxima seguridad, configura estos headers también en el servidor (Apache/Nginx).

## ♿ Accesibilidad

- Skip links para navegación por teclado
- ARIA labels en elementos interactivos
- Iconos decorativos con `aria-hidden="true"`
- Estructura semántica HTML5
- Contraste de colores WCAG AA

## 📱 Responsive Design

El sitio está optimizado para:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large Desktop: 1280px+

## 🐛 Solución de Problemas

### Los iconos no aparecen

Asegúrate de que `lucide.createIcons()` se ejecuta después de cargar el DOM y después de inyectar componentes.

### Los componentes no se inyectan

Verifica que los scripts se cargan en el orden correcto:
1. `pages-config.js`
2. `navbar.js`
3. `mobile-menu.js`
4. `footer.js`
5. `scripts.js`
6. `cookie-consent.js`

### CSP bloquea recursos

Si el Content Security Policy es muy restrictivo, ajusta los meta tags CSP en cada página.

## 📄 Licencia

[Especificar licencia]

## 👥 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para preguntas o soporte:
- Email: soporte@verifactvlc.com
- Web: https://verifactvlc.com

---

**Nota**: Este es un sitio estático. Para funcionalidades dinámicas (formularios, autenticación, etc.), se requiere un backend adicional.
