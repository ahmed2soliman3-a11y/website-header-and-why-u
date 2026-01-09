"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { getWhatsAppLink } from "@/lib/config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappLink = getWhatsAppLink()

  return (
    <header className="bg-card/70 backdrop-blur-xl mx-3 sm:mx-4 mt-3 sm:mt-3 px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between shadow-sm rounded-full sticky top-3 sm:top-3 z-50 border border-border/50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/images/logo-orange.png"
            alt="رونق - معطرات سيارات"
            width={100}
            height={50}
            className="w-20 sm:w-24 h-auto -mt-4 -ml-6"
          />
        </Link>
      </div>

      <nav className="hidden md:block">
        <ul className="flex gap-4 lg:gap-6 font-bold text-foreground text-sm">
          <li>
            <Link href="#hero" className="hover:text-primary transition cursor-pointer">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="#products" className="hover:text-primary transition cursor-pointer">
              منتجاتنا
            </Link>
          </li>
          <li>
            <Link href="#why-us" className="hover:text-primary transition cursor-pointer">
              ليه نحنا
            </Link>
          </li>
          <li>
            <Link href={whatsappLink} target="_blank" className="hover:text-primary transition cursor-pointer">
              تواصل معنا
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-full bg-primary/10 text-primary"
        aria-label={isMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <Link
        href={whatsappLink}
        target="_blank"
        className="hidden sm:block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105"
      >
        اطلب الحين
      </Link>

      {isMenuOpen && (
        <div className="absolute top-full right-0 left-0 mt-2 mx-3 bg-card/95 backdrop-blur-xl rounded-2xl shadow-lg border border-border/50 p-5 md:hidden">
          <nav>
            <ul className="flex flex-col gap-4 font-bold text-foreground text-base">
              <li>
                <Link
                  href="#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="#products"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition"
                >
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link
                  href="#why-us"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition"
                >
                  ليه نحنا
                </Link>
              </li>
              <li>
                <Link
                  href={whatsappLink}
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition"
                >
                  تواصل معنا
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  href={whatsappLink}
                  target="_blank"
                  onClick={() => setIsMenuOpen(false)}
                  className="block bg-primary text-primary-foreground px-4 py-4 rounded-full text-center text-lg font-bold hover:bg-primary/90 transition"
                >
                  اطلب الحين
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
