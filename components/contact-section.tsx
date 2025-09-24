"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const { t, isRTL } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-background" ref={ref}>
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
            {t("contact.title")}
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t("contact.subtitle")}
          </motion.p>
        </motion.div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isRTL ? "lg:grid-flow-col-dense" : ""}`}>
           {/* kjjjjjjjjjjjjjjjjjjj */}
           <motion.div
  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
  transition={{ duration: 0.6, delay: 1 }}
  whileHover={{ scale: 1.02 }}
>
  <a
    href="https://maps.app.goo.gl/4gTXjWPbMxVjj1j48" // ← الرابط ديال Google Maps
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src="/map-of-morocco-atlas-mountains-region.jpg" // ← الصورة ديال الخريطة
      alt="Map showing location of Jamaâat Tighdouine"
      className="w-full h-96 object-cover rounded-lg"
    />
    <motion.div
      className="absolute inset-0 bg-primary/10 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      <motion.div
        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
      >
        Jamaâat Tighdouine
      </motion.div>
    </motion.div>
  </a>
</motion.div>

          <motion.div
            className={`space-y-8 ${isRTL ? "lg:col-start-1" : ""}`}
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRTL ? -50 : 50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`flex items-start space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <motion.div className="bg-primary/10 p-3 rounded-lg" whileHover={{ scale: 1.1, rotate: 5 }}>
                      <MapPin className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <h3 className="font-semibold text-card-foreground mb-2">{t("contact.address")}</h3>
                      <p className="text-muted-foreground leading-relaxed">{t("contact.addressText")}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`flex items-start space-x-4 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}>
                    <motion.div className="bg-primary/10 p-3 rounded-lg" whileHover={{ scale: 1.1, rotate: 5 }}>
                      <Clock className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className={isRTL ? "text-right" : "text-left"}>
                      <h3 className="font-semibold text-card-foreground mb-2">Best Time to Visit</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Spring (March-May) and Fall (September-November) offer the most pleasant weather for exploring
                        our attractions and hiking in the Atlas Mountains.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

           
          </motion.div>
        </div>
      </div>
    </section>
  )
}
