"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/about.jpg"
            alt="KhakiConsult China Sourcing Company"
            className="w-full h-full object-cover object-center"
            height={720}
            width={1080}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            A Sourcing Company in That Delivers
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Welcome to KhakiConsult, a trusted sourcing company providing top
            product sourcing services globally. We bridge the gap between
            Chinese factories and international businesses, ensuring smooth,
            cost-effective imports.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Who We Are
          </h2>
          <p className="mt-6 text-gray-700 text-center">
            We are a consulting company specializing in product sourcing and
            consultation. Our mission is to make sourcing easy for clients using
            functional technology. With over 10 years’ experience in sourcing,
            quality control, and inspections, KhakiConsult works with numerous
            suppliers in China, forging long-lasting trade relationships
            worldwide.
          </p>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            What We Do
          </h2>
          <p className="mt-6 text-gray-700 text-center max-w-3xl mx-auto">
            We provide end-to-end sourcing services to companies outside China,
            leveraging China’s manufacturing power and cost-efficient industry.
            Our team keeps you informed every step of the sourcing process,
            ensuring only high-quality products reach your hands.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Sourcing & Supplier Verification
              </h3>
              <p className="text-gray-600">
                We source suppliers, verify production quality, handle sampling,
                and ensure competitive pricing for your products.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Consultation & Project Management
              </h3>
              <p className="text-gray-600">
                Our team provides expert consultation, designs sourcing
                strategies, and manages the process end-to-end, reducing import
                risks and delays.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">
                Quality Control & Inspection
              </h3>
              <p className="text-gray-600">
                We conduct quality inspections during production, checking
                specifications, color, dimensions, and quantity, ensuring your
                products meet standards.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">Shipping & Customs</h3>
              <p className="text-gray-600">
                From door-to-door shipping to customs clearance, we handle all
                logistics and paperwork, making the import process seamless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
          <p className="mt-6 text-gray-700">
            After understanding your requirements, we source products, verify
            suppliers, compare prices, handle sampling, estimate shipping and
            customs duties, and deliver products to your location. We act as
            your office in China, ensuring the best prices and quality products
            for your business.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 underline text-[#c7a676] font-semibold hover:text-[#b89561] transition"
          >
            Ask for a Consultation →
          </Link>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get a FREE Quote or Importing Consultation Now
        </h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Start sourcing your products today and work with our trusted China
          sourcing experts.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-[#c7a676] text-white font-semibold rounded-md hover:bg-[#b89561] transition"
        >
          Help Me Source Products
        </Link>
      </section>
    </main>
  );
}
