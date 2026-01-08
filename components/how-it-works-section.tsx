const steps = [
  {
    number: "١",
    title: "تواصل معنا",
    description: "راسلنا على الواتساب وقولنا وش تبي بالضبط",
  },
  {
    number: "٢",
    title: "اختر التصميم",
    description: "اختر شكل الفواحة اللي يناسب براندك",
  },
  {
    number: "٣",
    title: "ارسل اللوقو",
    description: "ارسل لنا لوقو شركتك بجودة عالية",
  },
  {
    number: "٤",
    title: "استلم طلبك",
    description: "نوصّلها لباب بيتك أو مكتبك",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-8">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
            كيف تحصل على فواحاتك الدعائية؟
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 text-center h-full border border-border/50 shadow-sm">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold mx-auto mb-4 sm:mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -left-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
