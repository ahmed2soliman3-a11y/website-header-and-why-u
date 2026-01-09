import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getWhatsAppLink } from "@/lib/config"

export function HeroSection() {
  const whatsappLink = getWhatsAppLink("مرحبا، أبي أطلب عرض سعر للفواحات الدعائية")

  return (
    <section id="hero" className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden bg-[#F8F2ED]">
      <div className="container relative z-10 py-6 md:py-12 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
          {/* Image on the left (شمال) */}
          <div className="flex-shrink-0 relative w-[95%] sm:w-[80%] md:w-[50%] -mt-10 md:-mt-24">
  <Image
    src="/images/d8-b5-d9-88-d8-b1-d9-87-20-d8-a7-d9-84-d9-85-d9-88-d9-82-d8-b9.png"
    alt="فواحة دعائية معلقة"
    width={550}
    height={700}
    className="relative z-10 drop-shadow-2xl w-full h-auto scale-125 md:scale-150 origin-top"
    priority
  />
</div>

          {/* Text on the right (يمين) */}
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-right mt-30 md:mt-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              فواحات دعائية تخلّي براندك <span className="text-primary">ينحس</span> قبل ما ينشاف
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              نقدم فواحات فاخرة مخصصة للشركات، هدايا دعائية تحمل اسمك وتترك انطباع ما ينتسى عند عملائك.
            </p>
            <div>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-bold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-lg shadow-primary/25 rounded-lg"
              >
                <Link href={whatsappLink} target="_blank">
                  اطلب عرض سعر الحين
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
