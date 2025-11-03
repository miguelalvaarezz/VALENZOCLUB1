# 🚀 VALENZO CLUB - Quick Start Guide

## ✅ Servidor en Ejecución

El servidor de desarrollo de Next.js está corriendo en:
**http://localhost:3000**

---

## 🌐 Páginas Disponibles

### Home `/`
- Hero con animaciones
- Logo y lema "We don't sell clothes — we sell access"
- CTA "Join the Club"

### Collection `/collection`
- Galería con 6 productos
- Filtros: All, Outerwear, Apparel, Accessories
- Glassmorphism

### Events `/events`
- 4 eventos
- Layout estilo invitación
- CTA a solicitud de acceso

### About `/about`
- Historia de la marca
- Valores: Exclusivity, Movement, Elite
- Timeline 2020–2024
- Merriweather

### Access `/access`
- Formulario de solicitud
- Validaciones
- Confirmación de envío

---

## 🎨 Características Principales

### Diseño
- Dark (`hsl(230, 20%, 6%)`)
- Acentos azul eléctrico (`hsl(217, 90%, 60%)`)
- Glassmorphism
- Gradientes

### Animaciones
- Hero con círculos flotantes
- Transiciones Framer Motion
- Efectos hover
- Cursor magnético

### UX
- Scroll suave
- Transiciones entre páginas
- Navegación responsive
- Footer con enlaces

---

## 🛠️ Comandos Útiles

```bash
# Servidor de desarrollo (ya corriendo)
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

---

## 📁 Estructura del Proyecto

```
valenzo-club/
├── app/                  # Páginas Next.js App Router
│   ├── page.tsx         # Homepage
│   ├── layout.tsx       # Layout principal con fonts
│   ├── globals.css      # Estilos globales
│   ├── collection/      # Página de productos
│   ├── events/          # Página de eventos
│   ├── about/           # Página sobre nosotros
│   └── access/          # Página de membresía
├── components/
│   ├── navbar.tsx       # Navegación
│   ├── hero.tsx         # Hero section
│   ├── footer.tsx       # Footer
│   ├── magnetic-cursor.tsx  # Cursor personalizado
│   └── ui/              # Componentes base
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts         # Utilidades (cn)
├── tailwind.config.ts   # Configuración Tailwind
├── postcss.config.js    # Config PostCSS
├── next.config.js       # Config Next.js
└── package.json         # Dependencias
```

---

## 🎯 Próximos Pasos Sugeridos

1. Reemplazar imágenes de Unsplash por fotos reales
2. Integrar backend para el formulario
3. Añadir checkout
4. Implementar CMS para contenido
5. A/B testing del hero
6. SEO y meta tags
7. Analytics (GA4)
8. Vídeo de fondo opcional
9. Integración con Instagram
10. Sistema de membresía

---

## 🐛 Troubleshooting

### El servidor no inicia
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Errores de TypeScript
```bash
npm run build  # Ver errores
```

### Estilos no cargan
- Verificar `tailwind.config.ts`
- Revisar `app/globals.css`
- Reiniciar dev server

---

## 📞 Contacto

VALENZO CLUB - Access the Night
© 2024 All rights reserved

