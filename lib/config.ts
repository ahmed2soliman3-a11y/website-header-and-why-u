export const siteConfig = {
  // رقم الواتساب بالصيغة الدولية (بدون + أو 00)
  // مصر: 201066981062
  // السعودية: 966xxxxxxxxx
  whatsappNumber: "201066981062",

  // رسالة الواتساب الافتراضية
  whatsappMessage: "مرحبا، أبي أستفسر عن الفواحات الدعائية",
}

// دالة لإنشاء رابط واتساب
export function getWhatsAppLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage || siteConfig.whatsappMessage)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`
}
