# 📁 Directorio de Imágenes

## 🎨 Ubicación del Logo

Coloca el logo de VALENZO CLUB en este directorio:

### Para el logo principal de la marca:
- **Archivo:** `logo.png` o `logo.svg`
- **Ubicación:** `public/images/logo.png` o `public/images/logo.svg`

### Formatos soportados:
- ✅ PNG (recomendado para logotipos con transparencia)
- ✅ SVG (recomendado para logotipos vectoriales)
- ✅ JPG (solo si no necesitas transparencia)

---

## 📝 Cómo Usar el Logo

Una vez que subas el logo, se usará automáticamente en:

1. **Navbar** (`components/navbar.tsx`) - Logo en la barra de navegación
2. **Footer** (`components/footer.tsx`) - Logo en el pie de página

### Ejemplo de uso:

```tsx
import Image from 'next/image'

<Image 
  src="/images/logo.png" 
  alt="VALENZO CLUB" 
  width={150} 
  height={40}
  priority
/>
```

---

## 🖼️ Otras Imágenes

También puedes agregar aquí:
- `favicon.ico` - Icono del navegador
- `og-image.png` - Imagen para redes sociales
- `hero-bg.jpg` - Imagen de fondo para hero (opcional)

---

## 📋 Instrucciones de Subida

1. Arrastra tu archivo de logo a este directorio: `public/images/`
2. Renómbralo como `logo.png` o `logo.svg`
3. El sitio lo detectará automáticamente

---

**Nota:** Los archivos en `public/` son servidos directamente por Next.js desde la raíz.  
Por ejemplo: `public/images/logo.png` → `http://localhost:3000/images/logo.png`

© 2024 VALENZO CLUB - Access the Night

