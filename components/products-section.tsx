import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppLink } from "@/lib/config"

const products = [
  {
    image: "/images/d8-b5-d9-88-d8-b1-d9-87-20-d8-a7-d9-84-d9-85-d9-88-d9-82-d8-b9.png",
    name: "فواحة كلاسيك",
    description: "تصميم كلاسيكي مع طباعة اللوقو بالألوان",
  },
  {
    image: "/images/d8-b5-d9-88-d8-b1-d9-87-20-d8-a7-d9-84-d9-85-d9-88-d9-82-d8-b94.png",
    name: "فواحة سبورت",
    description: "تصميم عصري يناسب الشركات الرياضية",
  },
  {
    image: "/images/d8-b5-d9-88-d8-b1-d9-87-20-d8-a7-d9-84-d9-85-d9-88-d9-82-d8-b93.png",
    name: "فواحة قطرة",
    description: "شكل قطرة مائية مميز ويلفت الانتباه",
  },
  {
    image: "/images/d8-b5-d9-88-d8-b1-d9-87-20-d8-a7-d9-84-d9-85-d9-88-d9-82-d8-b92.png",
    name: "فواحة بريميوم",
    description: "تصميم راقي للعلامات الفاخرة",
  },
]

export function ProductsSection() {
  const whatsappLink = getWhatsAppLink("مرحبا، أبي أطلب فواحات دعائية")

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-8">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
            فواحات دعائية مصممة لبراندك
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            اختر من مجموعتنا المتنوعة، مع إمكانية تخصيص الريحة والتغليف بما يناسب هوية شركتك.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50"
            >
              <div className="relative aspect-square bg-gradient-to-b from-secondary/50 to-secondary/20 p-6 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={350}
                  height={400}
                  className="object-contain h-full w-auto group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                />
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{product.name}</h3>
                <p className="text-base sm:text-lg text-muted-foreground">{product.description}</p>
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-3"
                >
                  <Link href={whatsappLink} target="_blank">
                    اطلب الحين
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
