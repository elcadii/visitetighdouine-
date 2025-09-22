"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Home, Building, Bed, Crown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "framer-motion"
import { useRef } from "react"

const rentalKeys = [
  {
    key: "villa",
    icon: Crown,
    image: "/moroccan-villa-mountain-view.jpg",
    price: "150€/night",
    features: ["4 bedrooms", "Garden", "Mountain view"],
  },
  {
    key: "apartment",
    icon: Building,
    image: "/modern-moroccan-apartment.jpg",
    price: "80€/night",
    features: ["2 bedrooms", "WiFi", "Central location"],
  },
  {
    key: "house",
    icon: Home,
    image: "/traditional-amazigh-house-morocco.jpg",
    price: "120€/night",
    features: ["3 bedrooms", "Traditional decor", "Courtyard"],
  },
  {
    key: "room",
    icon: Bed,
    image: "/cozy-moroccan-room-family-home.jpg",
    price: "45€/night",
    features: ["Private room", "Shared kitchen", "Family experience"],
  },
  {
    key: "cottage",
    icon: Home,
    image: "/charming-house-near-spring-morocco.jpg",
    price: "100€/night",
    features: ["2 bedrooms", "Near spring", "Quiet location"],
  },
]

export function RentalsSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="rentals" className="py-20 bg-background" ref={ref}>
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
            {t("rentals.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("rentals.subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentalKeys.map((rental, index) => (
            <motion.div
              key={rental.key}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      scale: 0.9,
                    }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
                rotateY: isRTL ? -3 : 3,
              }}
              className="perspective-1000"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-card border-border overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={rental.image || "/placeholder.svg"}
                    alt={t(`rentals.properties.${rental.key}.title`)}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.2, rotate: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute top-4 left-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {t(`rentals.properties.${rental.key}.title`)}
                    </Badge>
                  </motion.div>
                  <motion.div
                    className="absolute top-4 right-4 bg-primary/90 p-2 rounded-full"
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      backgroundColor: "hsl(var(--primary))",
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <rental.icon className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                  <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                  >
                    <Badge variant="default" className="bg-accent text-accent-foreground font-semibold">
                      {rental.price}
                    </Badge>
                  </motion.div>
                </div>

                <CardHeader className={isRTL ? "text-right" : "text-left"}>
                  <CardTitle className="text-xl text-card-foreground">
                    {t(`rentals.properties.${rental.key}.owner`)}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`rentals.properties.${rental.key}.description`)}
                  </p>
                </CardHeader>

                <CardContent className={isRTL ? "text-right" : "text-left"}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      {rental.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className={`flex items-center text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}
                          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 20 : -20 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.8 }}
                        >
                          <div className={`w-2 h-2 bg-accent rounded-full ${isRTL ? "ml-3" : "mr-3"}`} />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full bg-primary hover:bg-primary/90">{t("rentals.contact")}</Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
