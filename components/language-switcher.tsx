"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion, AnimatePresence } from "framer-motion"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ar", name: "العربية", flag: "🇲🇦" },
  ]

  const currentLang = languages.find((lang) => lang.code === language)

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-primary/10"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLang?.name}</span>
        <span className="sm:hidden">{currentLang?.flag}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[150px]"
          >
            {languages.map((lang) => (
              <motion.button
                key={lang.code}
                whileHover={{ backgroundColor: "hsl(var(--primary) / 0.1)" }}
                onClick={() => {
                  setLanguage(lang.code as "en" | "fr" | "ar")
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors ${
                  language === lang.code ? "bg-primary/10 text-primary" : "hover:bg-primary/5"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
