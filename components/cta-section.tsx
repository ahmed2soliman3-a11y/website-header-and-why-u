import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { getWhatsAppLink } from "@/lib/config"

export function CTASection() {
  const whatsappLink = getWhatsAppLink("مرحبا، أبي أتواصل معاكم بخصوص الفواحات الدعائية")

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden px-4 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-foreground/5 via-transparent to-transparent" />

      <div className="container relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-5 sm:mb-6 text-balance">
          خلّي براندك ينحس مو بس ينشاف
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          تواصل معنا الحين واحصل على فواحات دعائية تترك أثر ما ينتسى عند عملائك.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-background text-foreground hover:bg-background/90 text-lg sm:text-xl font-bold px-8 sm:px-12 py-6 sm:py-7 shadow-lg"
        >
          <Link href={whatsappLink} target="_blank">
            <MessageCircle className="ml-2 h-6 w-6 sm:h-7 sm:w-7" />
            كلمنا على الواتساب
          </Link>
        </Button>
      </div>
    </section>
  )
}
