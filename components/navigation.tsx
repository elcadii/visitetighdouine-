"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const menuItems = [
    { key: "home", section: "home" },
    { key: "tourism", section: "tourism" },
    { key: "rentals", section: "rentals" },
    { key: "gallery", section: "gallery" },
    { key: "about", section: "about" },
    { key: "contact", section: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-xl border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-primary cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Jamaâat Tighdouine
          </motion.div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
            {menuItems.map((item, index) => (
              <motion.button
                key={item.key}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  color: "hsl(var(--primary))",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground hover:text-primary transition-all duration-300 font-medium relative group"
              >
                {t(`nav.${item.key}`)}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className={`flex items-center gap-4 md:hidden ${isRTL ? "flex-row-reverse" : ""}`}>
            <LanguageSwitcher />
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 border-t border-border/50 overflow-hidden"
            >
              <div className={`flex flex-col gap-4 pt-4 ${isRTL ? "items-end" : "items-start"}`}>
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.key}
                    initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{
                      scale: 1.05,
                      color: "hsl(var(--primary))",
                      x: isRTL ? -10 : 10,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.section)}
                    className={`text-foreground hover:text-primary transition-all duration-300 font-medium ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
