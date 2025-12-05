"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt="China sourcing and product import assistance"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        <div className="container mx-auto px-6 text-center animate-fade">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-[900px] mx-auto">
            Want to Source Products From China?
          </h1>

          <p className="mt-6 text-lg max-w-[800px] mx-auto leading-relaxed">
            We provide top China sourcing services that make importing simple,
            safe, and cost-effective — with verified factories, product
            sampling, price negotiation, and door-to-door delivery.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#c7a676] hover:bg-[#b89561] text-white font-semibold rounded-md transition"
            >
              Source a Product Now
            </Link>

            <Link
              href="/services"
              className="px-8 py-3 border border-white hover:bg-white hover:text-black font-semibold rounded-md transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Work with the Best Sourcing Agents in Khaki Consult
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Over a decade of experience delivering high-quality sourcing,
            supplier verification and smooth shipping for global businesses.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "10+ years experience in product sourcing",
              "Quality control inspections",
              "Consultation on sourcing services",
              "Access to premium Chinese factories",
              "Door-to-door shipping",
              "Supplier verification & sampling",
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white shadow-sm rounded-md border hover:shadow-md transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 underline text-[#c7a676] font-semibold hover:text-[#b89561] transition"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}
