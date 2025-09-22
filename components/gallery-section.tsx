"use client"

import { useState, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"

const galleryImages = [
  {
    src: "/atlas-mountains-morocco-panoramic-view-with-snow-p.jpg",
    alt: "Atlas Mountains panoramic view",
    category: "Mountains",
  },
  {
    src: "/traditional-moroccan-pottery-colorful-ceramics-han.jpg",
    alt: "Traditional pottery",
    category: "Pottery",
  },
  {
    src: "/flowing-river-morocco-atlas-mountains-clear-water-.jpg",
    alt: "Mountain river",
    category: "Rivers",
  },
  {
    src: "/amazigh-berber-people-traditional-clothing-morocco.jpg",
    alt: "Amazigh culture",
    category: "Culture",
  },
  {
    src: "/moroccan-souk-market-spices-colorful-traditional-b.jpg",
    alt: "Traditional market",
    category: "Markets",
  },
  {
    src: "/rock-carvings-prehistoric-art-morocco-yagour-plate.jpg",
    alt: "Ancient rock carvings",
    category: "Heritage",
  },
  {
    src: "/traditional-berber-village-morocco-atlas-mountains.jpg",
    alt: "Traditional village",
    category: "Villages",
  },
  {
    src: "/natural-spring-morocco-clear-water-oasis-palm-tree.jpg",
    alt: "Natural spring",
    category: "Nature",
  },
]

const categories = ["All", "Mountains", "Pottery", "Rivers", "Culture", "Markets", "Heritage", "Villages", "Nature"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className={`text-center mb-16 ${isRTL ? "rtl" : ""}`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-primary text-balance"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visual Journey
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the stunning landscapes, rich culture, and vibrant life of Jamaâat Tighdouine through our curated
            gallery.
          </motion.p>
        </motion.div>

        <motion.div
          className={`flex flex-wrap justify-center gap-4 mb-12 ${isRTL ? "flex-row-reverse" : ""}`}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.category}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  rotateY: isRTL ? -2 : 2,
                }}
                layout
              >
                <div className="relative overflow-hidden rounded-lg">
                  <motion.img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.15, rotate: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className={`absolute bottom-4 text-white ${isRTL ? "right-4 text-right" : "left-4 text-left"}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <p className="font-semibold text-lg">{image.alt}</p>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {image.category}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
