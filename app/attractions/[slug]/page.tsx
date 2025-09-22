import { notFound } from "next/navigation"
import { attractions } from "@/data/attractions"
import { AttractionDetail } from "@/components/attraction-detail"

interface AttractionPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }))
}

export default function AttractionPage({ params }: AttractionPageProps) {
  const attraction = attractions.find((a) => a.slug === params.slug)

  if (!attraction) {
    notFound()
  }

  return <AttractionDetail attraction={attraction} />
}

export function generateMetadata({ params }: AttractionPageProps) {
  const attraction = attractions.find((a) => a.slug === params.slug)

  if (!attraction) {
    return {
      title: "Attraction Not Found",
    }
  }

  return {
    title: `${attraction.title} - Jamaâat Tighdouine`,
    description: attraction.description,
  }
}