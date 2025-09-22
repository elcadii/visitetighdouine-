"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ArrowLeft, MapPin, Play, ImageIcon, Droplets, Mountain, Users, ShoppingBag } from "lucide-react"
import Link from "next/link"

const iconMap = {
  Droplets,
  Mountain,
  Users,
  ShoppingBag,
}

interface Attraction {
  title: string
  slug: string
  description: string
  icon: string // changed from any to string
  image: string
  category: string
  highlights: string[]
}

interface AttractionDetailProps {
  attraction: Attraction
}

export function AttractionDetail({ attraction }: AttractionDetailProps) {
  const Icon = iconMap[attraction.icon] || Droplets

  // Sample gallery images for each attraction
  const galleryImages = [
    attraction.image,
    `/placeholder.svg?height=300&width=400&query=${attraction.title} detail view 1`,
    `/placeholder.svg?height=300&width=400&query=${attraction.title} detail view 2`,
    `/placeholder.svg?height=300&width=400&query=${attraction.title} detail view 3`,
    `/placeholder.svg?height=300&width=400&query=${attraction.title} detail view 4`,
    `/placeholder.svg?height=300&width=400&query=${attraction.title} detail view 5`,
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/#tourism">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Retour aux attractions
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={attraction.image || "/placeholder.svg"}
          alt={attraction.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground">
              {attraction.category}
            </Badge>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {attraction.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto text-pretty leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {attraction.description}
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Photo Gallery */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Galerie Photos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${attraction.title} - Image ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Play className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Vidéo</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground">Vidéo de présentation de {attraction.title}</p>
                <p className="text-sm text-muted-foreground mt-2">(Lien YouTube/Vimeo à intégrer)</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Map Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-primary">Localisation</h2>
          </div>
          <Card className="overflow-hidden">
            <div className="relative aspect-video bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mb-4 mx-auto" />
                <p className="text-muted-foreground">Carte Google Maps de {attraction.title}</p>
                <p className="text-sm text-muted-foreground mt-2">(Intégration Google Maps à ajouter)</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Highlights */}
        <section>
          <h2 className="text-3xl font-bold text-primary mb-8">Points Forts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attraction.highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{highlight}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
