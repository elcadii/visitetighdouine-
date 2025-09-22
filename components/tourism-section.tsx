"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Mountain, Users, Palette, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const attractionKeys = [
  {
    key: "spring",
    slug: "ain-sidi-el-wafi",
    icon: Droplets,
    image: "/natural-spring-morocco-with-clear-water-and-olive-.jpg",
    category: "Natural Wonder",
  },
  {
    key: "plateau",
    slug: "yagour-plateau",
    icon: Mountain,
    image: "/rock-carvings-prehistoric-art-on-mountain-plateau-.jpg",
    category: "Historical Site",
  },
  {
    key: "village",
    slug: "izgour-village",
    icon: Users,
    image: "/traditional-berber-amazigh-village-morocco-atlas-m.jpg",
    category: "Cultural Heritage",
  },
  {
    key: "pottery",
    slug: "talatast-pottery",
    icon: Palette,
    image: "/traditional-moroccan-pottery-making-clay-crafts-ar.jpg",
    category: "Artisan Craft",
  },
  {
    key: "souk",
    slug: "weekly-souk-tighdouine",
    icon: ShoppingBag,
    image: "/moroccan-souk-market-colorful-spices-crafts-tradit.jpg",
    category: "Local Market",
  },
]

export function TourismSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="tourism" className="py-20 bg-muted/30" ref={ref}>
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
            {t("tourism.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("tourism.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractionKeys.map((attraction, index) => (
            <motion.div
              key={attraction.key}
              initial={{ opacity: 0, y: 50, rotateY: isRTL ? 15 : -15 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      rotateY: isRTL ? 15 : -15,
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                rotateY: isRTL ? -2 : 2,
                scale: 1.02,
              }}
              className="perspective-1000"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card border-border h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={attraction.image || "/placeholder.svg"}
                    alt={t(`tourism.attractions.${attraction.key}.title`)}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  >
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {attraction.category}
                    </Badge>
                  </motion.div>
                  <motion.div
                    className="absolute top-4 right-4 bg-primary/90 p-2 rounded-full"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "hsl(var(--primary))",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <attraction.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>

                <CardHeader className={isRTL ? "text-right" : "text-left"}>
                  <CardTitle className="text-xl text-card-foreground">
                    {t(`tourism.attractions.${attraction.key}.title`)}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {t(`tourism.attractions.${attraction.key}.description`)}
                  </CardDescription>
                </CardHeader>

                <CardContent className={isRTL ? "text-right" : "text-left"}>
                  <Link href={`/attractions/${attraction.slug}`}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90">{t("tourism.seeMore")}</Button>
                    </motion.div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const attractions = attractionKeys.map((attraction) => ({
  ...attraction,
  title: `tourism.attractions.${attraction.key}.title`,
  description: `tourism.attractions.${attraction.key}.description`,
}))
