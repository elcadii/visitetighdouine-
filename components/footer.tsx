"use client"

import { MapPin, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

export function Footer() {
  const { t, isRTL } = useLanguage()

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ]

  const quickLinks = [
    { key: "home", href: "#home" },
    { key: "tourism", href: "#tourism" },
    { key: "rentals", href: "#rentals" },
    { key: "gallery", href: "#gallery" },
    { key: "about", href: "#about" },
    { key: "contact", href: "#contact" },
  ]

  const attractions = [
    "tourism.attractions.spring.title",
    "tourism.attractions.plateau.title",
    "tourism.attractions.village.title",
    "tourism.attractions.pottery.title",
    "tourism.attractions.souk.title",
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isRTL ? "rtl" : ""}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className="text-xl font-bold mb-4">Jamaâat Tighdouine</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-pretty">{t("footer.description")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.key} whileHover={{ x: isRTL ? -5 : 5 }}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className="text-xl font-bold mb-4">Main Attractions</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              {attractions.map((attraction, index) => (
                <motion.li
                  key={attraction}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {t(attraction)}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className={isRTL ? "text-right" : "text-left"}
          >
            <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <motion.div
                className={`flex items-center space-x-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">Al Haouz, Morocco</span>
              </motion.div>
              <motion.div
                className={`flex items-center space-x-3 ${isRTL ? "flex-row-reverse space-x-reverse" : ""}`}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80 text-sm">info@tighdouine.ma</span>
              </motion.div>
            </div>

            <div className={`flex space-x-4 mt-6 ${isRTL ? "flex-row-reverse space-x-reverse justify-end" : ""}`}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={`border-t border-primary-foreground/20 mt-8 pt-8 text-center ${isRTL ? "rtl" : ""}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-primary-foreground/80">
            © 2024 Jamaâat Tighdouine. {t("footer.rights")} | Gateway to the Atlas Mountains
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
