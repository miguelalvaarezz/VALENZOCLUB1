"use client"

import { useState, useEffect, useRef } from 'react'

export function useImageLoader() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesProgress, setImagesProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let timeoutId: NodeJS.Timeout | null = null
    let cleanup: (() => void) | null = null

    // Esperar un poco para que el DOM se renderice completamente
    const timer = setTimeout(() => {
      const images: HTMLImageElement[] = []
      
      // Buscar todas las imágenes en el contenedor
      const findAllImages = (element: Element) => {
        // Imágenes directas
        const imgElements = element.querySelectorAll('img')
        imgElements.forEach((img) => {
          if (img.src && !images.includes(img)) {
            images.push(img)
          }
        })

        // Imágenes en elementos con background-image
        const allElements = element.querySelectorAll('*')
        allElements.forEach((el) => {
          const style = window.getComputedStyle(el)
          const bgImage = style.backgroundImage
          if (bgImage && bgImage !== 'none') {
            const urlMatch = bgImage.match(/url\(["']?([^"')]+)["']?\)/)
            if (urlMatch && urlMatch[1]) {
              const img = new Image()
              img.src = urlMatch[1]
              if (!images.includes(img)) {
                images.push(img)
              }
            }
          }
        })
      }

      findAllImages(container)

      if (images.length === 0) {
        setImagesLoaded(true)
        setImagesProgress(100)
        return
      }

      let loadedCount = 0
      let errorCount = 0

      const handleImageLoad = () => {
        loadedCount++
        const progress = Math.round((loadedCount / images.length) * 100)
        setImagesProgress(progress)

        if (loadedCount + errorCount === images.length) {
          // Pequeño delay para asegurar que todo está renderizado
          setTimeout(() => {
            setImagesLoaded(true)
          }, 300)
        }
      }

      const handleImageError = () => {
        errorCount++
        loadedCount++
        const progress = Math.round((loadedCount / images.length) * 100)
        setImagesProgress(progress)

        if (loadedCount + errorCount === images.length) {
          setTimeout(() => {
            setImagesLoaded(true)
          }, 300)
        }
      }

      // Verificar si las imágenes ya están cargadas
      images.forEach((img) => {
        if (img.complete && img.naturalWidth !== 0) {
          handleImageLoad()
        } else {
          img.addEventListener('load', handleImageLoad, { once: true })
          img.addEventListener('error', handleImageError, { once: true })
        }
      })

      // Timeout de seguridad: mostrar contenido después de 5 segundos máximo
      timeoutId = setTimeout(() => {
        setImagesLoaded(true)
        setImagesProgress(100)
      }, 5000)

      cleanup = () => {
        if (timeoutId) clearTimeout(timeoutId)
        images.forEach((img) => {
          img.removeEventListener('load', handleImageLoad)
          img.removeEventListener('error', handleImageError)
        })
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      if (cleanup) cleanup()
    }
  }, [])

  return { imagesLoaded, imagesProgress, containerRef }
}

