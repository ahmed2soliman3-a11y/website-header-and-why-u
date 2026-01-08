import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 bg-card border-t border-border px-4 sm:px-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo-orange.png"
              alt="رونق - معطرات سيارات"
              width={140}
              height={70}
              className="h-14 sm:h-16 w-auto"
            />
          </Link>
          <p className="text-muted-foreground text-sm sm:text-base text-center md:text-right">
            © {new Date().getFullYear()} رونق معطرات سيارات. كل الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
