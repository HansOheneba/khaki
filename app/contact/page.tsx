"use client";

import { Mail, Phone, MessageCircleMore, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
 const contacts = [
   {
     icon: MessageCircleMore,
     title: "WhatsApp",
     value: "+86 1585 1872 192",
     link: "https://wa.me/8615851872192",
     color: "from-green-400 to-green-600",
   },
   {
     icon: Phone,
     title: "Call Us",
     value: "+86 1585 1872 192",
     link: "tel:+8615851872192",
     color: "from-blue-400 to-blue-600",
   },
   {
     icon: Mail,
     title: "Email",
     value: "khakiconsult@gmail.com",
     link: "mailto:khakiconsult@gmail.com",
     color: "from-orange-400 to-orange-600",
   },
   {
     icon: Instagram,
     title: "Instagram",
     value: "@khakiautoparts",
     link: "https://www.instagram.com/khakiautoparts",
     color: "from-pink-500 via-purple-500 to-orange-500",
   },
 ];


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                Get in Touch with Khaki Consult
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Looking to buy or ship products from China? Our sourcing team
                helps you find trusted suppliers, negotiate the best prices, and
                handle shipping end-to-end. Contact us today. <br /> We respond fast
                and guide you every step of the way.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 pt-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <Link
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors">
                      <div
                        className={` p-3 rounded-lg shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-black stroke-2" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-muted-foreground">
                          {contact.title}
                        </p>
                        <p className="text-base md:text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {contact.value}
                        </p>
                      </div>
                      <div className="shrink-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/contact.jpg"
              alt="Team communication"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay for text */}
            <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent flex flex-col justify-end p-8 text-white">
              <p className="text-lg md:text-xl leading-relaxed mb-4">
                Our team is here to help you succeed with personalized support
                and guidance.
              </p>
              <p className="text-sm md:text-base opacity-90">
                Response time: Usually less than 24 hours on business days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Image Section */}
      <div className="md:hidden px-4 sm:px-6 py-8">
        <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/contact.jpg"
            alt="Team communication"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-muted/30 py-12 md:py-16 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">
                Available whenever you need us
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">&lt;24h</div>
              <p className="text-muted-foreground">Average response time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Dedicated support team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
