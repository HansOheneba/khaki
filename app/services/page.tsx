"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Sourcing Design",
      description:
        "We design detailed sourcing plans that account for all risks and contingencies. Our experts ensure your overseas business is safe and smooth.",
    },
    {
      title: "Supplier Vetting",
      description:
        "We vet suppliers thoroughly, checking company licenses, productivity, communication, and reliability to ensure you only work with trusted manufacturers.",
    },
    {
      title: "Price Negotiation",
      description:
        "We negotiate directly with factory owners to get you the best prices, ensuring you pay fair costs for quality products.",
    },
    {
      title: "Quality Control",
      description:
        "We monitor production closely, verifying product quality, dimensions, color, and quantity. We provide visuals and detailed reports during mass production.",
    },
    {
      title: "Customs Documentation",
      description:
        "We handle customs clearance, taxes, and paperwork, ensuring your shipments arrive on time without delays.",
    },
  ];

  return (
    <main className="w-full">
      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/services.jpg"
            alt="KhakiConsult Services"
            className="w-full h-full object-cover object-center"
            height={6900}
            width={5225}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Our Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            At KhakiConsult, we provide end-to-end China sourcing solutions for
            businesses around the world. From supplier vetting to shipping and
            customs, we make importing seamless.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            How We Work
          </h2>
          <p className="mt-4 text-gray-700 text-center max-w-3xl mx-auto">
            We work through a unique project management system that ensures
            every sourcing agreement is successful. Explore our services below.
          </p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-[#c7a676] font-semibold underline hover:text-[#b89561] transition"
                >
                  Contact Us →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Don&apos;t Wait Any Longer
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Get a free estimate on your product sourcing needs and connect with
          China’s best manufacturing companies.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-[#c7a676] text-white font-semibold rounded-md hover:bg-[#b89561] transition"
        >
          Request a Free Estimate
        </Link>
      </section>
    </main>
  );
}
