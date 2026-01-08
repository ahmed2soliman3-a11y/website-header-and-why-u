import { Sparkles, Clock, Building2, Award } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "تخصيص كامل باللوقو",
    description: "نطبع لوقو شركتك بأعلى جودة",
  },
  {
    icon: Clock,
    title: "روايح فاخرة تدوم وقت طويل",
    description: "عطورات مميزة تبقى أسابيع",
  },
  {
    icon: Building2,
    title: "تناسب المكاتب والمعارض",
    description: "هدايا مثالية لعملائك وموظفينك",
  },
  {
    icon: Award,
    title: "جودة عالية تليق باسم شركتك",
    description: "خامات ممتازة وتشطيب احترافي",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 bg-secondary/30 px-4 sm:px-8">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 sm:mb-6 text-balance">
            ليه تختار فواحاتنا الدعائية؟
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            التفاصيل الصغيرة تفرق. فواحاتنا مو بس ريحة، هي تجربة تعكس هوية شركتك وتربط البراند بالمكان واللحظة.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 sm:p-7 md:p-8 shadow-sm hover:shadow-lg transition-shadow border border-border/50"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 sm:mb-6">
                <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-base sm:text-lg text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
