"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Heart, Mountain, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const featureIcons = [
  { icon: MapPin, key: "location" },
  { icon: Heart, key: "hospitality" },
  { icon: Mountain, key: "nature" },
  { icon: Users, key: "culture" },
]

export function AboutSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
          <motion.div
            className={isRTL ? "lg:col-start-2" : ""}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? 50 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className={`text-4xl md:text-5xl font-bold mb-6 text-primary text-balance ${isRTL ? "text-right" : "text-left"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("about.title")}
            </motion.h2>
            <motion.p
              className={`text-lg text-muted-foreground mb-8 leading-relaxed text-pretty ${isRTL ? "text-right" : "text-left"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("about.description")}
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className={`text-xl font-semibold text-primary mb-3 ${isRTL ? "text-right" : "text-left"}`}>
                {t("about.heritage")}
              </h3>
              <p
                className={`text-lg text-muted-foreground leading-relaxed text-pretty ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("about.heritageText")}
              </p>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className={`text-xl font-semibold text-primary mb-3 ${isRTL ? "text-right" : "text-left"}`}>
                {t("about.nature")}
              </h3>
              <p
                className={`text-lg text-muted-foreground leading-relaxed text-pretty ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("about.natureText")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featureIcons.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="border-border bg-card hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-start space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                        <motion.div
                          className="bg-primary/10 p-3 rounded-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <feature.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className={isRTL ? "text-right" : "text-left"}>
                          <h3 className="font-semibold text-card-foreground mb-2">
                            {/* Feature titles would need to be added to translations */}
                            {feature.key === "location" && "Strategic Location"}
                            {feature.key === "hospitality" && "Amazigh Hospitality"}
                            {feature.key === "nature" && "Natural Beauty"}
                            {feature.key === "culture" && "Living Culture"}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {/* Feature descriptions would need to be added to translations */}
                            {feature.key === "location" &&
                              "Located in Al Haouz province, serving as a gateway between the Atlas Mountains and the plains of Morocco."}
                            {feature.key === "hospitality" &&
                              "Experience the legendary warmth and generosity of the Amazigh people, who have called these mountains home for millennia."}
                            {feature.key === "nature" &&
                              "Surrounded by majestic peaks, flowing rivers, and pristine landscapes that change with the seasons."}
                            {feature.key === "culture" &&
                              "A vibrant community that preserves ancient traditions while embracing sustainable development."}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={`relative ${isRTL ? "lg:col-start-1" : ""}`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/traditional-berber-amazigh-village-morocco-atlas-m.jpg"
                alt="Traditional Amazigh village at sunset"
                className="w-full h-[600px] object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>

            <motion.div
              className={`absolute -bottom-8 bg-card p-6 rounded-xl shadow-lg border border-border ${isRTL ? "-right-8" : "-left-8"}`}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-primary"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                >
                  1000+
                </motion.div>
                <div className="text-sm text-muted-foreground">Years of History</div>
              </div>
            </motion.div>

            <motion.div
              className={`absolute -top-8 bg-card p-6 rounded-xl shadow-lg border border-border ${isRTL ? "-left-8" : "-right-8"}`}
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: -50, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: 5 }}
            >
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-accent"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.7, type: "spring" }}
                >
                  5
                </motion.div>
                <div className="text-sm text-muted-foreground">Major Attractions</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
